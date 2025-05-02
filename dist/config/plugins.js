"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    "users-permissions": {
        config: {
            jwtSecret: env("JWT_SECRET"),
        },
    },
});
