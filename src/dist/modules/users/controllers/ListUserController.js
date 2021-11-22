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
exports.ListUserController = void 0;
const class_validator_1 = require("class-validator");
const ListUserService_1 = require("../services/ListUserService");
const UserValidator_1 = require("../validators/UserValidator");
class ListUserController {
    listUserById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.params;
            const listUserService = new ListUserService_1.ListUserService();
            let userIdValidator = new UserValidator_1.UserIdValidator();
            userIdValidator._id = _id;
            (0, class_validator_1.validate)(userIdValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const user = yield listUserService.listUserById(_id);
                    return response.status(200).json(user);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ message: 'This user non exists!', error });
                    }
                    return response.status(400).json({ message: 'Ocurred an error.', error });
                }
            }));
        });
    }
    listByEmail(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = request.body;
            const listUserService = new ListUserService_1.ListUserService();
            let userEmailValidator = new UserValidator_1.UserEmailValidator();
            userEmailValidator.email = email;
            (0, class_validator_1.validate)(userEmailValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const user = yield listUserService.listUserByEmail(email);
                    return response.status(200).json(user);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ message: 'This user non exists!', error });
                    }
                    return response.status(400).json({ message: 'Ocurred an error.', error });
                }
            }));
        });
    }
    listAllUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { limit } = request.body;
            const listUserService = new ListUserService_1.ListUserService();
            let userEmailValidator = new UserValidator_1.UserLimiterValidator();
            userEmailValidator.limit = limit;
            (0, class_validator_1.validate)(userEmailValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const users = yield listUserService.listAllUsers(limit);
                    return response.status(200).json(users);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ message: 'This user non exists!', error });
                    }
                    return response.status(400).json({ message: 'Ocurred an error.', error });
                }
            }));
        });
    }
}
exports.ListUserController = ListUserController;
