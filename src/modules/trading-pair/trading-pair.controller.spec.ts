import { Test, TestingModule } from '@nestjs/testing';
import { TradingPairController } from './trading-pair.controller';

describe('TradingPairController', () => {
  let controller: TradingPairController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradingPairController],
    }).compile();

    controller = module.get<TradingPairController>(TradingPairController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
