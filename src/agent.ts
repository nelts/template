import { LocalAgentPlugin } from './index';

export default (plu: LocalAgentPlugin) => {
  plu.on('props', async configs => plu.logger.debug('<ConfigProps>', configs));
}