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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async get(find) {
        let gret = this.UserModel.find({ find });
        return gret;
    }
    async create(body) {
        const createUser = new this.UserModel(body);
        const validPhone = await this.UserModel.findOne({ phone: body.phone });
        const validEmail = await this.UserModel.findOne({ email: body.email });
        if (validPhone) {
            return { status: "Phone number already exist" };
        }
        else {
            if (validEmail) {
                return { status: "Email already exist" };
            }
            else {
                createUser.save();
                return { status: "Registration Successful. Go to login page" };
            }
        }
    }
    async edit(id, update) {
        return this.UserModel.findByIdAndUpdate(id, update);
    }
    async showOne(id) {
        return this.UserModel.findById(id);
    }
    async deleteOne(id) {
        return this.UserModel.findByIdAndDelete(id);
    }
    async findByEmail(email) {
        return this.UserModel.findOne({ email });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map