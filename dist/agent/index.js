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
const agent_1 = require("@nelts/agent");
let IndexAgent = class IndexAgent extends agent_1.AgentComponent {
    async beforeCreate() {
        this.logger.debug('<LifeCycle>', '[beforeCreate]', 'invoked');
    }
    async created() {
        this.logger.debug('<LifeCycle>', '[created]', 'invoked');
    }
    async beforeDestroy() {
        this.logger.debug('<LifeCycle>', '[beforeDestroy]', 'invoked');
    }
    async destroyed() {
        this.logger.debug('<LifeCycle>', '[destroyed]', 'invoked');
    }
    async catchError(e) {
        this.logger.debug('<LifeCycle>', '[catchError]', 'invoked', e);
    }
    async ready() {
        this.logger.debug('<LifeCycle>', '[ready]', 'invoked');
    }
    async health() {
        return {
            foo: 'bar'
        };
    }
    async test(data) {
        return {
            sum: data.a + data.b,
            multiply: data.a * data.b,
            divide: data.a / data.b,
        };
    }
    async task() {
        this.logger.debug('[Task]', 'run', Date.now());
    }
};
__decorate([
    agent_1.Ipc(true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndexAgent.prototype, "test", null);
__decorate([
    agent_1.Schedule('*/3 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IndexAgent.prototype, "task", null);
IndexAgent = __decorate([
    agent_1.Auto
], IndexAgent);
exports.default = IndexAgent;
