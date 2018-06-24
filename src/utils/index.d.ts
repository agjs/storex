export declare namespace NSStorageUtils {
  interface IStorage {
    getItem(key: string): string;
    setItem(key: string, value: string): void;
  }
  interface IStorageUtils {
    storage: IStorage;
  }
}
