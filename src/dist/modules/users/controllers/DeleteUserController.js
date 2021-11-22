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
exports.DeleteUserController = void 0;
const class_validator_1 = require("class-validator");
const DeleteUserService_1 = require("../services/DeleteUserService");
const UserValidator_1 = require("../validators/UserValidator");
class DeleteUserController {
    deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.body;
            const deleteUserService = new DeleteUserService_1.DeleteUserService();
            let userIdValidator = new UserValidator_1.UserIdValidator();
            userIdValidator._id = _id;
            (0, class_validator_1.validate)(userIdValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const deleteUser = yield deleteUserService.deleteUser(_id);
                    return response.status(200).json(deleteUser);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ message: error.message });
                    }
                    return response.status(400).json({ message: 'Ocurred an error.', error });
                }
            }));
        });
    }
}
exports.DeleteUserController = DeleteUserController;
