import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { W_d_history, WithdrawSchema } from 'src/user/schemas/w_d_history.schema';
import { UserModule } from 'src/user/user.module';
import { WithdrawController } from './witd_dep_history.controller';
import { WithdrawService } from './witd_dep_history.service';

@Module({
  imports: [UserModule, MongooseModule.forFeature([{ name: W_d_history.name, schema: WithdrawSchema }])],
  controllers: [WithdrawController],
  providers: [WithdrawService]
})
export class WithdrawModule {}
