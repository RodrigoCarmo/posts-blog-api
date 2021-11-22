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
exports.UpdateUserService = void 0;
const BcryptHashProvider_1 = require("../../../providers/HashProvider/BcryptHashProvider");
const UserRepository_1 = require("../repositories/UserRepository");
class UpdateUserService {
    updateUser(_id, userObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = new UserRepository_1.UserRepository();
            const checkIfUserExists = yield usersRepository.findUserById(_id);
            if (checkIfUserExists === null) {
                throw new Error('This user non exists!');
            }
            if (userObj.email) {
                const checkIfEmailAlreadyExists = yield usersRepository.findByEmail(userObj.email);
                if (checkIfEmailAlreadyExists && checkIfEmailAlreadyExists.email !== checkIfUserExists.email) {
                    throw new Error('This email already exists');
                }
            }
            if (userObj.password) {
                const bcryptHashProvider = new BcryptHashProvider_1.BCryptHashProvider();
                const hashPassword = yield bcryptHashProvider.generateHash(userObj.password);
                try {
                    yield usersRepository.updateUser(_id, userObj, hashPassword);
                }
                catch (error) {
                    throw new Error('Ocurred an error.');
                }
            }
            else {
                try {
                    yield usersRepository.updateUser(_id, userObj);
                }
                catch (error) {
                    throw new Error('Ocurred an error.');
                }
            }
        });
    }
}
exports.UpdateUserService = UpdateUserService;
