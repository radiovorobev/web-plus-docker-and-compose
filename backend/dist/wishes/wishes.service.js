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
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wish_entity_1 = require("./entities/wish.entity");
let WishesService = class WishesService {
    constructor(wishRepository) {
        this.wishRepository = wishRepository;
    }
    async create(createWishDto, owner) {
        const wish = await this.wishRepository.create(Object.assign(Object.assign({}, createWishDto), { owner }));
        return this.wishRepository.save(wish);
    }
    async findMyWishes(id) {
        return await this.wishRepository.find({
            relations: {
                owner: true,
                offers: { user: true },
            },
            where: { owner: { id } },
        });
    }
    async findLast() {
        return await this.wishRepository.find({
            relations: ['owner'],
            order: {
                createdAt: 'DESC',
            },
            take: 40,
        });
    }
    async findTop() {
        return await this.wishRepository.find({
            relations: ['owner'],
            order: {
                copied: 'DESC',
            },
            take: 10,
        });
    }
    findAll() {
        return this.wishRepository.find();
    }
    async findById(id) {
        return await this.wishRepository.findOne({
            relations: {
                owner: true,
                offers: { user: true },
            },
            where: { id },
        });
    }
    async findByOwner(id) {
        const wishes = await this.wishRepository.find({
            relations: {
                owner: true,
                offers: { user: true },
            },
            where: { owner: { id } },
        });
        return wishes;
    }
    async findOne(id) {
        const wish = await this.wishRepository.findOne({
            where: { id },
        });
        if (!wish) {
            throw new common_1.NotFoundException('Wish not found');
        }
        return wish;
    }
    async update(id, updateWishDto) {
        const wish = await this.wishRepository.findOne({
            where: { id },
        });
        if (!wish) {
            throw new common_1.NotFoundException('Wish not found');
        }
        Object.assign(wish, updateWishDto);
        return this.wishRepository.save(wish);
    }
    async remove(id) {
        const wish = await this.wishRepository.findOne({
            where: { id },
        });
        if (!wish) {
            throw new common_1.NotFoundException('Wish not found');
        }
        await this.wishRepository.remove(wish);
    }
    async updateRaised(wish, amount) {
        return this.wishRepository.update({ id: wish.id }, { raised: wish.raised + amount });
    }
    async copy(id, owner) {
        const wish = await this.findById(id);
        await this.wishRepository.update(id, { copied: wish.copied + 1 });
        const copyWish = await this.wishRepository.create({
            name: wish.name,
            link: wish.link,
            image: wish.image,
            price: wish.price,
            description: wish.description,
            owner,
        });
        return this.wishRepository.save(copyWish);
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map