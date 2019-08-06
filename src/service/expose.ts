import { provide } from 'injection';

@provide('expose')
export default class ExposeService {
  money(a: number, b: number) {
    return a + b;
  }
}