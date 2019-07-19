import { Component, Decorator } from '@nelts/nelts';
import { LocalContext, LocalWorkerPlugin } from '../index';
const Controller = Decorator.Controller;

@Controller.Prefix()
export default class IndexController extends Component.Controller<LocalWorkerPlugin> {
  constructor(app: LocalWorkerPlugin) {
    super(app);
  }

  @Controller.Get()
  async Home(ctx: LocalContext) {
    ctx.body = 'hello world';
  }
}