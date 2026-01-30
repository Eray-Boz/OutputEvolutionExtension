/**
 * OutputEvolution - Popup Controller
 * Handles user interface interactions and settings management
 * 
 * @version 1.0.0
 * @author OutputEvolution
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const enableToggle = document.getElementById('enableToggle');
  const themeButtons = document.querySelectorAll('.theme-btn');
  const intensitySlider = document.getElementById('intensitySlider');

  // Default settings
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

  // Valid theme options
  const VALID_THEMES = ['blue', 'green', 'red', 'yellow', 'turquoise', 'navy', 'orange', 'pink', 'purple', 'brown'];

  /**
   * Loads settings from Chrome storage and updates UI
   */
  function loadSettings() {
    chrome.storage.sync.get(['outputEvolutionSettings'], (result) => {
      const settings = result.outputEvolutionSettings || DEFAULT_SETTINGS;

      // Validate theme
      if (!VALID_THEMES.includes(settings.theme)) {
        settings.theme = 'blue';
        chrome.storage.sync.set({ outputEvolutionSettings: settings });
      }

      // Update UI elements
      enableToggle.checked = settings.enabled;
      intensitySlider.value = settings.intensity;

      // Update theme buttons
      themeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === settings.theme);
      });
    });
  }

  /**
   * Saves current settings to Chrome storage
   */
  function saveSettings() {
    const settings = {
      enabled: enableToggle.checked,
      theme: document.querySelector('.theme-btn.active').dataset.theme,
      intensity: parseInt(intensitySlider.value, 10),
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

    chrome.storage.sync.set({ outputEvolutionSettings: settings }, () => {
      notifyContentScript(settings);
    });
  }

  /**
   * Sends updated settings to content script
   * @param {Object} settings - Settings object to send
   */
  function notifyContentScript(settings) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'SETTINGS_UPDATED',
          settings: settings
        }).catch(() => {
          // Tab might not have content script loaded
        });
      }
    });
  }

  // Event Listeners
  enableToggle.addEventListener('change', saveSettings);

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      saveSettings();
    });
  });

  intensitySlider.addEventListener('input', saveSettings);

  // Initialize
  loadSettings();
});
