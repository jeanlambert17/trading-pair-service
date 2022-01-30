import axios from 'axios';
import { HttpException, Injectable } from '@nestjs/common';
import { TradingPairDto } from 'src/dtos/trading-pair-dto';
import { AvailableTradingPairs } from 'src/types/available-trading-pairs';
import { BitFinexTradingPair } from 'src/types/bitfinex-trading-pair';
import { handleAxiosError } from 'src/utils/handle-axios-error';
import { BitFinexOrderbook } from 'src/types/bitfinex-orderbook';

@Injectable()
export class BitfinexService {
  private url = "https://api-pub.bitfinex.com/v2"

  async getMarketStateByTradingPair(pair: AvailableTradingPairs, length = 100): Promise<TradingPairDto> {
    if(!Object.values(AvailableTradingPairs).includes(pair)) {
      throw new HttpException({
        message: 'Invalid Trading Pair'
      }, 404)
    }
    const symbol = this.formatSymbol(pair)
    try {
      const ticker = await axios.get<BitFinexTradingPair>(`${this.url}/ticker/${symbol}`)
      const orderbook = await axios.get<BitFinexOrderbook[]>(`${this.url}/book/${symbol}/P0?len=${length}`)
      console.log(orderbook.data)
      return new TradingPairDto(symbol, ticker.data, orderbook.data)
    } catch(err) {
      handleAxiosError(err)
    }
  }

  formatSymbol(pair: string, marker: string = 't') {
    return `${marker}${pair.replace(/-/g, '')}`
  }

}
