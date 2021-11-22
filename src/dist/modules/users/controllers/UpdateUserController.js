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
exports.UpdateUserController = void 0;
const class_validator_1 = require("class-validator");
const UpdateUserService_1 = require("../services/UpdateUserService");
const UserValidator_1 = require("../validators/UserValidator");
class UpdateUserController {
    updateUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.params;
            const { name, email, password } = request.body;
            const updateUserService = new UpdateUserService_1.UpdateUserService();
            let updateUserValidator = new UserValidator_1.UpdateUserValidator();
            let userIdValidator = new UserValidator_1.UserIdValidator();
            userIdValidator._id = _id;
            (0, class_validator_1.validate)(userIdValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
            }));
            updateUserValidator.name = name;
            updateUserValidator.email = email;
            updateUserValidator.password = password;
            (0, class_validator_1.validate)(updateUserValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                const userObj = {
                    name, email, password
                };
                try {
                    const user = yield updateUserService.updateUser(_id, userObj);
                    return response.json(user);
                }
                catch (error) {
                    if (error instanceof Error) {
                        if (error.message) {
                            return response.status(400).json({ error: error.message });
                        }
                        return response.status(400).json({ error: error.message });
                    }
                    return response.status(400).json({ error: 'Ocurred an error.' });
                }
            }));
        });
    }
}
exports.UpdateUserController = UpdateUserController;
