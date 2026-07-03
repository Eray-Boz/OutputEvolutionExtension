import { ThemeName, ThemeConfig, IntensityConfig, Settings } from './types';

export const THEMES: Record<ThemeName, ThemeConfig> = {
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
    primary: '#DC2626',
    primaryLight: '#EF4444',
    secondary: '#991B1B',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
    gradientSubtle: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(153, 27, 27, 0.08) 100%)',
    border: 'rgba(220, 38, 38, 0.25)',
    glow: 'rgba(220, 38, 38, 0.15)',
    headingBg: 'rgba(220, 38, 38, 0.15)',
    headingText: '#DC2626',
    tableHeaderBg: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
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
    primary: '#DB2777',
    primaryLight: '#EC4899',
    secondary: '#9D174D',
    gradient: 'linear-gradient(135deg, #DB2777 0%, #9D174D 100%)',
    gradientSubtle: 'linear-gradient(135deg, rgba(219, 39, 119, 0.08) 0%, rgba(157, 23, 77, 0.08) 100%)',
    border: 'rgba(219, 39, 119, 0.25)',
    glow: 'rgba(219, 39, 119, 0.15)',
    headingBg: 'rgba(219, 39, 119, 0.15)',
    headingText: '#DB2777',
    tableHeaderBg: 'linear-gradient(135deg, #DB2777 0%, #9D174D 100%)',
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

export const INTENSITY: Record<1 | 2 | 3, IntensityConfig> = {
  1: { borderWidth: '1px', shadowSize: '4px', borderRadius: '8px', transform: 'none' },
  2: { borderWidth: '2px', shadowSize: '8px', borderRadius: '16px', transform: 'translateY(-1px)' },
  3: { borderWidth: '3px', shadowSize: '12px', borderRadius: '24px', transform: 'translateY(-2px)' }
};

export const DEFAULT_SETTINGS: Settings = {
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

export const VALID_THEMES: ThemeName[] = [
  'blue',
  'yellow',
  'red',
  'green',
  'orange',
  'purple',
  'turquoise',
  'navy',
  'pink',
  'brown'
];
