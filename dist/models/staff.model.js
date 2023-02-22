"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true, versionKey: false });
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=staff.model.js.map