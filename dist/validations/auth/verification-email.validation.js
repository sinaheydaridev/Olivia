"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationEmailValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const verificationEmailValidation = (body) => {
    return joi_1.default
        .object({
        token: joi_1.default.string().trim(true).required(),
    })
        .validate(body);
};
exports.verificationEmailValidation = verificationEmailValidation;
//# sourceMappingURL=verification-email.validation.js.map