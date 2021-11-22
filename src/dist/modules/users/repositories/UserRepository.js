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
exports.UserRepository = void 0;
const User_1 = require("../schemas/User");
class UserRepository {
    create({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                name,
                email,
                password
            };
            yield User_1.UserModel.create(user);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findOne({ email }).select('-password').exec();
            return user;
        });
    }
    findUserById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findById(_id);
            return user;
        });
    }
    deleteUser(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.UserModel.findByIdAndDelete(_id);
        });
    }
    listUserByIdWithoutPassword(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findById(_id).select('-password');
            return user;
        });
    }
    listAllUsers(limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.UserModel.find().limit(limit).select('-password');
            return users;
        });
    }
    updateUser(_id, userObj, hashPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (hashPassword) {
                yield User_1.UserModel.findByIdAndUpdate({ _id }, {
                    $set: Object.assign(Object.assign({}, userObj), { password: hashPassword })
                }, { new: true });
            }
            else {
                yield User_1.UserModel.findByIdAndUpdate({ _id }, {
                    $set: Object.assign({}, userObj)
                }, { new: true });
            }
        });
    }
    findByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findOne({ email }).exec();
            return user;
        });
    }
}
exports.UserRepository = UserRepository;
