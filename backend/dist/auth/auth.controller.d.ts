import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signin(req: any): Promise<{
        access_token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
