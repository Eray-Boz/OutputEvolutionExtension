import { Settings } from '../common/types';
import { THEMES, INTENSITY } from '../common/constants';
import { detectPlatform, getSelectors } from './platform';

/**
 * Converts a hex color string to a comma-separated RGB triplet.
 * @param hex Hex color code (e.g. '#3B82F6')
 * @returns RGB values string (e.g. '59, 130, 246')
 */
function hexToRgb(hex: string): string {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return match
    ? `${parseInt(match[1], 16)}, ${parseInt(match[2], 16)}, ${parseInt(match[3], 16)}`
    : '99, 102, 241';
}

/**
 * Generates the complete CSS stylesheet based on user settings.
 *
 * NOTE: Google Fonts (Quicksand, JetBrains Mono) are NOT loaded via
 * @import because target sites' Content Security Policy blocks external
 * stylesheets. Font references are kept with system-font fallbacks.
 *
 * @param settings User preferences
 * @returns Complete CSS string
 */
export function generateStyles(settings: Settings): string {
  if (!settings.enabled) return '';

  const theme = THEMES[settings.theme] || THEMES.blue;
  const intensity = INTENSITY[settings.intensity] || INTENSITY[2];
  const platform = detectPlatform();
  const sel = getSelectors();
  const containerSelector = sel.container;
  const isGemini = platform === 'gemini';

  let css = '';

  // Gemini: Prevent header area (with Gemini logo) from being styled
  if (isGemini) {
    css += `
      .response-container-header {
        background: none !important;
        border: none !important;
        box-shadow: none !important;
      }
    `;
  }

  // ----------------------------------------------------------
  // LISTS
  // ----------------------------------------------------------
  if (settings.elements.lists) {
    css += `
      ${sel.lists},
      ${containerSelector} ${sel.content} ul,
      ${containerSelector} ${sel.content} ol {
        background: ${theme.gradientSubtle} !important;
        border: ${intensity.borderWidth} solid ${theme.border} !important;
        border-radius: ${intensity.borderRadius} !important;
        padding: 16px 20px 16px 40px !important;
        margin: 16px 0 !important;
        box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
        position: relative !important;
        will-change: transform, box-shadow;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        overflow-x: auto !important;
        overflow-y: visible !important;
        list-style-position: outside !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        display: block !important;
      }

      ${sel.lists}:hover,
      ${containerSelector} ${sel.content} ul:hover,
      ${containerSelector} ${sel.content} ol:hover {
        transform: ${intensity.transform} !important;
        box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
        border-color: ${theme.primary} !important;
      }

      ${sel.lists} li,
      ${containerSelector} ${sel.content} ul li,
      ${containerSelector} ${sel.content} ol li {
        color: inherit !important;
        padding: 8px 0 !important;
        margin: 0 !important;
        border-bottom: 1px solid ${theme.border} !important;
        position: relative !important;
        transition: padding-left 0.2s ease !important;
        overflow-wrap: break-word !important;
        word-break: break-word !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        display: list-item !important;
      }

      /* Fix Chrome list marker alignment bug and text-indent overrides on ordered lists */
      .markdown ol li,
      ${containerSelector} ${sel.content} ol li {
        position: relative !important;
        padding-left: 24px !important;
      }

      .markdown ol li:hover,
      ${containerSelector} ${sel.content} ol li:hover {
        padding-left: 28px !important;
      }

      ${sel.lists} li:last-child,
      ${containerSelector} ${sel.content} ul li:last-child,
      ${containerSelector} ${sel.content} ol li:last-child {
        border-bottom: none !important;
      }

      .markdown ul li:hover,
      ${containerSelector} ${sel.content} ul li:hover {
        padding-left: 4px !important;
      }

      ${sel.lists} li::marker,
      ${containerSelector} ${sel.content} ul li::marker,
      ${containerSelector} ${sel.content} ol li::marker {
        color: ${theme.primary} !important;
        font-weight: 600 !important;
      }

      .markdown ul,
      ${containerSelector} ${sel.content} ul {
        list-style: none !important;
      }

      .markdown ul li::before,
      ${containerSelector} ${sel.content} ul li::before {
        content: '' !important;
        position: absolute !important;
        left: -24px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        width: 8px !important;
        height: 8px !important;
        background: ${theme.gradient} !important;
        border-radius: 50% !important;
        opacity: 0.8 !important;
        border: none !important;
        box-shadow: none !important;
      }

      ${sel.lists} li *,
      ${containerSelector} ${sel.content} ul li *,
      ${containerSelector} ${sel.content} ol li * {
        color: inherit !important;
      }
    `;

    // Gemini-specific list selectors
    if (isGemini) {
      css += `
        message-content ul,
        message-content ol,
        model-response ul,
        model-response ol,
        .response-content ul,
        .response-content ol,
        .model-response-text ul,
        .model-response-text ol {
          background: ${theme.gradientSubtle} !important;
          border: ${intensity.borderWidth} solid ${theme.border} !important;
          border-radius: ${intensity.borderRadius} !important;
          padding: 16px 20px 16px 40px !important;
          margin: 16px 0 !important;
          box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
          position: relative !important;
          will-change: transform, box-shadow;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          overflow-x: auto !important;
          overflow-y: visible !important;
          list-style-position: outside !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        message-content ul:hover,
        message-content ol:hover,
        model-response ul:hover,
        model-response ol:hover,
        .response-content ul:hover,
        .response-content ol:hover {
          transform: ${intensity.transform} !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
          border-color: ${theme.primary} !important;
        }

        message-content li,
        model-response li,
        .response-content li,
        .model-response-text li {
          color: inherit !important;
          padding: 8px 0 !important;
          margin: 0 !important;
          border-bottom: 1px solid ${theme.border} !important;
          position: relative !important;
          transition: padding-left 0.2s ease !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          display: list-item !important;
        }

        /* Fix Chrome list marker alignment bug and text-indent overrides on Gemini ordered lists */
        message-content ol li,
        model-response ol li,
        .response-content ol li,
        .model-response-text ol li {
          position: relative !important;
          padding-left: 24px !important;
        }

        message-content ol li:hover,
        model-response ol li:hover,
        .response-content ol li:hover {
          padding-left: 28px !important;
        }

        message-content li:last-child,
        model-response li:last-child,
        .response-content li:last-child,
        .model-response-text li:last-child {
          border-bottom: none !important;
        }

        message-content ul li:hover,
        model-response ul li:hover,
        .response-content ul li:hover {
          padding-left: 4px !important;
        }

        message-content li::marker,
        model-response li::marker,
        .response-content li::marker {
          color: ${theme.primary} !important;
          font-weight: 600 !important;
        }

        message-content ul li::before,
        model-response ul li::before,
        .response-content ul li::before,
        .markdown-main-panel ul li::before {
          content: '' !important;
          position: absolute !important;
          left: -24px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 8px !important;
          height: 8px !important;
          background: ${theme.gradient} !important;
          border-radius: 50% !important;
          opacity: 0.8 !important;
          border: none !important;
          box-shadow: none !important;
        }

        message-content ul ul,
        message-content ol ol,
        message-content ul ol,
        message-content ol ul,
        model-response ul ul,
        model-response ol ol,
        model-response ul ol,
        model-response ol ul,
        .markdown-main-panel ul ul,
        .markdown-main-panel ol ol,
        .markdown-main-panel ul ol,
        .markdown-main-panel ol ul {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 8px 0 8px 24px !important;
          margin: 4px 0 !important;
        }
      `;
    }
  }

  // ----------------------------------------------------------
  // TABLES
  // ----------------------------------------------------------
  if (settings.elements.tables) {
    css += `
      ${sel.tables} {
        width: 100% !important;
        border-collapse: separate !important;
        border-spacing: 0 !important;
        border: ${intensity.borderWidth} solid ${theme.border} !important;
        border-radius: ${intensity.borderRadius} !important;
        overflow: hidden !important;
        margin: 20px 0 !important;
        box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
        background: ${theme.gradientSubtle} !important;
      }

      ${sel.tables} thead {
        background: ${theme.tableHeaderBg} !important;
      }

      ${sel.tables} th {
        padding: 14px 18px !important;
        text-align: left !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        color: ${theme.tableHeaderText} !important;
        border: none !important;
      }

      ${sel.tables} td {
        color: inherit !important;
        padding: 14px 18px !important;
        border-bottom: 1px solid ${theme.border} !important;
        transition: background-color 0.2s ease, border-left 0.2s ease, padding-left 0.2s ease !important;
      }

      ${sel.tables} tr:last-child td {
        border-bottom: none !important;
      }

      ${sel.tables} tbody tr:hover {
        background: rgba(${hexToRgb(theme.primary)}, 0.08) !important;
      }

      ${sel.tables} tbody tr:hover td:first-child {
        border-left: 3px solid ${theme.primary} !important;
        padding-left: 15px !important;
      }
    `;

    if (platform === 'chatgpt') {
      css += `
        .markdown div:has(> table) {
          margin-top: 20px !important;
          margin-bottom: 20px !important;
        }
        .markdown div:has(> table) > table {
          margin: 0 !important;
        }
        .markdown div:has(> table) .absolute.end-0 {
          right: 8px !important;
        }
      `;
    }


    if (isGemini) {
      css += `
        message-content table,
        model-response table,
        .response-content table,
        .model-response-text table {
          width: 100% !important;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border: ${intensity.borderWidth} solid ${theme.border} !important;
          border-radius: ${intensity.borderRadius} !important;
          overflow: hidden !important;
          margin: 20px 0 !important;
          box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
          background: ${theme.gradientSubtle} !important;
        }

        message-content thead,
        model-response thead,
        .response-content thead,
        .model-response-text thead {
          background: ${theme.tableHeaderBg} !important;
        }

        message-content th,
        model-response th,
        .response-content th,
        .model-response-text th {
          padding: 14px 18px !important;
          text-align: left !important;
          font-weight: 600 !important;
          font-size: 13px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          color: ${theme.tableHeaderText} !important;
          border: none !important;
        }

        message-content td,
        model-response td,
        .response-content td,
        .model-response-text td {
          color: inherit !important;
          padding: 14px 18px !important;
          border-bottom: 1px solid ${theme.border} !important;
          transition: background-color 0.2s ease, border-left 0.2s ease, padding-left 0.2s ease !important;
        }

        message-content tr:last-child td,
        model-response tr:last-child td,
        .response-content tr:last-child td {
          border-bottom: none !important;
        }

        message-content tbody tr:hover,
        model-response tbody tr:hover,
        .response-content tbody tr:hover {
          background: rgba(${hexToRgb(theme.primary)}, 0.08) !important;
        }
      `;
    }
  }

  // ----------------------------------------------------------
  // CODE BLOCKS
  // ----------------------------------------------------------
  if (settings.elements.code) {
    css += `
      .markdown pre {
        background: linear-gradient(145deg, #0f0f23 0%, #1a1a2e 100%) !important;
        border: 2px solid ${theme.border} !important;
        border-radius: ${intensity.borderRadius} !important;
        padding: 0 !important;
        margin: 20px 0 !important;
        overflow: hidden !important;
        font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace !important;
        font-size: 14px !important;
        line-height: 1.6 !important;
        box-shadow: 0 ${parseInt(intensity.shadowSize) + 2}px ${parseInt(intensity.shadowSize) * 3}px rgba(0, 0, 0, 0.4),
                    0 0 12px rgba(${hexToRgb(theme.primary)}, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        position: relative !important;
        will-change: border-color, box-shadow;
        transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      .markdown pre:hover {
        border-color: ${theme.primary} !important;
        box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 4}px rgba(0, 0, 0, 0.4),
                    0 0 20px rgba(${hexToRgb(theme.primary)}, 0.35),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
      }

      /* Remove gap and separate background of inner containers in ChatGPT pre */
      .markdown pre > div {
        background: transparent !important;
        border: none !important;
        margin: 0 !important;
        box-shadow: none !important;
      }



      /* Prevent double styling/headers on nested pre elements */
      .markdown pre pre {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        padding: 0 !important;
        transform: none !important;
      }

      .markdown pre pre::before {
        display: none !important;
        content: none !important;
      }


      .markdown pre code {
        background: transparent !important;
        padding: 20px !important;
        border: none !important;
        display: block !important;
        overflow-x: auto !important;
      }

      /* Target inline code only, avoiding code blocks inside pre tags */
      .markdown code:not(pre code) {
        background: rgba(${hexToRgb(theme.primary)}, 0.15) !important;
        color: ${theme.primaryLight} !important;
        padding: 3px 8px !important;
        border-radius: 5px !important;
        font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
        font-size: 0.9em !important;
        border: 1px solid ${theme.border} !important;
      }
    `;

    if (isGemini) {
      css += `
        /* Style the outer code block wrapper for Gemini */
        message-content .code-block,
        model-response .code-block,
        .response-content .code-block,
        .markdown-main-panel .code-block,
        .model-response-text .code-block {
          background: linear-gradient(145deg, #0f0f23 0%, #1a1a2e 100%) !important;
          border: 2px solid ${theme.border} !important;
          border-radius: ${intensity.borderRadius} !important;
          padding: 0 !important;
          margin: 20px 0 !important;
          overflow: hidden !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 2}px ${parseInt(intensity.shadowSize) * 3}px rgba(0, 0, 0, 0.4),
                      0 0 12px rgba(${hexToRgb(theme.primary)}, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
          position: relative !important;
          will-change: border-color, box-shadow;
          transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        /* Hover effect on outer wrapper */
        message-content .code-block:hover,
        model-response .code-block:hover,
        .response-content .code-block:hover,
        .markdown-main-panel .code-block:hover {
          border-color: ${theme.primary} !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 4}px rgba(0, 0, 0, 0.4),
                      0 0 20px rgba(${hexToRgb(theme.primary)}, 0.35),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
        }


        /* Reset the inner pre element and internal containers inside Gemini code blocks */
        message-content .code-block pre,
        model-response .code-block pre,
        .response-content .code-block pre,
        .markdown-main-panel .code-block pre,
        .model-response-text .code-block pre,
        message-content .formatted-code-block-internal-container,
        model-response .formatted-code-block-internal-container,
        .response-content .formatted-code-block-internal-container,
        .markdown-main-panel .formatted-code-block-internal-container {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          margin: 0 !important;
          padding: 0 !important;
          transform: none !important;
        }

        /* Hide the injected CODE header inside Gemini code blocks */
        message-content .code-block pre::before,
        model-response .code-block pre::before,
        .response-content .code-block pre::before,
        .markdown-main-panel .code-block pre::before {
          display: none !important;
          content: none !important;
        }

        /* Reset pre code inside Gemini code blocks */
        message-content .code-block pre code,
        model-response .code-block pre code,
        .response-content .code-block pre code,
        .markdown-main-panel .code-block pre code {
          background: transparent !important;
          border: none !important;
          padding: 20px !important;
          display: block !important;
          overflow-x: auto !important;
        }

        /* Adjust Gemini code block header padding to align with code text and prevent border touching */
        message-content .code-block-header,
        model-response .code-block-header,
        .markdown-main-panel .code-block-header,
        .formatted-code-block-internal-container > div:first-child {
          padding: 12px 20px !important;
          box-sizing: border-box !important;
        }


        /* Target inline code only, avoiding code blocks inside pre tags */
        message-content code:not(pre code),
        model-response code:not(pre code),
        .response-content code:not(pre code),
        .markdown-main-panel code:not(pre code),
        .model-response-text code:not(pre code) {
          background: rgba(${hexToRgb(theme.primary)}, 0.15) !important;
          color: ${theme.primaryLight} !important;
          padding: 3px 8px !important;
          border-radius: 5px !important;
          font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
          font-size: 0.9em !important;
          border: 1px solid ${theme.border} !important;
        }
      `;
    }
  }

  // ----------------------------------------------------------
  // BLOCKQUOTES
  // ----------------------------------------------------------
  if (settings.elements.quotes) {
    css += `
      ${sel.blockquotes} {
        color: inherit !important;
        background: ${theme.gradientSubtle} !important;
        border: none !important;
        border-left: 4px solid ${theme.primary} !important;
        border-radius: 0 ${intensity.borderRadius} ${intensity.borderRadius} 0 !important;
        padding: 18px 22px !important;
        margin: 16px 0 !important;
        font-style: italic !important;
        box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
        will-change: transform, box-shadow;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      ${sel.blockquotes}::before,
      ${sel.blockquotes}::after {
        display: none !important;
        content: none !important;
      }

      ${sel.blockquotes}:hover {
        transform: ${intensity.transform} !important;
        border-color: ${theme.primaryLight} !important;
        box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
      }

      ${sel.blockquotes} p {
        margin: 0 !important;
      }
    `;

    if (isGemini) {
      css += `
        message-content blockquote,
        model-response blockquote,
        .response-content blockquote,
        .markdown-main-panel blockquote,
        .model-response-text blockquote {
          color: inherit !important;
          background: ${theme.gradientSubtle} !important;
          border: none !important;
          border-left: 4px solid ${theme.primary} !important;
          border-radius: 0 ${intensity.borderRadius} ${intensity.borderRadius} 0 !important;
          padding: 18px 22px !important;
          margin: 16px 0 !important;
          font-style: italic !important;
          box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
          will-change: transform, box-shadow;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          display: block !important;
          visibility: visible !important;
        }

        message-content blockquote:hover,
        model-response blockquote:hover,
        .response-content blockquote:hover,
        .markdown-main-panel blockquote:hover {
          transform: ${intensity.transform} !important;
          border-color: ${theme.primaryLight} !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
        }

        message-content blockquote p,
        model-response blockquote p,
        .response-content blockquote p,
        .markdown-main-panel blockquote p,
        .model-response-text blockquote p {
          display: block !important;
          visibility: visible !important;
          margin: 0 0 8px 0 !important;
          padding: 0 !important;
          color: inherit !important;
        }

        message-content blockquote p:last-child,
        model-response blockquote p:last-child,
        .response-content blockquote p:last-child,
        .markdown-main-panel blockquote p:last-child,
        .model-response-text blockquote p:last-child {
          margin-bottom: 0 !important;
        }

        message-content blockquote b,
        message-content blockquote strong,
        model-response blockquote b,
        model-response blockquote strong,
        .response-content blockquote b,
        .response-content blockquote strong,
        .markdown-main-panel blockquote b,
        .markdown-main-panel blockquote strong,
        .model-response-text blockquote b,
        .model-response-text blockquote strong {
          font-weight: 700 !important;
          display: inline !important;
          color: ${theme.primary} !important;
        }

        message-content blockquote *,
        model-response blockquote *,
        .response-content blockquote *,
        .markdown-main-panel blockquote *,
        .model-response-text blockquote * {
          visibility: visible !important;
        }
      `;
    }
  }

  // ----------------------------------------------------------
  // LINKS
  // ----------------------------------------------------------
  if (settings.elements.links) {
    css += `
      ${sel.links} {
        color: ${theme.primary} !important;
        text-decoration: none !important;
        position: relative !important;
        font-weight: 500 !important;
        transition: filter 0.2s ease !important;
        background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }

      ${sel.links}::after {
        content: '' !important;
        position: absolute !important;
        bottom: -2px !important;
        left: 0 !important;
        width: 0 !important;
        height: 2px !important;
        background: ${theme.gradient} !important;
        transition: width 0.3s ease !important;
        border-radius: 2px !important;
      }

      ${sel.links}:hover::after {
        width: 100% !important;
      }

      ${sel.links}:hover {
        filter: brightness(1.2) !important;
      }
    `;

    if (isGemini) {
      css += `
        message-content a,
        model-response a,
        .response-content a,
        .markdown-main-panel a,
        .model-response-text a {
          color: ${theme.primary} !important;
          text-decoration: none !important;
          position: relative !important;
          font-weight: 500 !important;
          transition: filter 0.2s ease !important;
          background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        message-content a::after,
        model-response a::after,
        .response-content a::after,
        .markdown-main-panel a::after {
          content: '' !important;
          position: absolute !important;
          bottom: -2px !important;
          left: 0 !important;
          width: 0 !important;
          height: 2px !important;
          background: ${theme.gradient} !important;
          transition: width 0.3s ease !important;
          border-radius: 2px !important;
        }

        message-content a:hover::after,
        model-response a:hover::after,
        .response-content a:hover::after,
        .markdown-main-panel a:hover::after {
          width: 100% !important;
        }

        message-content a:hover,
        model-response a:hover,
        .response-content a:hover,
        .markdown-main-panel a:hover {
          filter: brightness(1.2) !important;
        }
      `;
    }
  }

  // ----------------------------------------------------------
  // HEADINGS
  // ----------------------------------------------------------
  if (settings.elements.headings) {
    const excludeSR = ':not(.cdk-visually-hidden):not(.screen-reader-model-response-label)';
    css += `
      ${sel.headings},
      ${containerSelector} ${sel.content} h1${excludeSR},
      ${containerSelector} ${sel.content} h2${excludeSR},
      ${containerSelector} ${sel.content} h3${excludeSR},
      ${containerSelector} ${sel.content} h4${excludeSR},
      ${containerSelector} ${sel.content} h5${excludeSR},
      ${containerSelector} ${sel.content} h6${excludeSR} {
        color: ${theme.headingText} !important;
        background: ${theme.headingBg} !important;
        font-weight: 700 !important;
        line-height: 1.5 !important;
        margin: 20px 0 16px 0 !important;
        padding: 12px 18px !important;
        position: relative !important;
        display: block !important;
        width: fit-content !important;
        border-bottom: 3px solid ${theme.primary} !important;
        border-radius: ${intensity.borderRadius} !important;
        box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
        will-change: transform, box-shadow;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      ${sel.headings}:hover,
      ${containerSelector} ${sel.content} h1${excludeSR}:hover,
      ${containerSelector} ${sel.content} h2${excludeSR}:hover,
      ${containerSelector} ${sel.content} h3${excludeSR}:hover,
      ${containerSelector} ${sel.content} h4${excludeSR}:hover,
      ${containerSelector} ${sel.content} h5${excludeSR}:hover,
      ${containerSelector} ${sel.content} h6${excludeSR}:hover {
        transform: ${intensity.transform} !important;
        box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
        border-color: ${theme.primaryLight} !important;
      }

      .markdown h1, ${containerSelector} ${sel.content} h1 { font-size: 1.6em !important; }
      .markdown h2, ${containerSelector} ${sel.content} h2 { font-size: 1.4em !important; }
      .markdown h3, ${containerSelector} ${sel.content} h3 { font-size: 1.25em !important; }
      .markdown h4, .markdown h5, .markdown h6,
      ${containerSelector} ${sel.content} h4,
      ${containerSelector} ${sel.content} h5,
      ${containerSelector} ${sel.content} h6 {
        font-size: 1.15em !important;
      }
    `;

    if (isGemini) {
      css += `
        message-content h1${excludeSR},
        message-content h2${excludeSR},
        message-content h3${excludeSR},
        message-content h4${excludeSR},
        message-content h5${excludeSR},
        message-content h6${excludeSR},
        model-response h1${excludeSR},
        model-response h2${excludeSR},
        model-response h3${excludeSR},
        model-response h4${excludeSR},
        model-response h5${excludeSR},
        model-response h6${excludeSR},
        .response-content h1${excludeSR},
        .response-content h2${excludeSR},
        .response-content h3${excludeSR},
        .response-content h4${excludeSR},
        .response-content h5${excludeSR},
        .response-content h6${excludeSR},
        .markdown-main-panel h1${excludeSR},
        .markdown-main-panel h2${excludeSR},
        .markdown-main-panel h3${excludeSR},
        .markdown-main-panel h4${excludeSR},
        .markdown-main-panel h5${excludeSR},
        .markdown-main-panel h6${excludeSR},
        .model-response-text h1${excludeSR},
        .model-response-text h2${excludeSR},
        .model-response-text h3${excludeSR},
        .model-response-text h4${excludeSR},
        .model-response-text h5${excludeSR},
        .model-response-text h6${excludeSR} {
          color: ${theme.headingText} !important;
          background: ${theme.headingBg} !important;
          font-weight: 700 !important;
          line-height: 1.5 !important;
          margin: 20px 0 16px 0 !important;
          padding: 12px 18px !important;
          position: relative !important;
          display: block !important;
          width: fit-content !important;
          border-bottom: 3px solid ${theme.primary} !important;
          border-radius: ${intensity.borderRadius} !important;
          box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
          will-change: transform, box-shadow;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        message-content h1${excludeSR}:hover,
        message-content h2${excludeSR}:hover,
        message-content h3${excludeSR}:hover,
        model-response h1${excludeSR}:hover,
        model-response h2${excludeSR}:hover,
        model-response h3${excludeSR}:hover,
        .response-content h1${excludeSR}:hover,
        .response-content h2${excludeSR}:hover,
        .response-content h3${excludeSR}:hover,
        .markdown-main-panel h1${excludeSR}:hover,
        .markdown-main-panel h2${excludeSR}:hover,
        .markdown-main-panel h3${excludeSR}:hover {
          transform: ${intensity.transform} !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
          border-color: ${theme.primaryLight} !important;
        }

        message-content h1, model-response h1, .response-content h1, .markdown-main-panel h1 { font-size: 1.6em !important; }
        message-content h2, model-response h2, .response-content h2, .markdown-main-panel h2 { font-size: 1.4em !important; }
        message-content h3, model-response h3, .response-content h3, .markdown-main-panel h3 { font-size: 1.25em !important; }
        message-content h4, message-content h5, message-content h6,
        model-response h4, model-response h5, model-response h6,
        .response-content h4, .response-content h5, .response-content h6,
        .markdown-main-panel h4, .markdown-main-panel h5, .markdown-main-panel h6 {
          font-size: 1.15em !important;
        }
      `;
    }
  }

  // ----------------------------------------------------------
  // MATH FORMULAS (KaTeX / MathJax)
  // ----------------------------------------------------------
  if (settings.elements.formulas) {
    css += `
      .katex-display,
      .MathJax_Display,
      .mjx-container[jax="CHTML"][display="true"],
      mjx-container[display="true"] {
        background: ${theme.gradientSubtle} !important;
        border: ${intensity.borderWidth} solid ${theme.border} !important;
        border-left: 4px solid ${theme.primary} !important;
        border-right: 4px solid ${theme.primary} !important;
        border-radius: ${intensity.borderRadius} !important;
        padding: 20px 24px !important;
        margin: 20px 0 !important;
        overflow-x: auto !important;
        box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
        will-change: transform, box-shadow;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      .katex-display:hover,
      .MathJax_Display:hover,
      .mjx-container[jax="CHTML"][display="true"]:hover,
      mjx-container[display="true"]:hover {
        transform: ${intensity.transform} !important;
        border-color: ${theme.primaryLight} !important;
        border-left-color: ${theme.primaryLight} !important;
        border-right-color: ${theme.primaryLight} !important;
        box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
      }

      .katex-display > .katex,
      .katex-display .katex-html,
      .MathJax_Display > .MathJax,
      .mjx-container[display="true"] > mjx-math,
      mjx-container[display="true"] > mjx-math {
        background: none !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
      }

      .katex,
      .katex *,
      .MathJax,
      .MathJax *,
      mjx-container,
      mjx-container * {
        color: inherit !important;
      }

      .katex:not(.katex-display .katex),
      span.MathJax:not(.MathJax_Display .MathJax),
      mjx-container:not([display="true"]):not([display="true"] mjx-container) {
        background: rgba(${hexToRgb(theme.primary)}, 0.1) !important;
        padding: 2px 6px !important;
        border-radius: 4px !important;
        border: 1px solid ${theme.border} !important;
      }
    `;

    if (isGemini) {
      css += `
        message-content .katex-display,
        message-content .MathJax_Display,
        model-response .katex-display,
        model-response .MathJax_Display,
        .response-content .katex-display,
        .response-content .MathJax_Display,
        .markdown-main-panel .katex-display,
        .markdown-main-panel .MathJax_Display {
          background: ${theme.gradientSubtle} !important;
          border: ${intensity.borderWidth} solid ${theme.border} !important;
          border-left: 4px solid ${theme.primary} !important;
          border-right: 4px solid ${theme.primary} !important;
          border-radius: ${intensity.borderRadius} !important;
          padding: 20px 24px !important;
          margin: 20px 0 !important;
          overflow-x: auto !important;
          box-shadow: 0 ${intensity.shadowSize} ${parseInt(intensity.shadowSize) * 2}px ${theme.glow} !important;
          will-change: transform, box-shadow;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        }

        message-content .katex-display:hover,
        model-response .katex-display:hover,
        .response-content .katex-display:hover,
        .markdown-main-panel .katex-display:hover {
          transform: ${intensity.transform} !important;
          border-color: ${theme.primaryLight} !important;
          border-left-color: ${theme.primaryLight} !important;
          border-right-color: ${theme.primaryLight} !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
        }
      `;
    }
  }

  return css;
}
