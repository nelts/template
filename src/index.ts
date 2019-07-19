import { Context, WorkerPlugin } from '@nelts/nelts';
export interface LocalWorkerPlugin extends WorkerPlugin {};
export interface LocalContext extends Context<LocalWorkerPlugin> {};