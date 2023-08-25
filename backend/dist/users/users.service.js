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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const nest_bcrypt_1 = require("nest-bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository, bcryptService) {
        this.usersRepository = usersRepository;
        this.bcryptService = bcryptService;
    }
    async create(createUserDto) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
        const newUser = this.usersRepository.create(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword }));
        return this.usersRepository.save(newUser);
    }
    async findOne(id) {
        return this.usersRepository.findOneBy({ id });
    }
    async findById(id) {
        return await this.usersRepository.findOne({
            where: { id },
        });
    }
    async findMany(query) {
        return await this.usersRepository.findOne({
            where: [{ email: query }, { username: query }],
        });
    }
    async findUser(query) {
        const user = await this.usersRepository.findOne({
            where: [{ username: query }, { email: query }],
        });
        return [user];
    }
    async update(id, createUserDto) {
        if (createUserDto.password) {
            const { password } = createUserDto;
            const hash = await this.bcryptService.hash(password, 10);
            await this.usersRepository.update(id, Object.assign(Object.assign({}, createUserDto), { password: hash }));
        }
        else {
            await this.usersRepository.update(id, Object.assign({ updatedAt: new Date() }, createUserDto));
        }
        return await this.findById(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        nest_bcrypt_1.BcryptService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map