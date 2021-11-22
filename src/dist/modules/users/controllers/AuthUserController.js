"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
const class_validator_1 = require("class-validator");
const AuthUserService_1 = require("../services/AuthUserService");
const UserValidator_1 = require("../validators/UserValidator");
class AuthUserController {
    authUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = request.body;
            const authUserService = new AuthUserService_1.AuthUserService();
            let authUserValidator = new UserValidator_1.AuthUserValidator();
            authUserValidator.email = email;
            authUserValidator.password = password;
            (0, class_validator_1.validate)(authUserValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const token = yield authUserService.authenticate({ email, password });
                    return response.json(token);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ error: error.message });
                    }
                    return response.status(400).json({ error: 'Ocurred an error.' });
                }
            }));
        });
    }
}
exports.AuthUserController = AuthUserController;
