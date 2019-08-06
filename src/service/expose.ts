import { Provide } from '@nelts/http';

@Provide('expose')
export default class ExposeService {
  money(a: number, b: number) {
    return a + b;
  }
}