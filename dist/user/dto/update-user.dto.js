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
exports.UpdateSchemaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateSchemaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is the first name of the user",
        example: "Noble"
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSchemaDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is the last name of the user",
        example: "John"
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSchemaDto.prototype, "lName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is the email of the user",
        example: "noble@gmail.com"
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateSchemaDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "This is the user card number from his other bank for direct top-up",
        example: "Noble"
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSchemaDto.prototype, "cardNo", void 0);
exports.UpdateSchemaDto = UpdateSchemaDto;
//# sourceMappingURL=update-user.dto.js.map