import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { OperationType } from 'src/types/operation-type'

@Injectable()
export class OperationTypePipe implements PipeTransform {
  transform(value: any) {
    if (!Object.values(OperationType).includes(value)) {
      throw new BadRequestException('Invalid Operation')
    }
    return value
  }
}
