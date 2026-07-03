export type PlatformType = 'chatgpt' | 'gemini';

export interface PlatformSelectors {
  container: string;
  content: string;
  lists: string;
  tables: string;
  code: string;
  blockquotes: string;
  links: string;
  headings: string;
}

export interface PlatformConfig {
  hostPatterns: string[];
  selectors: PlatformSelectors;
}

export const PLATFORMS: Record<PlatformType, PlatformConfig> = {
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
      headings: '.markdown-main-panel h1:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), .markdown-main-panel h2:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), .markdown-main-panel h3:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), .markdown-main-panel h4:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), .markdown-main-panel h5:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), .markdown-main-panel h6:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), message-content h1:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), message-content h2:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), message-content h3:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), message-content h4:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), message-content h5:not(.cdk-visually-hidden):not(.screen-reader-model-response-label), message-content h6:not(.cdk-visually-hidden):not(.screen-reader-model-response-label)'
    }
  }
};

/**
 * Detects the current platform based on hostname.
 */
export function detectPlatform(): PlatformType {
  const hostname = window.location.hostname;

  for (const [platform, config] of Object.entries(PLATFORMS)) {
    if (config.hostPatterns.some(pattern => hostname.includes(pattern))) {
      return platform as PlatformType;
    }
  }

  return 'chatgpt';
}

/**
 * Returns CSS selectors for the current platform.
 */
export function getSelectors(): PlatformSelectors {
  const platform = detectPlatform();
  return PLATFORMS[platform]?.selectors || PLATFORMS.chatgpt.selectors;
}
