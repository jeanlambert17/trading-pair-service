import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { AvailableTradingPairs } from 'src/types/available-trading-pairs'

@Injectable()
export class AvailableTradingPairPipe implements PipeTransform {
  transform(value: any) {
    if (!Object.values(AvailableTradingPairs).includes(value)) {
      throw new BadRequestException('Invalid Trading Pair')
    }
    return value
  }
}
