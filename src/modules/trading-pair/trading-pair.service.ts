import { Injectable } from '@nestjs/common';
import { TradingPairDto } from 'src/dtos/trading-pair-dto';
import { BitfinexService } from 'src/third-party/bitfinex/bitfinex.service';
import { AvailableTradingPairs } from 'src/types/available-trading-pairs';
import { OperationType } from 'src/types/operation-type';

@Injectable()
export class TradingPairService {
  constructor(readonly bitfinexService: BitfinexService){}

  async getOrderbookTipsByTradingPair(pair: AvailableTradingPairs): Promise<TradingPairDto> {
    return this.bitfinexService.getMarketStateByTradingPair(pair)
  }

  async calculatePriceForOrder(
    pair: AvailableTradingPairs,
    size: number,
    operation: OperationType,
  ) {
    const length = 100
    const data = await this.bitfinexService.getMarketStateByTradingPair(pair, length)
    const bids = data.orderbook.slice(0, length)
    bids.reverse()
    const asks = data.orderbook.slice(length)
    // console.log({
    //   bids: bids[99],
    //   asks: asks[0]
    // })

    
    
    return data
  }
}
