"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("internal/database");
const auth_user_seeder_1 = require("core/authUser/auth-user.seeder");
const product_seeder_1 = require("core/product/product.seeder");
const seedAllModels = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.mongoConnect)();
    yield (0, database_1.mongoDrop)();
    yield (0, auth_user_seeder_1.createUserSeedData)();
    yield (0, product_seeder_1.createProductsSeedData)();
    yield (0, database_1.mongoClose)();
    console.log("Seeds done!");
    // TODO: Add more
});
seedAllModels();
//# sourceMappingURL=seeds.js.map