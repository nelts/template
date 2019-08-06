import { Controller, Prefix, Get, Put, Delete } from '@nelts/http';
import { LocalWorkerContext, LocalWorkerPlugin } from '../index';

import IndexService from '../service/index';

@Prefix()
export default class IndexController extends Controller<LocalWorkerPlugin> {
  @Get()
  async Home(ctx: LocalWorkerContext) {
    ctx.body = 'hello world';
  }

  @Get('/health')
  async Health(ctx: LocalWorkerContext) {
    ctx.body = await ctx.asyncHealth();
  }

  @Get('/test')
  async Test(ctx: LocalWorkerContext) {
    ctx.body = await ctx.asyncSend('test', {
      a: 19400,
      b: 5
    }, 'IndexAgent');
  }

  @Get('/sum/:a(\\d+)/:b(\\d+)')
  async Sum(ctx: LocalWorkerContext) {
    const a = Number(ctx.params.a);
    const b = Number(ctx.params.b);
    const service = ctx.injector.get<IndexService>('index');
    ctx.body = service.sum(a, b);
  }

  @Put('/task')
  async StartTask(ctx: LocalWorkerContext) {
    ctx.body = await ctx.startJob('task', 'IndexAgent');
  }

  @Delete('/task')
  async StopTask(ctx: LocalWorkerContext) {
    ctx.body = await ctx.stopJob('task', 'IndexAgent');
  }
}