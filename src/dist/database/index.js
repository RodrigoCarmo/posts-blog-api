"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const mongodbConfig_1 = require("../config/mongodbConfig");
let server;
if (mongodbConfig_1.mongodbConfig.server !== undefined) {
    server = mongodbConfig_1.mongodbConfig.server;
}
else {
    server = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
}
mongoose_1.default.connect(server, {
    retryWrites: true
}).then(() => {
    if (mongodbConfig_1.mongodbConfig.server !== undefined) {
        console.log('MongoDB conectado ao cluster online');
    }
    else {
        console.log('MongoDB conectado localmente');
    }
})
    .catch((err) => {
    console.log('Connection error', err);
    process.exit();
});
mongoose_1.default.Promise = global.Promise;
