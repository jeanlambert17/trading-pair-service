import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class TradingPairLenPipe implements PipeTransform {
  transform(value: any) {
    if (![1, 25, 100].includes(value)) {
      throw new BadRequestException('Invalid "len" parameter')
    }
  }
}
