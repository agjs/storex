import { NSStorageUtils } from './index.d';

export default class StorageUtils {
  public storage: NSStorageUtils.IStorage;
  constructor(storage = window.localStorage) {
    this.storage = storage;
  }
  public getItem(key) {
    const value = this.storage.getItem(key);
    return value && JSON.parse(value);
  }

  public setItem(key, value) {
    if (!key || !value || !isNaN(key)) {
      return;
    }
    const v = typeof value !== 'string' ? JSON.stringify(value) : value;
    this.storage.setItem(key, v);
  }
}
