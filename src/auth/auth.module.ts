import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './auth.constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';

@Module({
    controllers: [AuthController],
    imports: [
        UserModule, 
        PassportModule, 
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '520s' },
      }),],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
