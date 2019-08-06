import WorkerFactory, { WorkerPlugin } from '@nelts/worker';
import AgentFactory, { AgentPlugin } from '@nelts/agent';
import MasterFactory, { MasterPlugin } from '@nelts/master';
import Http, { Context } from '@nelts/http';

// worker interfaces
export interface LocalWorkerContext extends Context {}
export interface LocalWorkerPlugin extends WorkerPlugin<Http> {}
export interface LocalWorkerFactory extends WorkerFactory<Http> {}

// agent interfaces
export interface LocalAgentPlugin extends AgentPlugin {}
export interface LocalAgentFactory extends AgentFactory {}

// master interfaces
export interface LocalMasterFactory extends MasterFactory {}
export interface LocalMasterPlugin extends MasterPlugin {}