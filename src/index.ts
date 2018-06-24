import StorageUtils from './utils/index';
import { NSStorex } from './index.d';
export default class Storex {
  private options;
  private storage;
  public state;
  constructor(options: NSStorex.IStorex, storage = new StorageUtils()) {
    this.options = options;
    this.storage = storage;
    this.state = Object.assign({}, this.options.state);
    this.setGettersandSetters((this.options.stateName = 'state'), this.state);
  }

  private setGettersandSetters(stateName: string, state: object) {
    const schema = {};
    const that = this;
    Object.keys(state).forEach(key => {
      schema[key] = state[key];
      try {
        Object.defineProperty(state, key, {
          get() {
            return schema[key];
          },
          set(value) {
            schema[key] = value;
            that.storage.setItem(stateName, state);
          },
        });
      } catch (e) {
        console.error(`Encountered an error while getting or setting a key!`);
        return false;
      }
    });
  }
}
