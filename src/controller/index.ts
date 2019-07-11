import { Component, Decorator, WorkerPlugin, Context } from '@nelts/nelts';
const Controller = Decorator.Controller;

@Controller.Prefix()
export default class IndexController extends Component.Controller {
  constructor(app: WorkerPlugin) {
    super(app);
  }

  @Controller.Get()
  async Home(ctx: Context) {
    ctx.body = 'hello world';
  }
}