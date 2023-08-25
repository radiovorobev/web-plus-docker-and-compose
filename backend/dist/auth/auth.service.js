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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const nest_bcrypt_1 = require("nest-bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, userService, bcryptService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.bcryptService = bcryptService;
    }
    auth(user) {
        const payload = { sub: user.id };
        return { access_token: this.jwtService.sign(payload) };
    }
    async validatePassword(username, password) {
        const user = await this.userService.findMany(username);
        const matched = await this.bcryptService.compare(password, user.password);
        if (matched) {
            return user;
        }
        return null;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        nest_bcrypt_1.BcryptService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map