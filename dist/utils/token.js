"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const generateToken = (userId, expiresIn = "30d") => {
    const token = jsonwebtoken_1.default.sign({ userId: userId }, config_1.config.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const payload = jsonwebtoken_1.default.verify(token, config_1.config.JWT_SECRET);
    return payload;
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map