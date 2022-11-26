import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/user/dto/login.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    jwtService: JwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
}
