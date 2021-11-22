"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbConfig = void 0;
require('dotenv').config();
const mongodbConfig = {
    server: process.env.MONGODB_URL
};
exports.mongodbConfig = mongodbConfig;
