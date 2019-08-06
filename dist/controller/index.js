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
const http_1 = require("@nelts/http");
let IndexController = class IndexController extends http_1.Controller {
    async Home(ctx) {
        ctx.body = 'hello world';
    }
    async Health(ctx) {
        ctx.body = await ctx.asyncHealth();
    }
    async Test(ctx) {
        ctx.body = await ctx.asyncSend('test', {
            a: 19400,
            b: 5
        }, 'IndexAgent');
    }
    async Sum(ctx) {
        const a = Number(ctx.params.a);
        const b = Number(ctx.params.b);
        const service = ctx.injector.get('index');
        ctx.body = service.sum(a, b);
    }
    async StartTask(ctx) {
        ctx.body = await ctx.startJob('task', 'IndexAgent');
    }
    async StopTask(ctx) {
        ctx.body = await ctx.stopJob('task', 'IndexAgent');
    }
};
__decorate([
    http_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "Home", null);
__decorate([
    http_1.Get('/health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "Health", null);
__decorate([
    http_1.Get('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "Test", null);
__decorate([
    http_1.Get('/sum/:a(\\d+)/:b(\\d+)'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "Sum", null);
__decorate([
    http_1.Put('/task'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "StartTask", null);
__decorate([
    http_1.Delete('/task'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "StopTask", null);
IndexController = __decorate([
    http_1.Prefix()
], IndexController);
exports.default = IndexController;
