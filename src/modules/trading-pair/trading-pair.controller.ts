import { Controller, Get, Param } from '@nestjs/common';
import { TradingPairDto } from 'src/dtos/trading-pair-dto';
import { AvailableTradingPairs } from 'src/types/available-trading-pairs';
import { OperationType } from 'src/types/operation-type';
import { TradingPairService } from './trading-pair.service';

@Controller('trading-pair')
export class TradingPairController {
  constructor(readonly service: TradingPairService) {}

  @Get(':pair')
  async getOrderbookTipsByTradingPair(
    @Param('pair') pair: AvailableTradingPairs
  ): Promise<TradingPairDto> {
    return this.service.getOrderbookTipsByTradingPair(pair)
  }

  @Get(':pair/:size/:operation')
  async calculatePriceForOrder(
    @Param('pair') pair: AvailableTradingPairs,
    @Param('size') size: number,
    @Param('operation') operation: OperationType,
  ) {
    return this.service.calculatePriceForOrder(pair, size, operation)
  }
}
