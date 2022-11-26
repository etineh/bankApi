import { Injectable } from '@nestjs/common';
import { CreateSchemaDto } from 'src/user/dto/create-user.dto';
import { TokenDto } from 'src/user/dto/token.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
    constructor(private userService: UserService){}
    
    async getByToken(token: TokenDto){
        return this.userService.UserModel.findOne({token: token.token})
    }
}
