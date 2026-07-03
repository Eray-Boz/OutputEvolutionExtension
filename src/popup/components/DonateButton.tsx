import React from 'react';

export const DonateButton: React.FC = () => {
  return (
    <div className="text-center select-none">
      <p className="text-[11px] text-gray-400 mb-2.5 leading-relaxed">
        If you like this extension, feel free to support it with a donation ☕
      </p>
      <a
        href="https://buymeacoffee.com/erayboz"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full flex items-center justify-center gap-2 p-2.5 bg-gradient-to-br from-[#FFDD00] to-[#FFC107] hover:from-[#FFE135] hover:to-[#FFD54F] border-0 rounded-[10px] text-black text-xs font-semibold shadow-[0_4px_15px_rgba(255,193,7,0.3)] hover:shadow-[0_6px_20px_rgba(255,193,7,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 decoration-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:scale-110 transition-transform duration-200"
        >
          <path
            d="M2 8.5H14.5C15.163 8.5 15.799 8.763 16.268 9.232C16.737 9.701 17 10.337 17 11V11.5C17 12.163 16.737 12.799 16.268 13.268C15.799 13.737 15.163 14 14.5 14H2V8.5Z"
            fill="#FFDD00"
          />
          <path
            d="M17 11V11.5C17 12.163 16.737 12.799 16.268 13.268C15.799 13.737 15.163 14 14.5 14H2V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H12C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19V14"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 11.5V9.5C17 8.96957 17.2107 8.46086 17.5858 8.08579C17.9609 7.71071 18.4696 7.5 19 7.5H20C20.5304 7.5 21.0391 7.71071 21.4142 8.08579C21.7893 8.46086 22 8.96957 22 9.5V10.5C22 11.0304 21.7893 11.5391 21.4142 11.9142C21.0391 12.2893 20.5304 12.5 20 12.5H17"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 8.5V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H12C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V8.5"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4V3M10 4V3"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span>Buy Me a Coffee</span>
      </a>
    </div>
  );
};
