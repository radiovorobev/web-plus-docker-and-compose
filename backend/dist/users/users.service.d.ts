import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { BcryptService } from 'nest-bcrypt';
export declare class UsersService {
    private readonly usersRepository;
    private readonly bcryptService;
    constructor(usersRepository: Repository<User>, bcryptService: BcryptService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findById(id: number): Promise<User>;
    findMany(query: string): Promise<User>;
    findUser(query: string): Promise<User[]>;
    update(id: number, createUserDto: CreateUserDto): Promise<User>;
}
