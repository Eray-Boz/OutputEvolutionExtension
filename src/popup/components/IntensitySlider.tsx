import React from 'react';

interface IntensitySliderProps {
  value: 1 | 2 | 3;
  onChange: (value: 1 | 2 | 3) => void;
}

export const IntensitySlider: React.FC<IntensitySliderProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10) as 1 | 2 | 3;
    onChange(val);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
        Style Intensity
      </h3>
      <div className="px-1">
        <input
          type="range"
          min="1"
          max="3"
          value={value}
          onChange={handleChange}
          className="w-full h-[6px] bg-bg-tertiary rounded-[3px] appearance-none outline-none mb-2 cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gradient-to-r
            [&::-webkit-slider-thumb]:from-brand-primary
            [&::-webkit-slider-thumb]:to-brand-secondary
            [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(99,102,241,0.4)]
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-gradient-to-r
            [&::-moz-range-thumb]:from-brand-primary
            [&::-moz-range-thumb]:to-brand-secondary
            [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(99,102,241,0.4)]"
        />
        <div className="flex justify-between text-[11px] text-gray-500 font-medium select-none">
          <span>Subtle</span>
          <span>Balanced</span>
          <span>Bold</span>
        </div>
      </div>
    </div>
  );
};
