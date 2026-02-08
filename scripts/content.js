/**
 * OutputEvolution - Content Style Injector
 * Transforms AI chat outputs into beautifully styled, premium-looking content.
 *
 * @version 1.0.1
 * @author Eray Boz
 * @license MIT
 */

(function () {
  'use strict';

  // ============================================================
  // THEME CONFIGURATION
  // ============================================================

  /**
   * Available color themes with gradient palettes.
   * Each theme defines primary/secondary colors, gradients, borders,
   * glows, heading styles, and table header styles.
   */
  const THEMES = {
    blue: {
      primary: '#3B82F6',
      primaryLight: '#60A5FA',
      secondary: '#6366F1',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
      border: 'rgba(59, 130, 246, 0.25)',
      glow: 'rgba(59, 130, 246, 0.15)',
      headingBg: 'rgba(59, 130, 246, 0.15)',
      headingText: '#3B82F6',
      tableHeaderBg: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
      tableHeaderText: '#FFFFFF'
    },
    green: {
      primary: '#22C55E',
      primaryLight: '#4ADE80',
      secondary: '#10B981',
      gradient: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
      border: 'rgba(34, 197, 94, 0.25)',
      glow: 'rgba(34, 197, 94, 0.15)',
      headingBg: 'rgba(34, 197, 94, 0.15)',
      headingText: '#22C55E',
      tableHeaderBg: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
      tableHeaderText: '#000000'
    },
    red: {
      primary: '#EF4444',
      primaryLight: '#F87171',
      secondary: '#F87171',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(248, 113, 113, 0.08) 100%)',
      border: 'rgba(239, 68, 68, 0.25)',
      glow: 'rgba(239, 68, 68, 0.15)',
      headingBg: 'rgba(239, 68, 68, 0.15)',
      headingText: '#EF4444',
      tableHeaderBg: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
      tableHeaderText: '#FFFFFF'
    },
    yellow: {
      primary: '#EAB308',
      primaryLight: '#FDE047',
      secondary: '#FACC15',
      gradient: 'linear-gradient(135deg, #EAB308 0%, #FACC15 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(250, 204, 21, 0.08) 100%)',
      border: 'rgba(234, 179, 8, 0.25)',
      glow: 'rgba(234, 179, 8, 0.15)',
      headingBg: 'rgba(234, 179, 8, 0.15)',
      headingText: '#EAB308',
      tableHeaderBg: 'linear-gradient(135deg, #EAB308 0%, #FACC15 100%)',
      tableHeaderText: '#000000'
    },
    turquoise: {
      primary: '#14B8A6',
      primaryLight: '#2DD4BF',
      secondary: '#06B6D4',
      gradient: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
      border: 'rgba(20, 184, 166, 0.25)',
      glow: 'rgba(20, 184, 166, 0.15)',
      headingBg: 'rgba(20, 184, 166, 0.15)',
      headingText: '#14B8A6',
      tableHeaderBg: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
      tableHeaderText: '#000000'
    },
    navy: {
      primary: '#1E40AF',
      primaryLight: '#3B82F6',
      secondary: '#2563EB',
      gradient: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
      border: 'rgba(30, 64, 175, 0.25)',
      glow: 'rgba(30, 64, 175, 0.15)',
      headingBg: 'rgba(30, 64, 175, 0.15)',
      headingText: '#1E40AF',
      tableHeaderBg: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
      tableHeaderText: '#FFFFFF'
    },
    orange: {
      primary: '#F97316',
      primaryLight: '#FB923C',
      secondary: '#FB923C',
      gradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(251, 146, 60, 0.08) 100%)',
      border: 'rgba(249, 115, 22, 0.25)',
      glow: 'rgba(249, 115, 22, 0.15)',
      headingBg: 'rgba(249, 115, 22, 0.15)',
      headingText: '#F97316',
      tableHeaderBg: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
      tableHeaderText: '#000000'
    },
    pink: {
      primary: '#EC4899',
      primaryLight: '#F472B6',
      secondary: '#F472B6',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.08) 100%)',
      border: 'rgba(236, 72, 153, 0.25)',
      glow: 'rgba(236, 72, 153, 0.15)',
      headingBg: 'rgba(236, 72, 153, 0.15)',
      headingText: '#EC4899',
      tableHeaderBg: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
      tableHeaderText: '#FFFFFF'
    },
    purple: {
      primary: '#A855F7',
      primaryLight: '#C084FC',
      secondary: '#C084FC',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #C084FC 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(192, 132, 252, 0.08) 100%)',
      border: 'rgba(168, 85, 247, 0.25)',
      glow: 'rgba(168, 85, 247, 0.15)',
      headingBg: 'rgba(168, 85, 247, 0.15)',
      headingText: '#A855F7',
      tableHeaderBg: 'linear-gradient(135deg, #A855F7 0%, #C084FC 100%)',
      tableHeaderText: '#FFFFFF'
    },
    brown: {
      primary: '#92400E',
      primaryLight: '#B45309',
      secondary: '#B45309',
      gradient: 'linear-gradient(135deg, #92400E 0%, #B45309 100%)',
      gradientSubtle: 'linear-gradient(135deg, rgba(146, 64, 14, 0.08) 0%, rgba(180, 83, 9, 0.08) 100%)',
      border: 'rgba(146, 64, 14, 0.25)',
      glow: 'rgba(146, 64, 14, 0.15)',
      headingBg: 'rgba(146, 64, 14, 0.15)',
      headingText: '#92400E',
      tableHeaderBg: 'linear-gradient(135deg, #92400E 0%, #B45309 100%)',
      tableHeaderText: '#FFFFFF'
    }
  };

  /** Style intensity presets controlling border, shadow, and animation strength */
  const INTENSITY = {
    1: { borderWidth: '1px', shadowSize: '4px', borderRadius: '6px', transform: 'none' },
    2: { borderWidth: '2px', shadowSize: '8px', borderRadius: '10px', transform: 'translateY(-1px)' },
    3: { borderWidth: '3px', shadowSize: '12px', borderRadius: '14px', transform: 'translateY(-2px)' }
  };

  // ============================================================
  // PLATFORM DETECTION & SELECTORS
  // ============================================================

  /**
   * Supported platform configurations.
   * Each platform defines host patterns for detection and CSS selectors
   * for targeting AI response content areas.
   */
  const PLATFORMS = {
    chatgpt: {
      hostPatterns: ['chat.openai.com', 'chatgpt.com'],
      selectors: {
        container: '[data-message-author-role="assistant"]',
        content: '.markdown',
        lists: '.markdown ul, .markdown ol',
        tables: '.markdown table',
        code: '.markdown pre, .markdown code',
        blockquotes: '.markdown blockquote',
        links: '.markdown a',
        headings: '.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6'
      }
    },
    gemini: {
      hostPatterns: ['gemini.google.com'],
      selectors: {
        container: 'message-content',
        content: '.markdown-main-panel',
        lists: '.markdown-main-panel ul, .markdown-main-panel ol, message-content ul, message-content ol',
        tables: '.markdown-main-panel table, message-content table',
        code: '.markdown-main-panel pre, .markdown-main-panel code, message-content pre, message-content code',
        blockquotes: '.markdown-main-panel blockquote, message-content blockquote',
        links: '.markdown-main-panel a, message-content a',
        headings: '.markdown-main-panel h1, .markdown-main-panel h2, .markdown-main-panel h3, .markdown-main-panel h4, .markdown-main-panel h5, .markdown-main-panel h6, message-content h1, message-content h2, message-content h3, message-content h4, message-content h5, message-content h6'
      }
    }
  };

  /**
   * Detects the current platform based on hostname.
   * @returns {'chatgpt'|'gemini'} Platform identifier
   */
  function detectPlatform() {
    const hostname = window.location.hostname;

    for (const [platform, config] of Object.entries(PLATFORMS)) {
      if (config.hostPatterns.some(pattern => hostname.includes(pattern))) {
        return platform;
      }
    }

    return 'chatgpt';
  }

  /**
   * Returns CSS selectors for the current platform.
   * @returns {Object} Platform-specific CSS selectors
   */
  function getSelectors() {
    const platform = detectPlatform();
    return PLATFORMS[platform]?.selectors || PLATFORMS.chatgpt.selectors;
  }

  // ============================================================
  // DEFAULT SETTINGS
  // ============================================================

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

  // ============================================================
  // STATE MANAGEMENT
  // ============================================================

  let currentSettings = null;
  let styleElement = null;
  let observer = null;
  const SELECTORS = getSelectors();

  // ============================================================
  // UTILITY FUNCTIONS
  // ============================================================

  /**
   * Converts a hex color string to a comma-separated RGB triplet.
   * @param {string} hex - Hex color code (e.g. '#3B82F6')
   * @returns {string} RGB values (e.g. '59, 130, 246')
   */
  function hexToRgb(hex) {
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return match
      ? `${parseInt(match[1], 16)}, ${parseInt(match[2], 16)}, ${parseInt(match[3], 16)}`
      : '99, 102, 241';
  }

  // ============================================================
  // STYLE GENERATION
  // ============================================================

  /**
   * Generates the complete CSS stylesheet based on user settings.
   *
   * NOTE: Google Fonts (Quicksand, JetBrains Mono) are NOT loaded via
   * @import because target sites' Content Security Policy blocks external
   * stylesheets. Font references are kept with system-font fallbacks so
   * users with locally installed fonts still benefit.
   *
   * @param {Object} settings - User preferences
   * @returns {string} Complete CSS string
   */
  function generateStyles(settings) {
    if (!settings.enabled) return '';

    const theme = THEMES[settings.theme] || THEMES.blue;
    const intensity = INTENSITY[settings.intensity] || INTENSITY[2];
    const platform = detectPlatform();
    const sel = SELECTORS;
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
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
          transition: all 0.2s ease !important;
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          display: list-item !important;
        }

        ${sel.lists} li:last-child,
        ${containerSelector} ${sel.content} ul li:last-child,
        ${containerSelector} ${sel.content} ol li:last-child {
          border-bottom: none !important;
        }

        ${sel.lists} li:hover,
        ${containerSelector} ${sel.content} ul li:hover,
        ${containerSelector} ${sel.content} ol li:hover {
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
          /* Gemini: Additional list selectors for model-response content */
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            overflow-x: auto !important;
            overflow-y: visible !important;
            list-style-position: outside !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          model-response ul:hover,
          model-response ol:hover,
          .response-content ul:hover,
          .response-content ol:hover {
            transform: ${intensity.transform} !important;
            box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
            border-color: ${theme.primary} !important;
          }

          model-response li,
          .response-content li,
          .model-response-text li {
            color: inherit !important;
            padding: 8px 0 !important;
            margin: 0 !important;
            border-bottom: 1px solid ${theme.border} !important;
            position: relative !important;
            transition: all 0.2s ease !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            display: list-item !important;
          }

          model-response li:last-child,
          .response-content li:last-child,
          .model-response-text li:last-child {
            border-bottom: none !important;
          }

          model-response li:hover,
          .response-content li:hover {
            padding-left: 4px !important;
          }

          model-response li::marker,
          .response-content li::marker {
            color: ${theme.primary} !important;
            font-weight: 600 !important;
          }

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
          }

          /* Gemini: Prevent nested list double-styling */
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
          transition: all 0.2s ease !important;
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

      // Gemini-specific table selectors
      if (isGemini) {
        css += `
          /* Gemini: Additional table selectors */
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

          model-response thead,
          .response-content thead,
          .model-response-text thead {
            background: ${theme.tableHeaderBg} !important;
          }

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

          model-response td,
          .response-content td,
          .model-response-text td {
            color: inherit !important;
            padding: 14px 18px !important;
            border-bottom: 1px solid ${theme.border} !important;
            transition: all 0.2s ease !important;
          }

          model-response tr:last-child td,
          .response-content tr:last-child td {
            border-bottom: none !important;
          }

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
                      inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
          position: relative !important;
        }

        .markdown pre::before {
          content: 'CODE' !important;
          display: block !important;
          background: ${theme.gradient} !important;
          color: white !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          padding: 10px 20px !important;
          font-family: 'Quicksand', sans-serif !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          text-transform: uppercase !important;
        }

        .markdown pre code {
          background: transparent !important;
          padding: 20px !important;
          border: none !important;
          display: block !important;
          overflow-x: auto !important;
          color: inherit !important;
        }

        .markdown code {
          background: rgba(${hexToRgb(theme.primary)}, 0.15) !important;
          color: ${theme.primaryLight} !important;
          padding: 3px 8px !important;
          border-radius: 5px !important;
          font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
          font-size: 0.9em !important;
          border: 1px solid ${theme.border} !important;
        }
      `;

      // Gemini-specific code selectors
      if (isGemini) {
        css += `
          /* Gemini: Additional code block selectors */
          model-response pre,
          .response-content pre,
          .markdown-main-panel pre,
          .model-response-text pre {
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
                        inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
            position: relative !important;
          }

          model-response pre::before,
          .response-content pre::before,
          .markdown-main-panel pre::before {
            content: 'CODE' !important;
            display: block !important;
            background: ${theme.gradient} !important;
            color: white !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            letter-spacing: 0.1em !important;
            padding: 10px 20px !important;
            font-family: 'Quicksand', sans-serif !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            text-transform: uppercase !important;
          }

          model-response pre code,
          .response-content pre code,
          .markdown-main-panel pre code {
            background: transparent !important;
            padding: 20px !important;
            border: none !important;
            display: block !important;
            overflow-x: auto !important;
            color: inherit !important;
          }

          model-response code,
          .response-content code,
          .markdown-main-panel code,
          .model-response-text code {
            background: rgba(${hexToRgb(theme.primary)}, 0.15) !important;
            color: ${theme.primaryLight} !important;
            padding: 3px 8px !important;
            border-radius: 5px !important;
            font-family: 'JetBrains Mono', 'Fira Code', monospace !important;
            font-size: 0.9em !important;
            border: 1px solid ${theme.border} !important;
          }

          /* Reset inline code inside pre blocks */
          model-response pre code,
          .response-content pre code,
          .markdown-main-panel pre code {
            background: transparent !important;
            border: none !important;
            padding: 20px !important;
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
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

      // Gemini-specific blockquote selectors
      if (isGemini) {
        css += `
          /* Gemini: Additional blockquote selectors */
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            display: block !important;
            visibility: visible !important;
          }

          model-response blockquote:hover,
          .response-content blockquote:hover,
          .markdown-main-panel blockquote:hover {
            transform: ${intensity.transform} !important;
            border-color: ${theme.primaryLight} !important;
            box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
          }

          /* Gemini: Ensure blockquote content is visible */
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

          model-response blockquote p:last-child,
          .response-content blockquote p:last-child,
          .markdown-main-panel blockquote p:last-child,
          .model-response-text blockquote p:last-child {
            margin-bottom: 0 !important;
          }

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

          /* Ensure all blockquote text content is visible */
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
          transition: all 0.2s ease !important;
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

      // Gemini-specific link selectors
      if (isGemini) {
        css += `
          /* Gemini: Additional link selectors */
          model-response a,
          .response-content a,
          .markdown-main-panel a,
          .model-response-text a {
            color: ${theme.primary} !important;
            text-decoration: none !important;
            position: relative !important;
            font-weight: 500 !important;
            transition: all 0.2s ease !important;
            background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }

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

          model-response a:hover::after,
          .response-content a:hover::after,
          .markdown-main-panel a:hover::after {
            width: 100% !important;
          }

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
      css += `
        ${sel.headings},
        ${containerSelector} ${sel.content} h1,
        ${containerSelector} ${sel.content} h2,
        ${containerSelector} ${sel.content} h3,
        ${containerSelector} ${sel.content} h4,
        ${containerSelector} ${sel.content} h5,
        ${containerSelector} ${sel.content} h6 {
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        ${sel.headings}:hover,
        ${containerSelector} ${sel.content} h1:hover,
        ${containerSelector} ${sel.content} h2:hover,
        ${containerSelector} ${sel.content} h3:hover,
        ${containerSelector} ${sel.content} h4:hover,
        ${containerSelector} ${sel.content} h5:hover,
        ${containerSelector} ${sel.content} h6:hover {
          transform: ${intensity.transform} !important;
          box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
          border-color: ${theme.primaryLight} !important;
        }

        .markdown h1, ${containerSelector} ${sel.content} h1 {
          font-size: 1.6em !important;
        }

        .markdown h2, ${containerSelector} ${sel.content} h2 {
          font-size: 1.4em !important;
        }

        .markdown h3, ${containerSelector} ${sel.content} h3 {
          font-size: 1.25em !important;
        }

        .markdown h4, .markdown h5, .markdown h6,
        ${containerSelector} ${sel.content} h4,
        ${containerSelector} ${sel.content} h5,
        ${containerSelector} ${sel.content} h6 {
          font-size: 1.15em !important;
        }
      `;

      // Gemini-specific heading selectors
      if (isGemini) {
        css += `
          /* Gemini: Additional heading selectors */
          model-response h1,
          model-response h2,
          model-response h3,
          model-response h4,
          model-response h5,
          model-response h6,
          .response-content h1,
          .response-content h2,
          .response-content h3,
          .response-content h4,
          .response-content h5,
          .response-content h6,
          .markdown-main-panel h1,
          .markdown-main-panel h2,
          .markdown-main-panel h3,
          .markdown-main-panel h4,
          .markdown-main-panel h5,
          .markdown-main-panel h6,
          .model-response-text h1,
          .model-response-text h2,
          .model-response-text h3,
          .model-response-text h4,
          .model-response-text h5,
          .model-response-text h6 {
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }

          model-response h1:hover,
          model-response h2:hover,
          model-response h3:hover,
          .response-content h1:hover,
          .response-content h2:hover,
          .response-content h3:hover,
          .markdown-main-panel h1:hover,
          .markdown-main-panel h2:hover,
          .markdown-main-panel h3:hover {
            transform: ${intensity.transform} !important;
            box-shadow: 0 ${parseInt(intensity.shadowSize) + 4}px ${parseInt(intensity.shadowSize) * 3}px ${theme.glow} !important;
            border-color: ${theme.primaryLight} !important;
          }

          model-response h1,
          .response-content h1,
          .markdown-main-panel h1 {
            font-size: 1.6em !important;
          }

          model-response h2,
          .response-content h2,
          .markdown-main-panel h2 {
            font-size: 1.4em !important;
          }

          model-response h3,
          .response-content h3,
          .markdown-main-panel h3 {
            font-size: 1.25em !important;
          }

          model-response h4,
          model-response h5,
          model-response h6,
          .response-content h4,
          .response-content h5,
          .response-content h6,
          .markdown-main-panel h4,
          .markdown-main-panel h5,
          .markdown-main-panel h6 {
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
        /* Display (block) math formulas */
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
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

        /* Reset inner elements inside display math to prevent double box */
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

        /* Formula text color — inherits from parent for readability */
        .katex,
        .katex *,
        .MathJax,
        .MathJax *,
        mjx-container,
        mjx-container * {
          color: inherit !important;
        }

        /* Inline math formulas */
        .katex:not(.katex-display .katex),
        span.MathJax:not(.MathJax_Display .MathJax),
        mjx-container:not([display="true"]):not([display="true"] mjx-container) {
          background: rgba(${hexToRgb(theme.primary)}, 0.1) !important;
          padding: 2px 6px !important;
          border-radius: 4px !important;
          border: 1px solid ${theme.border} !important;
        }
      `;

      // Gemini-specific formula selectors
      if (isGemini) {
        css += `
          /* Gemini: Additional formula selectors */
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }

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

  // ============================================================
  // DOM MANIPULATION
  // ============================================================

  /**
   * Injects the generated stylesheet into the page.
   * Removes any previously injected stylesheet first.
   * @param {Object} settings - User preferences
   */
  function injectStyles(settings) {
    if (styleElement) {
      styleElement.remove();
    }

    const css = generateStyles(settings);
    if (!css) return;

    styleElement = document.createElement('style');
    styleElement.id = 'output-evolution-styles';
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }

  /**
   * Initializes a MutationObserver to re-inject styles when
   * dynamic content is added to the page (e.g. new AI responses).
   */
  function initializeObserver() {
    if (observer) {
      observer.disconnect();
    }

    observer = new MutationObserver(() => {
      if (currentSettings && currentSettings.enabled) {
        injectStyles(currentSettings);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // ============================================================
  // SETTINGS MANAGEMENT
  // ============================================================

  /**
   * Loads user settings from Chrome storage.
   * @returns {Promise<Object>} Resolved settings object
   */
  function loadSettings() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(['outputEvolutionSettings'], (result) => {
        resolve(result.outputEvolutionSettings || DEFAULT_SETTINGS);
      });
    });
  }

  // ============================================================
  // MESSAGE HANDLING
  // ============================================================

  /**
   * Listens for messages from the popup script to update styles
   * in real time when the user changes settings.
   */
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SETTINGS_UPDATED') {
      currentSettings = message.settings;
      injectStyles(currentSettings);
      sendResponse({ success: true });
    }
    return true;
  });

  // ============================================================
  // INITIALIZATION
  // ============================================================

  /**
   * Bootstraps the extension: loads settings, injects styles,
   * and starts the mutation observer.
   */
  async function init() {
    currentSettings = await loadSettings();
    injectStyles(currentSettings);
    initializeObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
