"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const w_d_history_schema_1 = require("../user/schemas/w_d_history.schema");
const user_module_1 = require("../user/user.module");
const witd_dep_history_controller_1 = require("./witd_dep_history.controller");
const witd_dep_history_service_1 = require("./witd_dep_history.service");
let WithdrawModule = class WithdrawModule {
};
WithdrawModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, mongoose_1.MongooseModule.forFeature([{ name: w_d_history_schema_1.W_d_history.name, schema: w_d_history_schema_1.WithdrawSchema }])],
        controllers: [witd_dep_history_controller_1.WithdrawController],
        providers: [witd_dep_history_service_1.WithdrawService]
    })
], WithdrawModule);
exports.WithdrawModule = WithdrawModule;
//# sourceMappingURL=witd_dep_history.module.js.map