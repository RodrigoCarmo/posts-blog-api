"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const tokenConfig_1 = require("../config/tokenConfig");
function ensureAuthenticated(request, response, next) {
    const auth = request.headers.authorization ||
        request.body.token ||
        request.query.token ||
        request.headers['x-access-token'];
    let token;
    if (!auth) {
        return response.status(400).json({ error: 'JWT token is missing!' });
    }
    if (request.headers.authorization) {
        [, token] = auth.split(' ');
    }
    if (request.body.token) {
        token = request.body.token;
    }
    if (request.query.token) {
        token = request.query.token;
    }
    if (request.headers['x-access-token']) {
        token = request.headers['x-access-token'];
    }
    try {
        (0, jsonwebtoken_1.verify)(token, tokenConfig_1.tokenConfig.secret_token);
        next();
    }
    catch (error) {
        return response.status(400).json(error);
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
