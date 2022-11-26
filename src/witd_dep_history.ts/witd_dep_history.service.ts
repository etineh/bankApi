import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { AccountDto } from 'src/user/dto/account.dto';
import { CardDto } from 'src/user/dto/card.dto';
import { Card__Dto } from 'src/user/dto/card__.dto';
import { CreateSchemaDto } from 'src/user/dto/create-user.dto';
import { TokenDto } from 'src/user/dto/token.dto';
import { UserId } from 'src/user/dto/userId.dto';
import { WithdrawDto } from 'src/user/dto/withdraw.dto';
import { With_Dep_Save } from 'src/user/dto/w_d_history.dto';
import { UserDocument, W_d_history } from 'src/user/schemas/w_d_history.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class WithdrawService {
    constructor(
        @InjectModel(W_d_history.name) public transactionModel: Model<UserDocument>,
        private userService: UserService
    ) {}

    async findById(id: string){
        return this.userService.UserModel.findById(id)
    }

    async findbyAccount(id : AccountDto){
        let find = await this.userService.UserModel.findOne({phone: id.phone} )
        return find
    }

    //////////// find by id and upload Card Number /////
    async findByID_UploadCard(id: string, user : CardDto){
        let find = await this.findById(id)
        if(find && find.password == user.password){
            if(user.cardNo.length === 16){
                find.cardNo = user.cardNo
                find.save()
                return find
            } else {
                return {check: "Card must be 16 digit"}
            }
        } else {
            return {check: "Incorrect password"}
        }
    }

    ///////////  Withdraw   /////////////

    async findById_SaveWithdrawChange(id: any, user: WithdrawDto){
        const sender = await this.findById(id)
        const receiver = await this.userService.UserModel.findOne({phone: user.phone} )
        let typeSender = "Withdraw", typeReceiver = "Deposit"
        if(sender.id && receiver != null){
            if(sender.phone != receiver.phone){
                if(user.amount.length > 2){
                    if(sender.amount > 1){
                        sender.amount -= Number(user.amount)
                        receiver.amount += Number(user.amount)
                        sender.save()
                        receiver.save()
                        this.getHistoryBoth(receiver, user, typeReceiver, sender)
                        this.getHistoryBoth(sender, user, typeSender, receiver)
                        console.log(sender.amount)
                        return sender
                    } else{
                        return {check: "Account balance is low. Kindly Deposit or TopUp."}
                    }
                } else {
                    return {check: "Amount should be greater than #100"}
                }
            } else {
                return {check: "You can't send to yourself"}
            }  
        } else{
            return {check: "Invalid account number"}
        }
    }

    //////// Deposit ///////////

    async verifyId_CardNo_Deposit(id: any, user: Card__Dto){
        const find = await this.findById(id)
        let type = "Deposit(Top Up)"
        if(find.cardNo == user.cardNo){
            if(user.amount.length > 2){
                find.amount += Number(user.amount)
                find.save()
                this.getHistoryTopUp(find, user, type)
                return find
            } else {
                return {check: "The minimum deposit amount is 100 naira"}
            }
        } else {
            return {check: "Invalid card number"}
        }
    }

    ///////////  History   /////////////

    async getHistoryBoth(seenAccount: any, account: any, type: any, user: any){
        let res = new this.transactionModel({
            userId: seenAccount.id,
            type: type,
            name: user.name,
            lName: user.lName,
            acountNo: seenAccount.phone,
            bank: seenAccount.bankName,
            amount: account.amount,
            balance: seenAccount.amount,
        })
        res.save()
    }

    async getHistoryTopUp(seenAccount: any, account: any, type: any){
        let res = new this.transactionModel({
            userId: seenAccount.id,
            type: type,
            name: seenAccount.name,
            lName: seenAccount.lName,
            acountNo: seenAccount.phone,
            bank: seenAccount.bank,
            amount: account.amount,
            balance: seenAccount.amount,
        })
        res.save()
    }

    async withdrawHistory(find: FilterQuery<W_d_history> ): Promise<W_d_history[]> {
        return this.transactionModel.find({userId:find})
    }
    // async withdrawHistory(find: UserId ){
    //     return this.transactionModel.find({userId:find.userId })
    // }
}
