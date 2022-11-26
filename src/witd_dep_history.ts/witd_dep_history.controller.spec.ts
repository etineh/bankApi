import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawController } from './witd_dep_history.controller';

describe('WithdrawController', () => {
  let controller: WithdrawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawController],
    }).compile();

    controller = module.get<WithdrawController>(WithdrawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
