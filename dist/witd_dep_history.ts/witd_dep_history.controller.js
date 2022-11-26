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
const swagger_1 = require("@nestjs/swagger");
const account_dto_1 = require("../user/dto/account.dto");
const card_dto_1 = require("../user/dto/card.dto");
const card___dto_1 = require("../user/dto/card__.dto");
const withdraw_dto_1 = require("../user/dto/withdraw.dto");
const witd_dep_history_service_1 = require("./witd_dep_history.service");
let WithdrawController = class WithdrawController {
    constructor(withdService) {
        this.withdService = withdService;
    }
    async findUserAccount(userId) {
        let see = await this.withdService.findbyAccount(userId);
        return see;
    }
    async findById(id) {
        return this.withdService.findById(id);
    }
    async uploadCard(id, user) {
        return this.withdService.findByID_UploadCard(id, user);
    }
    async findByIdAndSaveBothWithraw(id, user) {
        return this.withdService.findById_SaveWithdrawChange(id, user);
    }
    async findById_Card_Deposit(id, user) {
        return this.withdService.verifyId_CardNo_Deposit(id, user);
    }
    async getHistory(userId) {
        return this.withdService.withdrawHistory(userId);
    }
};
__decorate([
    (0, common_1.Post)('findAccount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_dto_1.AccountDto]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "findUserAccount", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('/uploadnewcard/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, card_dto_1.CardDto]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "uploadCard", null);
__decorate([
    (0, common_1.Post)('withdraw/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, withdraw_dto_1.WithdrawDto]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "findByIdAndSaveBothWithraw", null);
__decorate([
    (0, common_1.Post)('deposit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, card___dto_1.Card__Dto]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "findById_Card_Deposit", null);
__decorate([
    (0, common_1.Get)('history/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WithdrawController.prototype, "getHistory", null);
WithdrawController = __decorate([
    (0, swagger_1.ApiTags)('User Transactions'),
    (0, common_1.Controller)("me"),
    __metadata("design:paramtypes", [witd_dep_history_service_1.WithdrawService])
], WithdrawController);
exports.WithdrawController = WithdrawController;
//# sourceMappingURL=witd_dep_history.controller.js.map