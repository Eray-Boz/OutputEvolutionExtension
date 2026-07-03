export type ThemeName =
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'turquoise'
  | 'navy'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'brown';

export interface ElementSettings {
  lists: boolean;
  tables: boolean;
  code: boolean;
  quotes: boolean;
  links: boolean;
  headings: boolean;
  formulas: boolean;
}

export interface Settings {
  enabled: boolean;
  theme: ThemeName;
  intensity: 1 | 2 | 3;
  elements: ElementSettings;
}

export interface ThemeConfig {
  primary: string;
  primaryLight: string;
  secondary: string;
  gradient: string;
  gradientSubtle: string;
  border: string;
  glow: string;
  headingBg: string;
  headingText: string;
  tableHeaderBg: string;
  tableHeaderText: string;
}

export interface IntensityConfig {
  borderWidth: string;
  shadowSize: string;
  borderRadius: string;
  transform: string;
}
