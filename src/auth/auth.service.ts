import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/user/dto/login.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, public jwtService: JwtService){}

    async validateUser(email: string, password: string): Promise<any> {
        const check = await this.userService.findByEmail(email);
        if(check && password === check.password){
           // const {password, name, email} = check
             return check
        }
            return null
    }
    
    async login(user: LoginDto) {
        const payload = { email: user.email, sub: user.password, };
        const res = {
            access_token: this.jwtService.sign(payload),
        }; 
        const check = await this.userService.findByEmail(user.email);
        check.token = res.access_token
        check.save()
        return res
    }
}