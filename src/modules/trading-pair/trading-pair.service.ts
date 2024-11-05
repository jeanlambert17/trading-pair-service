import { BadRequestException, HttpException, Injectable } from '@nestjs/common'
import { OrderbookDto } from 'src/dtos/orderbook-dto'
import { TradingPairDto } from 'src/dtos/trading-pair-dto'
import { BitfinexService } from 'src/third-party/bitfinex/bitfinex.service'
import { AvailableTradingPairs } from 'src/types/available-trading-pairs'
import { OperationType } from 'src/types/operation-type'
import { OperationPriceDto } from './dtos/operation-price-dto'

@Injectable()
export class TradingPairService {
  constructor(readonly bitfinexService: BitfinexService) {}

  async getOrderbookTipsByTradingPair(
    pair: AvailableTradingPairs,
    lenght: number
  ): Promise<TradingPairDto> {
    return this.bitfinexService.getMarketStateByTradingPair(pair, lenght)
  }

  async getOperationPrice(
    pair: AvailableTradingPairs,
    size: number,
    operation: OperationType
  ): Promise<OperationPriceDto> {
    const length = 100
    const data = await this.bitfinexService.getMarketStateByTradingPair(pair, length)
    const bids = data.orderbook.slice(0, length)
    const asks = data.orderbook.slice(length)
    let totalPrice = 0
    let remainingSize = 0
    if (operation === OperationType.Buy) {
      const data = this.calculatePrice(size, asks)
      totalPrice = data[0]
      remainingSize = data[1]
    } else if (operation === OperationType.Sell) {
      const data = this.calculatePrice(size, bids.reverse())
      totalPrice = data[0]
      remainingSize = data[1]
    }
    if (remainingSize === 0) {
      return new OperationPriceDto(totalPrice, size, operation)
    } else {
      throw new BadRequestException("The order couldn't be calculated")
    }
  }

  calculatePrice(size: number, orders: OrderbookDto[]): [number, number] {
    let totalPrice = 0
    let remainingSize = size
    let i = 0
    do {
      const order = orders[i]
      const amount = order.amount < 0 ? order.amount * -1 : order.amount
      const orderSize = remainingSize > amount ? amount : remainingSize
      totalPrice += orderSize * order.price
      remainingSize -= orderSize
      i++
    } while (remainingSize > 0 && i < orders.length)
    return [totalPrice, remainingSize]
  }
}
