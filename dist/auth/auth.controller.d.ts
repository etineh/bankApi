import { LoginDto } from 'src/user/dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: LoginDto): Promise<{
        access_token: string;
    }>;
}
