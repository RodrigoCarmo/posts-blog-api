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
exports.ListPostService = void 0;
const PostRepository_1 = require("../repositories/PostRepository");
class ListPostService {
    listPostByAuthor(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRepository = new PostRepository_1.PostRepository();
            try {
                const checkExistsPostId = yield postRepository.findPostById(_id);
                if (checkExistsPostId === null) {
                    throw new Error('This post does not exists!');
                }
                return checkExistsPostId;
            }
            catch (error) {
                throw new Error('Ocurred an error.');
            }
        });
    }
    listAllPosts(limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRepository = new PostRepository_1.PostRepository();
            try {
                const checkExistsPostId = yield postRepository.listAllPosts(limit);
                if (checkExistsPostId === null) {
                    throw new Error('This post does not exists!');
                }
                return checkExistsPostId;
            }
            catch (error) {
                throw new Error('Ocurred an error.');
            }
        });
    }
}
exports.ListPostService = ListPostService;
