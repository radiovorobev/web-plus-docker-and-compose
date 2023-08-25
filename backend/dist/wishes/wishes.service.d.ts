import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Repository } from 'typeorm';
import { Wish } from './entities/wish.entity';
import { User } from '../users/entities/user.entity';
export declare class WishesService {
    private readonly wishRepository;
    constructor(wishRepository: Repository<Wish>);
    create(createWishDto: CreateWishDto, owner: User): Promise<Wish>;
    findMyWishes(id: number): Promise<Wish[]>;
    findLast(): Promise<Wish[]>;
    findTop(): Promise<Wish[]>;
    findAll(): Promise<Wish[]>;
    findById(id: number): Promise<Wish>;
    findByOwner(id: number): Promise<Wish[]>;
    findOne(id: number): Promise<Wish>;
    update(id: number, updateWishDto: UpdateWishDto): Promise<Wish>;
    remove(id: number): Promise<void>;
    updateRaised(wish: Wish, amount: number): Promise<import("typeorm").UpdateResult>;
    copy(id: number, owner: User): Promise<Wish>;
}
