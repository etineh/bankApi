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
import { FilterQuery } from 'mongoose';
import { AccountDto } from 'src/user/dto/account.dto';
import { CardDto } from 'src/user/dto/card.dto';
import { Card__Dto } from 'src/user/dto/card__.dto';
import { WithdrawDto } from 'src/user/dto/withdraw.dto';
import { With_Dep_Save } from 'src/user/dto/w_d_history.dto';
import { WithdrawService } from './witd_dep_history.service';
export declare class WithdrawController {
    private withdService;
    constructor(withdService: WithdrawService);
    findUserAccount(userId: AccountDto): Promise<import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findById(id: string): Promise<import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    uploadCard(id: string, user: CardDto): Promise<(import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | {
        check: string;
    }>;
    findByIdAndSaveBothWithraw(id: string, user: WithdrawDto): Promise<(import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | {
        check: string;
    }>;
    findById_Card_Deposit(id: string, user: Card__Dto): Promise<(import("mongoose").Document<unknown, any, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | {
        check: string;
    }>;
    getHistory(userId: FilterQuery<With_Dep_Save>): Promise<With_Dep_Save[]>;
}
