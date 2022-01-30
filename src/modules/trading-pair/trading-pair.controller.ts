import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
  ValidationPipe
} from '@nestjs/common'
import { TradingPairDto } from 'src/dtos/trading-pair-dto'
import { AvailableTradingPairPipe } from 'src/pipes/available-trading-pair.pipe'
import { OperationTypePipe } from 'src/pipes/operation-type.pipe'
import { TradingPairLenPipe } from 'src/pipes/trading-pair-len.pipe'
import { AvailableTradingPairs } from 'src/types/available-trading-pairs'
import { OperationType } from 'src/types/operation-type'
import { TradingPairService } from './trading-pair.service'

@Controller('trading-pair')
export class TradingPairController {
  constructor(readonly service: TradingPairService) {}

  @Get(':pair')
  async getOrderbookTipsByTradingPair(
    @Param('pair', AvailableTradingPairPipe) pair: AvailableTradingPairs,
    @Query('len', new DefaultValuePipe(25), ParseIntPipe, TradingPairLenPipe) lenght: number
  ): Promise<TradingPairDto> {
    return this.service.getOrderbookTipsByTradingPair(pair, lenght)
  }

  @Get(':pair/:size/:operation')
  async getOperationPrice(
    @Param('pair', AvailableTradingPairPipe) pair: AvailableTradingPairs,
    @Param('size', ParseIntPipe) size: number,
    @Param('operation', OperationTypePipe) operation: OperationType
  ) {
    return this.service.getOperationPrice(pair, size, operation)
  }
}
