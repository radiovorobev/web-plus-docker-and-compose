import { UsersService } from './users.service';
import { WishesService } from '../wishes/wishes.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly wishesService;
    constructor(usersService: UsersService, wishesService: WishesService);
    me(req: any): Promise<import("./entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    getUser(username: string): Promise<import("./entities/user.entity").User[]>;
    getMyWishes(req: any): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    getWishes(username: string): Promise<import("../wishes/entities/wish.entity").Wish[]>;
    findMany(body: {
        query: string;
    }): Promise<import("./entities/user.entity").User[]>;
    updateUser(req: any, body: any): Promise<import("./entities/user.entity").User>;
}
