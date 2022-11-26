/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { FilterQuery, Model } from 'mongoose';
import { AccountDto } from 'src/user/dto/account.dto';
import { CardDto } from 'src/user/dto/card.dto';
import { Card__Dto } from 'src/user/dto/card__.dto';
import { WithdrawDto } from 'src/user/dto/withdraw.dto';
import { UserDocument, W_d_history } from 'src/user/schemas/w_d_history.schema';
import { UserService } from 'src/user/user.service';
export declare class WithdrawService {
    transactionModel: Model<UserDocument>;
    private userService;
    constructor(transactionModel: Model<UserDocument>, userService: UserService);
    findById(id: string): Promise<import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findbyAccount(id: AccountDto): Promise<import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findByID_UploadCard(id: string, user: CardDto): Promise<(import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | {
        check: string;
    }>;
    findById_SaveWithdrawChange(id: any, user: WithdrawDto): Promise<(import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | {
        check: string;
    }>;
    verifyId_CardNo_Deposit(id: any, user: Card__Dto): Promise<(import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | {
        check: string;
    }>;
    getHistoryBoth(seenAccount: any, account: any, type: any, user: any): Promise<void>;
    getHistoryTopUp(seenAccount: any, account: any, type: any): Promise<void>;
    withdrawHistory(find: FilterQuery<W_d_history>): Promise<W_d_history[]>;
}
