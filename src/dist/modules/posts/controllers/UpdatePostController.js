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
exports.UpdatePostController = void 0;
const class_validator_1 = require("class-validator");
const UpdatePostService_1 = require("../services/UpdatePostService");
const PostValidators_1 = require("../validators/PostValidators");
class UpdatePostController {
    updateUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.params;
            const { author, title, description, categories } = request.body;
            const updatePostService = new UpdatePostService_1.UpdatePostService();
            let updatePostValidator = new PostValidators_1.UpdatePostValidator();
            let postIdValidator = new PostValidators_1.PostIdValidator();
            postIdValidator._id = _id;
            (0, class_validator_1.validate)(postIdValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
            }));
            updatePostValidator.author = author;
            updatePostValidator.title = title;
            updatePostValidator.description = description;
            updatePostValidator.categories = categories;
            (0, class_validator_1.validate)(updatePostValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                const postObj = {
                    author, title, description, categories
                };
                try {
                    const post = yield updatePostService.updatePost(_id, postObj);
                    return response.json(post);
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
exports.UpdatePostController = UpdatePostController;
