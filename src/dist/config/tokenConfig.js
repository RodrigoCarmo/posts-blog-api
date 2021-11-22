"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenConfig = void 0;
require('dotenv').config();
const tokenConfig = {
    secret_token: `${process.env.USER_SECRET_TOKEN}`,
    expires_in: process.env.USER_EXPIRES_IN
};
exports.tokenConfig = tokenConfig;
