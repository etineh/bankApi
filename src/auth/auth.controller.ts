import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { LoginDto } from 'src/user/dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Login')
@Controller('auth')
export class AuthController { 

    constructor(private authService: AuthService){}
    
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    login(@Body() req: LoginDto){
        return this.authService.login(req)   
    }
    
}
