"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserValidator = exports.UserLimiterValidator = exports.UserEmailValidator = exports.UserIdValidator = exports.CreateUserValidator = exports.AuthUserValidator = void 0;
const class_validator_1 = require("class-validator");
class CreateUserValidator {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)()
], CreateUserValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)()
], CreateUserValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)()
], CreateUserValidator.prototype, "password", void 0);
exports.CreateUserValidator = CreateUserValidator;
class UserIdValidator {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)()
], UserIdValidator.prototype, "_id", void 0);
exports.UserIdValidator = UserIdValidator;
class UserEmailValidator {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)()
], UserEmailValidator.prototype, "email", void 0);
exports.UserEmailValidator = UserEmailValidator;
class UserLimiterValidator {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)()
], UserLimiterValidator.prototype, "limit", void 0);
exports.UserLimiterValidator = UserLimiterValidator;
class UpdateUserValidator {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], UpdateUserValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)()
], UpdateUserValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)()
], UpdateUserValidator.prototype, "password", void 0);
exports.UpdateUserValidator = UpdateUserValidator;
class AuthUserValidator {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)()
], AuthUserValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)()
], AuthUserValidator.prototype, "password", void 0);
exports.AuthUserValidator = AuthUserValidator;
