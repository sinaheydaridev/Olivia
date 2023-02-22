"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cart_items_model_1 = __importDefault(require("./cart-items.model"));
const cartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    cartItems: [cart_items_model_1.default],
    totalPrice: {
        type: Number,
        required: true,
    },
}, { timestamps: true, versionKey: false });
const Cart = (0, mongoose_1.model)("Cart", cartSchema);
exports.default = Cart;
//# sourceMappingURL=cart.model.js.map