import { WishlistsService } from './wishlists.service';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    create(body: any, req: any): Promise<import("./entities/wishlist.entity").Wishlist>;
    findAll(): Promise<import("./entities/wishlist.entity").Wishlist[]>;
    getWishlist(id: any): Promise<import("./entities/wishlist.entity").Wishlist>;
    updateWishlist(id: any, body: any, req: any): Promise<import("./entities/wishlist.entity").Wishlist>;
    deleteWishlist(id: any, req: any): Promise<{
        message: string;
    }>;
}
