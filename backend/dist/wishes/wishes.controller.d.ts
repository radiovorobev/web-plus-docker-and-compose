import { WishesService } from './wishes.service';
import { UpdateWishDto } from './dto/update-wish.dto';
export declare class WishesController {
    private readonly wishesService;
    constructor(wishesService: WishesService);
    createWish(body: any, req: any): Promise<import("./entities/wish.entity").Wish>;
    findLast(): Promise<import("./entities/wish.entity").Wish[]>;
    findTop(): Promise<import("./entities/wish.entity").Wish[]>;
    copyWish(id: number, req: any): Promise<import("./entities/wish.entity").Wish>;
    findAll(): Promise<import("./entities/wish.entity").Wish[]>;
    findOne(id: string): Promise<import("./entities/wish.entity").Wish>;
    update(id: string, updateWishDto: UpdateWishDto): Promise<import("./entities/wish.entity").Wish>;
    remove(id: string): Promise<void>;
}
