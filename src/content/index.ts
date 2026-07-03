import { getStoredSettings } from '../common/storage';
import { Settings } from '../common/types';
import { injectStyles } from './injector';

let currentSettings: Settings | null = null;
let integrityInterval: any = null;

/**
 * Re-injects styles on settings load or updates.
 */
function applyConfiguration(settings: Settings) {
  currentSettings = settings;
  injectStyles(settings);
}

/**
 * Periodically checks if the stylesheet is still present in the head.
 * This replaces the heavy MutationObserver to completely eliminate CPU overhead and layout lag
 * during dynamic streaming of AI responses.
 */
function startIntegrityCheck() {
  if (integrityInterval) {
    clearInterval(integrityInterval);
  }

  integrityInterval = setInterval(() => {
    if (!currentSettings || !currentSettings.enabled) return;

    const existing = document.getElementById('output-evolution-styles');
    if (!existing) {
      injectStyles(currentSettings);
    }
  }, 3000);
}

/**
 * Listen for message commands from the popup script to update styling instantly.
 */
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'SETTINGS_UPDATED') {
    applyConfiguration(message.settings);
    sendResponse({ success: true });
  }
  return true;
});

/**
 * Bootstraps content script.
 */
async function init() {
  const settings = await getStoredSettings();
  applyConfiguration(settings);
  startIntegrityCheck();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
