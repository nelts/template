"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (plu) => {
    plu.on('props', async (configs) => plu.logger.debug('<ConfigProps>', configs));
    plu.app.on('ServerStarted', async () => plu.logger.debug('<LifeCycle>', '[ServerStarted]', 'invoked'));
    plu.app.on('ServerStopping', async () => console.info('<LifeCycle>', '[ServerStopping]', 'invoked'));
    plu.app.on('ServerStopped', async () => console.info('<LifeCycle>', '[ServerStopped]', 'invoked'));
    plu.app.on('ContextStop', async (ctx) => ctx.logger.debug('<LifeCycle>', '[ContextStop]', 'invoked'));
    plu.app.on('ContextStart', async (ctx) => {
        ctx.on('ContextError', async (e) => ctx.logger.debug('<Context>', '[ContextError]', 'invoked', e));
        ctx.on('ContextStaticValidator', async () => ctx.logger.debug('<Context>', '[ContextStaticValidator]', 'invoked'));
        ctx.on('ContextStaticFilter', async () => ctx.logger.debug('<Context>', '[ContextStaticFilter]', 'invoked'));
        ctx.on('ContextDynamicLoader', async () => ctx.logger.debug('<Context>', '[ContextDynamicLoader]', 'invoked'));
        ctx.on('ContextDynamicValidator', async () => ctx.logger.debug('<Context>', '[ContextDynamicValidator]', 'invoked'));
        ctx.on('ContextDynamicFilter', async () => ctx.logger.debug('<Context>', '[ContextDynamicFilter]', 'invoked'));
        ctx.on('ContextGuard', async () => ctx.logger.debug('<Context>', '[ContextGuard]', 'invoked'));
        ctx.on('ContextMiddleware', async () => ctx.logger.debug('<Context>', '[ContextMiddleware]', 'invoked'));
        ctx.on('ContextRuntime', async () => ctx.logger.debug('<Context>', '[ContextRuntime]', 'invoked'));
        ctx.on('ContextResponse', async () => ctx.logger.debug('<Context>', '[ContextResponse]', 'invoked'));
        ctx.on('ContextResolve', async () => ctx.logger.debug('<Context>', '[ContextResolve]', 'invoked'));
        ctx.on('ContextReject', async (e) => ctx.logger.debug('<Context>', '[ContextReject]', 'invoked', e));
        ctx.logger.debug('<LifeCycle>', '[ContextStart]', ctx.url);
    });
};
