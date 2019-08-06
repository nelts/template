import { Provide, Inject } from '@nelts/http';
import ExposeService from './expose';

@Provide('index')
export default class IndexService {
  @Inject('expose')
  private _expose: ExposeService;

  sum(a: number, b: number) {
    return this._expose.money(a, b);
  }
}