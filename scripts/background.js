/**
 * OutputEvolution - Background Service Worker
 * Handles extension installation and default settings initialization.
 *
 * @version 1.0.1
 * @author Eray Boz
 * @license MIT
 */

// Default settings configuration
const DEFAULT_SETTINGS = {
  enabled: true,
  theme: 'blue',
  intensity: 2,
  elements: {
    lists: true,
    tables: true,
    code: true,
    quotes: true,
    links: true,
    headings: true,
    formulas: true
  }
};

/**
 * Initialize default settings on extension install
 */
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.sync.set({ outputEvolutionSettings: DEFAULT_SETTINGS });
  }
});
