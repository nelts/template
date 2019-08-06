import { AgentComponent, AgentComponentImplements, Ipc, Schedule, Auto } from '@nelts/agent';

@Auto
export default class IndexAgent extends AgentComponent implements AgentComponentImplements {
  async beforeCreate() {
    this.logger.debug('<LifeCycle>', '[beforeCreate]', 'invoked');
  }

  async created() {
    this.logger.debug('<LifeCycle>', '[created]', 'invoked');
  }

  async beforeDestroy() {
    this.logger.debug('<LifeCycle>', '[beforeDestroy]', 'invoked');
  }

  async destroyed(){
    this.logger.debug('<LifeCycle>', '[destroyed]', 'invoked');
  }

  async catchError(e: Error) {
    this.logger.debug('<LifeCycle>', '[catchError]', 'invoked', e);
  }

  async ready() {
    this.logger.debug('<LifeCycle>', '[ready]', 'invoked');
  }

  async health() {
    return {
      foo: 'bar'
    }
  }

  @Ipc(true)
  async test(data: { a: number, b: number }) {
    return {
      sum: data.a + data.b,
      multiply: data.a * data.b,
      divide: data.a / data.b,
    }
  }

  @Schedule('*/3 * * * * *')
  async task() {
    this.logger.debug('[Task]', 'run', Date.now());
  }
}