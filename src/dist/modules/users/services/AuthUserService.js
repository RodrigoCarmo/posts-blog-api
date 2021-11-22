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
exports.AuthUserService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const tokenConfig_1 = require("../../../config/tokenConfig");
const BcryptHashProvider_1 = require("../../../providers/HashProvider/BcryptHashProvider");
const UserRepository_1 = require("../repositories/UserRepository");
class AuthUserService {
    authenticate({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = new UserRepository_1.UserRepository();
            const user = yield usersRepository.findByEmailWithPassword(email);
            if (!user) {
                throw new Error('Email or password is incorrect!');
            }
            const bcryptHashProvider = new BcryptHashProvider_1.BCryptHashProvider();
            const checkPassword = yield bcryptHashProvider.compare(password, user.password);
            if (!checkPassword) {
                throw new Error('Email or password is incorrect!');
            }
            try {
                const token = (0, jsonwebtoken_1.sign)({
                    id: user._id,
                    email: user.email,
                    name: user.name
                }, tokenConfig_1.tokenConfig.secret_token, {
                    subject: String(user._id),
                    expiresIn: tokenConfig_1.tokenConfig.expires_in
                });
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    token
                };
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.AuthUserService = AuthUserService;
