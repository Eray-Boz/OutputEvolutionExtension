import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center justify-between p-2.5 bg-bg-secondary rounded-[10px] border border-white/10 hover:border-white/20 hover:bg-bg-tertiary transition-all duration-200">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-gray-100">Enable Styling</span>
        <span className="text-[11px] text-gray-500">Beautify ChatGPT & Gemini outputs</span>
      </div>
      <label className="relative w-12 h-[26px] cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <span className="absolute inset-0 bg-bg-tertiary rounded-full transition-all duration-200 border border-white/10 peer-checked:bg-gradient-to-r peer-checked:from-brand-primary peer-checked:to-brand-secondary peer-checked:border-brand-primary after:content-[''] after:absolute after:h-5 after:w-5 after:left-[2px] after:bottom-[2px] after:bg-gray-400 after:rounded-full after:transition-all peer-checked:after:translate-x-[22px] peer-checked:after:bg-white peer-checked:after:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"></span>
      </label>
    </div>
  );
};
