import { Settings } from '../common/types';
import { generateStyles } from './styleGenerator';

const STYLE_ELEMENT_ID = 'output-evolution-styles';

let styleElement: HTMLStyleElement | null = null;

/**
 * Injects dynamic theme styling based on current settings.
 * If styling is disabled or not applicable, any existing style tags are removed.
 */
export function injectStyles(settings: Settings): void {
  if (!settings.enabled) {
    removeStyles();
    return;
  }

  const css = generateStyles(settings);
  if (!css) {
    removeStyles();
    return;
  }

  // Optimize: Reuse existing stylesheet if present and update its content in-place.
  // This avoids constant stylesheet deletion and creation cycles which trigger style recalculation loops.
  const existing = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement | null;
  if (existing) {
    if (existing.textContent !== css) {
      existing.textContent = css;
    }
    styleElement = existing;
  } else {
    styleElement = document.createElement('style');
    styleElement.id = STYLE_ELEMENT_ID;
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }
}

/**
 * Removes the injected styling element from document head if present.
 */
export function removeStyles(): void {
  const existing = document.getElementById(STYLE_ELEMENT_ID);
  if (existing) {
    existing.remove();
  }
  if (styleElement) {
    styleElement = null;
  }
}
