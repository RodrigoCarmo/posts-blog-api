"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const database_1 = require("../../../database");
const UserSchema = new database_1.mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true });
const UserModel = database_1.mongoose.model('users', UserSchema);
exports.UserModel = UserModel;
