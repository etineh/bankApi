import { Controller, Get, Post, Delete, Req, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiProperty } from '@nestjs/swagger';
import { FilterQuery } from 'mongoose';
import { CreateSchemaDto } from './dto/create-user.dto';
import { UpdateSchemaDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('/user')
export class UserController {
constructor(private userService: UserService){}

    @Get('/findAll')
    async getUser(find: FilterQuery<User> ): Promise<User[]>{
        return this.userService.get(find)
    }

    @Post('/register')
    save(@Body() body: CreateSchemaDto) {
        return this.userService.create(body)
    }

    @Get('/:userId')
    getOne(@Param('userId') userId: string): Promise<User>{
        return this.userService.showOne(userId)
    }

    @Patch ('/edit/:userId') 
    update(@Param('userId') id: string, @Body() body: UpdateSchemaDto){
        this.userService.edit(id, body)
        return {success: true} 
    }

    @Delete('/:userId')
    deleteOne(@Param('userId') id: string){
        this.userService.deleteOne(id)
        return {success: true}
    }
}
