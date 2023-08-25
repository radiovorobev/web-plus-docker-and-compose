"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wishlist_entity_1 = require("./entities/wishlist.entity");
const wishes_service_1 = require("../wishes/wishes.service");
let WishlistsService = class WishlistsService {
    constructor(wishlistRepository, wishesService) {
        this.wishlistRepository = wishlistRepository;
        this.wishesService = wishesService;
    }
    async create(createWishlistDto, owner) {
        const items = await Promise.all(createWishlistDto.itemsId.map(async (id) => {
            return await this.wishesService.findById(Number(id));
        }));
        const newWishlist = await this.wishlistRepository.create(Object.assign(Object.assign({}, createWishlistDto), { owner,
            items }));
        return await this.wishlistRepository.save(newWishlist);
    }
    async findAll() {
        const wishLists = await this.wishlistRepository.find({
            relations: {
                owner: true,
                items: true,
            },
        });
        return wishLists;
    }
    async findOne(id) {
        return await this.wishlistRepository.findOne({
            relations: {
                owner: true,
                items: true,
            },
            where: { id },
        });
    }
    async remove(id, owner) {
        const wishList = await this.findOne(id);
        if (wishList.owner.id !== owner.id) {
            throw new common_1.BadRequestException('You are not the owner of this list');
        }
        await this.wishlistRepository.delete({ id });
        return { message: 'Deleted' };
    }
    async update(id, createWishDto, owner) {
        let wishlist = await this.findOne(id);
        if (wishlist.owner.id !== owner.id) {
            throw new common_1.BadRequestException('You are not the owner of this list');
        }
        const items = await Promise.all(createWishDto.itemsId.map(async (id) => {
            return await this.wishesService.findById(Number(id));
        }));
        await this.wishlistRepository.update(id, Object.assign(Object.assign({ updatedAt: new Date() }, createWishDto), { items }));
        wishlist = await this.findOne(id);
        return wishlist;
    }
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map