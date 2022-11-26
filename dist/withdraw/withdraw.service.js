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
exports.WithdrawService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const withd_schema_1 = require("../user/schemas/withd.schema");
const user_service_1 = require("../user/user.service");
let WithdrawService = class WithdrawService {
    constructor(WithdrawModel, userService) {
        this.WithdrawModel = WithdrawModel;
        this.userService = userService;
    }
    async withGet(find) {
        return this.WithdrawModel.find(find);
    }
    async withdrawHistory(find) {
        return this.WithdrawModel.find({ userId: find });
    }
    async withPost(Withdrawdto) {
        let withdraw = new this.WithdrawModel(Withdrawdto);
        return withdraw.save();
    }
};
WithdrawService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(withd_schema_1.Withdraw.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], WithdrawService);
exports.WithdrawService = WithdrawService;
//# sourceMappingURL=withdraw.service.js.map