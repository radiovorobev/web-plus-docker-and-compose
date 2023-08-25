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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const offer_entity_1 = require("./entities/offer.entity");
const wishes_service_1 = require("../wishes/wishes.service");
let OffersService = class OffersService {
    constructor(offerRepository, wishesService) {
        this.offerRepository = offerRepository;
        this.wishesService = wishesService;
    }
    async create(createOfferDto, user) {
        const { itemId, hidden, amount } = createOfferDto;
        const wish = await this.wishesService.findById(itemId);
        if (wish.owner.id === user.id) {
            throw new common_1.BadRequestException('You cant give money for your own wishes');
        }
        else if (wish.raised + amount > wish.price) {
            throw new common_1.BadRequestException('You cant give more than full price');
        }
        const offer = this.offerRepository.create({
            amount,
            hidden,
            item: wish,
            user,
        });
        await this.wishesService.updateRaised(wish, amount);
        return this.offerRepository.save(offer);
    }
    async findOne(id) {
        const offer = await this.offerRepository.findOne({
            relations: {
                user: true,
                item: true,
            },
            where: { id },
        });
        return offer;
    }
    async findAll() {
        const offers = await this.offerRepository.find({
            relations: {
                user: true,
                item: true,
            },
        });
        return offers;
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map