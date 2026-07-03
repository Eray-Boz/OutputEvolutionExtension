import React, { useEffect, useState } from 'react';
import { Settings } from '../common/types';
import { getStoredSettings, setStoredSettings } from '../common/storage';
import { ToggleSwitch } from './components/ToggleSwitch';
import { ThemeSelector } from './components/ThemeSelector';
import { IntensitySlider } from './components/IntensitySlider';
import { DonateButton } from './components/DonateButton';

export default function App() {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    // Load initial configurations from storage
    getStoredSettings().then((loadedSettings) => {
      setSettings(loadedSettings);
    });
  }, []);

  const notifyContentScript = (updatedSettings: Settings) => {
    if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab?.id) {
          chrome.tabs.sendMessage(activeTab.id, {
            type: 'SETTINGS_UPDATED',
            settings: updatedSettings
          }).catch(() => {
            // Ignored: Content script might not be injected in current tab
          });
        }
      });
    }
  };

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    if (!settings) return;

    const updated = {
      ...settings,
      [key]: value
    };

    setSettings(updated);
    setStoredSettings(updated);
    notifyContentScript(updated);
  };

  if (!settings) {
    // Elegant dark loading placeholder
    return (
      <div className="flex items-center justify-center w-[300px] h-[340px] bg-bg-primary text-gray-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-auto w-[300px] bg-bg-primary text-gray-100 select-none antialiased">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-b from-bg-secondary to-bg-primary border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center filter drop-shadow-[0_2px_8px_rgba(99,102,241,0.4)]">
            <img src="/icons/icon32.png" alt="OutputEvolution Logo" width="28" height="28" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-brand-primary-light bg-clip-text text-transparent">
              OutputEvolution
            </h1>
            <span className="text-[10px] text-gray-500 font-medium">v1.1.0</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-3.5 flex flex-col gap-3.5">
        <section className="flex flex-col gap-3">
          <ToggleSwitch
            checked={settings.enabled}
            onChange={(enabled) => updateSetting('enabled', enabled)}
          />
        </section>

        <div className="h-[1px] bg-white/10" />

        <section className={settings.enabled ? 'opacity-100 transition-opacity duration-200' : 'opacity-40 pointer-events-none transition-opacity duration-200'}>
          <ThemeSelector
            activeTheme={settings.theme}
            onChange={(theme) => updateSetting('theme', theme)}
          />
        </section>

        <div className="h-[1px] bg-white/10" />

        <section className={settings.enabled ? 'opacity-100 transition-opacity duration-200' : 'opacity-40 pointer-events-none transition-opacity duration-200'}>
          <IntensitySlider
            value={settings.intensity}
            onChange={(intensity) => updateSetting('intensity', intensity)}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="p-3.5 border-t border-white/10 bg-bg-primary">
        <DonateButton />
      </footer>
    </div>
  );
}
