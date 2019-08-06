"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keygrip = require("keygrip");
exports.default = {
    cookie: new keygrip(['nelts', 'cookies'], 'sha256', 'hex'),
    workerServiceFrameworker: '@nelts/http',
};
