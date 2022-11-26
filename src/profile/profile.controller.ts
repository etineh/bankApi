import { Controller, UseGuards, Get, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { TokenDto } from 'src/user/dto/token.dto';
import { ProfileService } from './profile.service';

@ApiTags('User Dashboard')
@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    profile1(){
        return {message: true}
    }

    @Post("/me")
    profile2(@Body() token: TokenDto){
        return this.profileService.getByToken(token) 
    }
}
