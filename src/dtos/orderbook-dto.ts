import { BitFinexOrderbook } from "src/types/bitfinex-orderbook";

export class OrderbookDto {
  price: number
  count: number
  amount: number
  
  constructor(data: BitFinexOrderbook) {
    this.price = data[0]
    this.count = data[1]
    this.amount = data[2]
  }
}
