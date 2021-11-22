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
exports.CreateUserController = void 0;
const class_validator_1 = require("class-validator");
const CreateUserService_1 = require("../services/CreateUserService");
const UserValidator_1 = require("../validators/UserValidator");
class CreateUserController {
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = request.body;
            const createUserService = new CreateUserService_1.CreateUserService();
            let userValitador = new UserValidator_1.CreateUserValidator();
            userValitador.name = name;
            userValitador.email = email;
            userValitador.password = password;
            (0, class_validator_1.validate)(userValitador).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    yield createUserService.createUser({ name, email, password });
                    return response.status(201).send();
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
exports.CreateUserController = CreateUserController;
