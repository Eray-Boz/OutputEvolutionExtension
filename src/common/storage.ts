import { Settings } from './types';
import { DEFAULT_SETTINGS } from './constants';

const STORAGE_KEY = 'outputEvolutionSettings';

/**
 * Retrieves the current settings from Chrome Storage Sync.
 * Falls back to DEFAULT_SETTINGS if no settings are stored.
 */
export function getStoredSettings(): Promise<Settings> {
  return new Promise((resolve) => {
    if (typeof chrome === 'undefined' || !chrome.storage || !chrome.storage.sync) {
      resolve(DEFAULT_SETTINGS);
      return;
    }

    chrome.storage.sync.get([STORAGE_KEY], (result) => {
      resolve(result[STORAGE_KEY] || DEFAULT_SETTINGS);
    });
  });
}

/**
 * Saves the given settings configuration to Chrome Storage Sync.
 */
export function setStoredSettings(settings: Settings): Promise<void> {
  return new Promise((resolve) => {
    if (typeof chrome === 'undefined' || !chrome.storage || !chrome.storage.sync) {
      resolve();
      return;
    }

    chrome.storage.sync.set({ [STORAGE_KEY]: settings }, () => {
      resolve();
    });
  });
}
