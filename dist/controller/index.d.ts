import { Component, WorkerPlugin, Context } from '@nelts/nelts';
export default class IndexController extends Component.Controller {
    constructor(app: WorkerPlugin);
    Home(ctx: Context): Promise<void>;
}
