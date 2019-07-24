import { LocalContext, LocalWorkerPlugin } from './index';

export default (plu: LocalWorkerPlugin) => {
  plu.on('props', async configs => plu.logger.debug('nelts props received:', configs));
  plu.on('ServerStarted', async () => plu.logger.debug('nelts life [ServerStarted] invoked.'));
  plu.on('ServerStopping', async () => plu.logger.debug('nelts life [ServerStopping] invoked.'));
  plu.on('ServerStopped', async () => plu.logger.debug('nelts life [ServerStopped] invoked.'));
  plu.on('ContextStart', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextStart] invoked.'));
  plu.on('ContextStaticValidator', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextStaticValidator] invoked.'));
  plu.on('ContextStaticFilter', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextStaticFilter] invoked.'));
  plu.on('ContextDynamicLoader', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextDynamicLoader] invoked.'));
  plu.on('ContextDynamicValidator', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextDynamicValidator] invoked.'));
  plu.on('ContextDynamicFilter', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextDynamicFilter] invoked.'));
  plu.on('ContextGuard', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextGuard] invoked.'));
  plu.on('ContextMiddleware', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextMiddleware] invoked.'));
  plu.on('ContextRuntime', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextRuntime] invoked.'));
  plu.on('ContextResponse', async (ctx: LocalContext) => plu.logger.debug('nelts context life [ContextResponse] invoked.'));
  plu.on('ContextResolve', async (ctx: LocalContext) => plu.logger.debug('nelts context life status [ContextResolve] invoked.'));
  plu.on('ContextReject', async (e: Error, ctx: LocalContext) => plu.logger.debug('nelts context life status [ContextReject] invoked.'));
}