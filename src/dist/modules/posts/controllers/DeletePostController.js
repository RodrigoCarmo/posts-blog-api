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
exports.DeletePostController = void 0;
const class_validator_1 = require("class-validator");
const DeletePostService_1 = require("../services/DeletePostService");
const PostValidators_1 = require("../validators/PostValidators");
class DeletePostController {
    deletePost(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.body;
            const deletePostService = new DeletePostService_1.DeletePostService();
            let postIdValidator = new PostValidators_1.PostIdValidator();
            postIdValidator._id = _id;
            (0, class_validator_1.validate)(postIdValidator).then((errors) => __awaiter(this, void 0, void 0, function* () {
                if (errors.length > 0) {
                    return response.status(400).json(errors);
                }
                try {
                    const deletePost = yield deletePostService.deletePost(_id);
                    return response.status(200).json(deletePost);
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
exports.DeletePostController = DeletePostController;
