import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { User } from '../users/entities/user.entity';
import { WishesService } from '../wishes/wishes.service';
export declare class WishlistsService {
    private readonly wishlistRepository;
    private readonly wishesService;
    constructor(wishlistRepository: Repository<Wishlist>, wishesService: WishesService);
    create(createWishlistDto: CreateWishlistDto, owner: User): Promise<Wishlist>;
    findAll(): Promise<Wishlist[]>;
    findOne(id: number): Promise<Wishlist>;
    remove(id: number, owner: User): Promise<{
        message: string;
    }>;
    update(id: number, createWishDto: CreateWishlistDto, owner: User): Promise<Wishlist>;
}
