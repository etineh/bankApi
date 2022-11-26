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
const w_d_history_schema_1 = require("../user/schemas/w_d_history.schema");
const user_service_1 = require("../user/user.service");
let WithdrawService = class WithdrawService {
    constructor(transactionModel, userService) {
        this.transactionModel = transactionModel;
        this.userService = userService;
    }
    async findById(id) {
        return this.userService.UserModel.findById(id);
    }
    async findbyAccount(id) {
        let find = await this.userService.UserModel.findOne({ phone: id.phone });
        return find;
    }
    async findByID_UploadCard(id, user) {
        let find = await this.findById(id);
        if (find && find.password == user.password) {
            if (user.cardNo.length === 16) {
                find.cardNo = user.cardNo;
                find.save();
                return find;
            }
            else {
                return { check: "Card must be 16 digit" };
            }
        }
        else {
            return { check: "Incorrect password" };
        }
    }
    async findById_SaveWithdrawChange(id, user) {
        const sender = await this.findById(id);
        const receiver = await this.userService.UserModel.findOne({ phone: user.phone });
        let typeSender = "Withdraw", typeReceiver = "Deposit";
        if (sender.id && receiver != null) {
            if (sender.phone != receiver.phone) {
                if (user.amount.length > 2) {
                    if (sender.amount > 1) {
                        sender.amount -= Number(user.amount);
                        receiver.amount += Number(user.amount);
                        sender.save();
                        receiver.save();
                        this.getHistoryBoth(receiver, user, typeReceiver, sender);
                        this.getHistoryBoth(sender, user, typeSender, receiver);
                        console.log(sender.amount);
                        return sender;
                    }
                    else {
                        return { check: "Account balance is low. Kindly Deposit or TopUp." };
                    }
                }
                else {
                    return { check: "Amount should be greater than #100" };
                }
            }
            else {
                return { check: "You can't send to yourself" };
            }
        }
        else {
            return { check: "Invalid account number" };
        }
    }
    async verifyId_CardNo_Deposit(id, user) {
        const find = await this.findById(id);
        let type = "Deposit(Top Up)";
        if (find.cardNo == user.cardNo) {
            if (user.amount.length > 2) {
                find.amount += Number(user.amount);
                find.save();
                this.getHistoryTopUp(find, user, type);
                return find;
            }
            else {
                return { check: "The minimum deposit amount is 100 naira" };
            }
        }
        else {
            return { check: "Invalid card number" };
        }
    }
    async getHistoryBoth(seenAccount, account, type, user) {
        let res = new this.transactionModel({
            userId: seenAccount.id,
            type: type,
            name: user.name,
            lName: user.lName,
            acountNo: seenAccount.phone,
            bank: seenAccount.bankName,
            amount: account.amount,
            balance: seenAccount.amount,
        });
        res.save();
    }
    async getHistoryTopUp(seenAccount, account, type) {
        let res = new this.transactionModel({
            userId: seenAccount.id,
            type: type,
            name: seenAccount.name,
            lName: seenAccount.lName,
            acountNo: seenAccount.phone,
            bank: seenAccount.bank,
            amount: account.amount,
            balance: seenAccount.amount,
        });
        res.save();
    }
    async withdrawHistory(find) {
        return this.transactionModel.find({ userId: find });
    }
};
WithdrawService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(w_d_history_schema_1.W_d_history.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], WithdrawService);
exports.WithdrawService = WithdrawService;
//# sourceMappingURL=witd_dep_history.service.js.map