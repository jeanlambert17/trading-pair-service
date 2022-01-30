import { Test, TestingModule } from '@nestjs/testing';
import { TradingPairService } from './trading-pair.service';

describe('TradingPairService', () => {
  let service: TradingPairService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradingPairService],
    }).compile();

    service = module.get<TradingPairService>(TradingPairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
