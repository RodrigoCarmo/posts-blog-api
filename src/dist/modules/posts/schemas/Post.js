"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const database_1 = require("../../../database");
const PostSchema = new database_1.mongoose.Schema({
    author: String,
    title: String,
    description: String,
    categories: []
}, { timestamps: true });
const PostModel = database_1.mongoose.model('posts', PostSchema);
exports.PostModel = PostModel;
