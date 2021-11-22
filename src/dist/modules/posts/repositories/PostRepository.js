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
exports.PostRepository = void 0;
const Post_1 = require("../schemas/Post");
class PostRepository {
    create({ author, title, description, categories }) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = {
                author,
                title,
                description,
                categories
            };
            yield Post_1.PostModel.create(post);
        });
    }
    deletePost(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Post_1.PostModel.findByIdAndDelete(_id);
        });
    }
    findPostById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.PostModel.findById(_id);
            return post;
        });
    }
    updatePost(_id, userObj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Post_1.PostModel.findByIdAndUpdate({ _id }, {
                $set: Object.assign({}, userObj)
            }, { new: true });
        });
    }
    listAllPosts(limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield Post_1.PostModel.find().limit(limit).select('-password');
            return post;
        });
    }
}
exports.PostRepository = PostRepository;
