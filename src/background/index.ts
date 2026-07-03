import { DEFAULT_SETTINGS } from '../common/constants';

/**
 * Initialize default settings on extension install
 */
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.sync.set({ outputEvolutionSettings: DEFAULT_SETTINGS });
  }
});
