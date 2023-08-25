import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { BcryptService } from 'nest-bcrypt';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    private readonly bcryptService;
    constructor(jwtService: JwtService, userService: UsersService, bcryptService: BcryptService);
    auth(user: User): {
        access_token: string;
    };
    validatePassword(username: string, password: string): Promise<User>;
}
