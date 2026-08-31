import React from 'react';

interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  label = 'Live Project',
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block rounded-full
        border-2 border-accent
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        text-accent font-medium uppercase tracking-widest
        transition-all duration-200
        hover:bg-accent/10
        ${className}
      `}
    >
      {label}
    </a>
  );
};

export default LiveProjectButton;
