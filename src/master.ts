import { LocalMasterPlugin } from './index';

export default (plu: LocalMasterPlugin) => {
  plu.on('props', async configs => plu.logger.debug('<ConfigProps>', configs));
}