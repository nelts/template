import { Controller } from '@nelts/http';
import { LocalWorkerContext, LocalWorkerPlugin } from '../index';
export default class IndexController extends Controller<LocalWorkerPlugin> {
    Home(ctx: LocalWorkerContext): Promise<void>;
    Health(ctx: LocalWorkerContext): Promise<void>;
    Test(ctx: LocalWorkerContext): Promise<void>;
    Sum(ctx: LocalWorkerContext): Promise<void>;
    StartTask(ctx: LocalWorkerContext): Promise<void>;
    StopTask(ctx: LocalWorkerContext): Promise<void>;
}
