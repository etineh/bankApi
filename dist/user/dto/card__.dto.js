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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card__Dto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Card__Dto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is the card of user other account that can be use to deposit direct. Card number should be 16 digits",
        example: "1234567890987654"
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Card__Dto.prototype, "cardNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is the amount the user wants topup with",
        example: "2000"
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Card__Dto.prototype, "amount", void 0);
exports.Card__Dto = Card__Dto;
//# sourceMappingURL=card__.dto.js.map