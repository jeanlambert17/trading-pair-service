import { OperationType } from 'src/types/operation-type'

export class OperationPriceDto {
  price: number
  size: number
  operation: OperationType

  constructor(price: number, size: number, operation: OperationType) {
    this.price = price
    this.size = size
    this.operation = operation
  }
}
