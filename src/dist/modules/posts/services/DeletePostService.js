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
exports.DeletePostService = void 0;
const PostRepository_1 = require("../repositories/PostRepository");
class DeletePostService {
    deletePost(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRepository = new PostRepository_1.PostRepository();
            const checkExistsPostId = yield postRepository.findPostById(_id);
            if (checkExistsPostId === null) {
                throw new Error('This post does not exists!');
            }
            try {
                yield postRepository.deletePost(_id);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.DeletePostService = DeletePostService;
