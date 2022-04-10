
import { BitFinexOrderbook } from "src/types/bitfinex-orderbook"
import { BitFinexTradingPair } from "src/types/bitfinex-trading-pair"
import { OrderbookDto } from "./orderbook-dto"

// Bitfinex TradingPair data structure
// [
//   SYMBOL,
//   BID, 
//   BID_SIZE, 
//   ASK, 
//   ASK_SIZE, 
//   DAILY_CHANGE, 
//   DAILY_CHANGE_RELATIVE, 
//   LAST_PRICE, 
//   VOLUME, 
//   HIGH, 
//   LOW
// ],

export class TradingPairDto {
  symbol: string
  bid: number
  bidSize: number
  ask: number
  askSize: number
  dailyChange: number
  dailyChangeRelative: number
  lastPrice: number
  volume: number
  high: number
  low: number
  orderbook: OrderbookDto[]

  constructor(symbol: string, values: BitFinexTradingPair, book?: BitFinexOrderbook[]) {
    this.symbol = symbol
    this.bid = values[0]
    this.bidSize = values[1]
    this.ask = values[2]
    this.askSize = values[3]
    this.dailyChange = values[4]
    this.dailyChangeRelative = values[5]
    this.lastPrice = values[6]
    this.volume = values[7]
    this.high = values[8]
    this.low = values[9]
    this.orderbook = book? book.map(data => new OrderbookDto(data)) : []
  }
}
