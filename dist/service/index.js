"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const injection_1 = require("injection");
const expose_1 = require("./expose");
let IndexService = class IndexService {
    sum(a, b) {
        return this._expose.money(a, b);
    }
};
__decorate([
    injection_1.inject('expose'),
    __metadata("design:type", expose_1.default)
], IndexService.prototype, "_expose", void 0);
IndexService = __decorate([
    injection_1.provide('index')
], IndexService);
exports.default = IndexService;
