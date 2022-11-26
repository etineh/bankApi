import { Module } from '@nestjs/common';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { UserService } from './user.service';
import { WithdrawService } from 'src/witd_dep_history.ts/witd_dep_history.service';
import { WithdrawController } from 'src/witd_dep_history.ts/witd_dep_history.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
}) 
export class UserModule {}
