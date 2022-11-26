import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'; 
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from 'nestjs-dotenv';
import { WithdrawModule } from './witd_dep_history.ts/witd_dep_history.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    UserModule, 
    MongooseModule.forRoot('mongodb+srv://bankapp:bankapp@bankapp.bfdm9se.mongodb.net/bankdb'), 
    AuthModule, 
    ProfileModule,
    ConfigModule.forRoot(),
    WithdrawModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
