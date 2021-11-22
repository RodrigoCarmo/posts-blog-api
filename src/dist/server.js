"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("./database/index");
const index_routes_1 = require("./routes/index.routes");
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(index_routes_1.routes);
app.listen(process.env.PORT || 3392, () => console.log('\x1b[32m', `🐱‍💻 Servidor rodando na porta: ${process.env.SERVER_PORT}`));
