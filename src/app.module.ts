import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TradingPairController } from './modules/trading-pair/trading-pair.controller';
import { TradingPairService } from './modules/trading-pair/trading-pair.service';
import { TradingPairModule } from './modules/trading-pair/trading-pair.module';
import { BitfinexService } from './third-party/bitfinex/bitfinex.service';

@Module({
  imports: [TradingPairModule],
  controllers: [AppController, TradingPairController],
  providers: [AppService, TradingPairService, BitfinexService],
})
export class AppModule {}
