import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * The Method what set the resource into local storage
   * @param key what will be create a entry into local storage Database
   * @param data a string what is the value serialized
   */
  public setItem(key: string, data: string) {
    const existingItem = localStorage.getItem(key);
    if (existingItem) {
      localStorage.removeItem(key);
    }
    localStorage.setItem(key, btoa(data));
  }

  /**
   *
   * @param key
   */
  public getItem(key: string) {
    const existingItem = localStorage.getItem(key);
    if (existingItem) {
      return JSON.parse(atob(existingItem));
    } else {
      throw new Error(`Could not find item: ${key}`);
    }
  }

  /**
   * Delete Api
   */
  public deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}
