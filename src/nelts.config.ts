import * as keygrip from 'keygrip';
export default {
  cookie: new keygrip(['nelts', 'cookies'], 'sha256', 'hex'),
  workerServiceFrameworker: '@nelts/http',
}