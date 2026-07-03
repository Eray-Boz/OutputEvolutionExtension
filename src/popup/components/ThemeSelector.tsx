import React from 'react';
import { ThemeName } from '../../common/types';
import { VALID_THEMES } from '../../common/constants';

interface ThemeSelectorProps {
  activeTheme: ThemeName;
  onChange: (theme: ThemeName) => void;
}

// Maps theme names to their gradient styling inside the selector
const THEME_PREVIEWS: Record<ThemeName, string> = {
  blue: 'bg-gradient-to-br from-[#3B82F6] to-[#6366F1]',
  green: 'bg-gradient-to-br from-[#22C55E] to-[#10B981]',
  red: 'bg-gradient-to-br from-[#DC2626] to-[#991B1B]',
  yellow: 'bg-gradient-to-br from-[#EAB308] to-[#FACC15]',
  turquoise: 'bg-gradient-to-br from-[#14B8A6] to-[#06B6D4]',
  navy: 'bg-gradient-to-br from-[#1E40AF] to-[#2563EB]',
  orange: 'bg-gradient-to-br from-[#F97316] to-[#FB923C]',
  pink: 'bg-gradient-to-br from-[#DB2777] to-[#9D174D]',
  purple: 'bg-gradient-to-br from-[#A855F7] to-[#C084FC]',
  brown: 'bg-gradient-to-br from-[#92400E] to-[#B45309]'
};

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ activeTheme, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
        Theme
      </h3>
      <div className="grid grid-cols-5 gap-1.5">
        {VALID_THEMES.map((theme) => {
          const isActive = theme === activeTheme;
          return (
            <button
              key={theme}
              type="button"
              title={theme.charAt(0).toUpperCase() + theme.slice(1)}
              onClick={() => onChange(theme)}
              className={`flex items-center justify-center p-1.5 bg-bg-secondary rounded-[6px] cursor-pointer border-2 transition-all duration-200 hover:scale-105 ${
                isActive
                  ? 'border-brand-primary bg-[#6366F1]/15 shadow-[0_0_8px_rgba(99,102,241,0.4)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-7 h-7 rounded-[4px] shadow-sm ${THEME_PREVIEWS[theme]}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
