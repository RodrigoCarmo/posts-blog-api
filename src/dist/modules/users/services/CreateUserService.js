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
exports.CreateUserService = void 0;
const BcryptHashProvider_1 = require("../../../providers/HashProvider/BcryptHashProvider");
const UserRepository_1 = require("../repositories/UserRepository");
class CreateUserService {
    createUser({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = new UserRepository_1.UserRepository();
            const checkIfEmailAlreadyExists = yield usersRepository.findByEmail(email);
            if (checkIfEmailAlreadyExists) {
                throw new Error('This email already exists!');
            }
            const bcryptHashProvider = new BcryptHashProvider_1.BCryptHashProvider();
            const hashPassword = yield bcryptHashProvider.generateHash(password);
            try {
                yield usersRepository.create({ name, email, password: hashPassword });
            }
            catch (error) {
                throw new Error('Ocurred an error.');
            }
        });
    }
}
exports.CreateUserService = CreateUserService;
