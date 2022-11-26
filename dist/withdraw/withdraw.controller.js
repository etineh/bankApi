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
exports.WithdrawController = void 0;
const common_1 = require("@nestjs/common");
const withdraw_dto_1 = require("../user/dto/withdraw.dto");
const withdraw_service_1 = require("./withdraw.service");
let WithdrawController = class WithdrawController {
    constructor(withdService) {
        this.withdService = withdService;
    }
    async getMatch(find) {
        return this.withdService.withGet(find);
    }
    async getHistory(userId) {
        console.log(userId);
        return this.withdService.withdrawHistory(userId);
    }
    async postMatch(user) {
        return this.withdService.withPost(user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "getMatch", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "getHistory", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [withdraw_dto_1.Withdrawdto]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "postMatch", null);
WithdrawController = __decorate([
    (0, common_1.Controller)('withdraw'),
    __metadata("design:paramtypes", [withdraw_service_1.WithdrawService])
], WithdrawController);
exports.WithdrawController = WithdrawController;
//# sourceMappingURL=withdraw.controller.js.map