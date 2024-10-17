import { Injectable } from '@angular/core';

/**
 * Service to interact with the `localStorage`.
 * Provides methods to save, retrieve, and remove data from localStorage.
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    try {
      const jsonData = JSON.stringify(value);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error('Failed to save to local storage', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to get item from local storage', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      return localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove item from local storage', error);
    }
  }
}
