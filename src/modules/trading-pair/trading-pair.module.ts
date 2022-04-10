import { Module } from '@nestjs/common';
import { BitfinexService } from 'src/third-party/bitfinex/bitfinex.service';
import { TradingPairController } from './trading-pair.controller';
import { TradingPairService } from './trading-pair.service';

@Module({
  controllers: [TradingPairController],
  providers: [TradingPairService, BitfinexService]
})
export class TradingPairModule {}
