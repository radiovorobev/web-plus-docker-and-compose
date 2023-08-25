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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const wishes_service_1 = require("./wishes.service");
const update_wish_dto_1 = require("./dto/update-wish.dto");
const jwt_guard_1 = require("../guards/jwt.guard");
let WishesController = class WishesController {
    constructor(wishesService) {
        this.wishesService = wishesService;
    }
    async createWish(body, req) {
        const wish = await this.wishesService.create(body, req.user);
        return wish;
    }
    async findLast() {
        const wishes = await this.wishesService.findLast();
        if (!wishes) {
            throw new common_1.NotFoundException('Wishes not found');
        }
        return wishes;
    }
    async findTop() {
        const wishes = await this.wishesService.findTop();
        if (!wishes) {
            throw new common_1.NotFoundException('Wishes not found');
        }
        return wishes;
    }
    async copyWish(id, req) {
        const wish = await this.wishesService.copy(id, req.user);
        return wish;
    }
    findAll() {
        return this.wishesService.findAll();
    }
    findOne(id) {
        return this.wishesService.findOne(+id);
    }
    update(id, updateWishDto) {
        return this.wishesService.update(+id, updateWishDto);
    }
    remove(id) {
        return this.wishesService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "createWish", null);
__decorate([
    (0, common_1.Get)('/last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findLast", null);
__decorate([
    (0, common_1.Get)('/top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findTop", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)('/:id/copy'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "copyWish", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wish_dto_1.UpdateWishDto]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "remove", null);
WishesController = __decorate([
    (0, common_1.Controller)('wishes'),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
exports.WishesController = WishesController;
//# sourceMappingURL=wishes.controller.js.map