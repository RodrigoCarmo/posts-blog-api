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
exports.ListPostController = void 0;
const class_validator_1 = require("class-validator");
const ListPostService_1 = require("../services/ListPostService");
const PostValidators_1 = require("../validators/PostValidators");
class ListPostController {
    listUserByAuthor(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.params;
            const listPostService = new ListPostService_1.ListPostService();
            let postIdValidator = new PostValidators_1.PostIdValidator();
            postIdValidator._id = _id;
            (0, class_validator_1.validate)(postIdValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const user = yield listPostService.listPostByAuthor(_id);
                    return response.status(200).json(user);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ message: 'This post non exists!', error });
                    }
                    return response.status(400).json({ message: 'Ocurred an error.', error });
                }
            }));
        });
    }
    listAllPosts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { limit } = request.body;
            const listPostService = new ListPostService_1.ListPostService();
            let postLimiterValidator = new PostValidators_1.PostLimiterValidator();
            postLimiterValidator.limit = limit;
            (0, class_validator_1.validate)(postLimiterValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const users = yield listPostService.listAllPosts(limit);
                    return response.status(200).json(users);
                }
                catch (error) {
                    if (error instanceof Error) {
                        return response.status(400).json({ message: 'This post non exists!', error });
                    }
                    return response.status(400).json({ message: 'Ocurred an error.', error });
                }
            }));
        });
    }
}
exports.ListPostController = ListPostController;
