import { provide, inject } from 'injection';
import ExposeService from './expose';

@provide('index')
export default class IndexService {
  @inject('expose')
  private _expose: ExposeService;

  sum(a: number, b: number) {
    return this._expose.money(a, b);
  }
}