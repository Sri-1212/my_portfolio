import React, { useId } from 'react';

interface GemIconProps {
  size?: number;
  className?: string;
}

export const GemIcon: React.FC<GemIconProps> = ({ size = 20, className = '' }) => {
  const rawId = useId();
  const id = `gemGrad-${rawId.replace(/:/g, '')}-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 transition-all duration-300 drop-shadow-[0_0_8px_rgba(201,167,255,0.4)] ${className}`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B4E0" />
          <stop offset="45%" stopColor="#FFD9EC" />
          <stop offset="100%" stopColor="#C9A7FF" />
        </linearGradient>
      </defs>

      {/* 5-6 Angular Low-Poly Gem Facets */}
      {/* Facet 1: Top-Left */}
      <polygon
        points="3,12 10,5 16,12"
        fill={`url(#${id})`}
        fillOpacity="0.88"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.45"
        strokeLinejoin="round"
      />
      {/* Facet 2: Top-Center Table Left */}
      <polygon
        points="10,5 16,5 16,12"
        fill={`url(#${id})`}
        fillOpacity="1.0"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.5"
        strokeLinejoin="round"
      />
      {/* Facet 3: Top-Center Table Right */}
      <polygon
        points="16,5 22,5 16,12"
        fill={`url(#${id})`}
        fillOpacity="0.82"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.4"
        strokeLinejoin="round"
      />
      {/* Facet 4: Top-Right */}
      <polygon
        points="22,5 29,12 16,12"
        fill={`url(#${id})`}
        fillOpacity="0.7"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.35"
        strokeLinejoin="round"
      />
      {/* Facet 5: Bottom-Left Pavilion */}
      <polygon
        points="3,12 16,12 16,28"
        fill={`url(#${id})`}
        fillOpacity="0.92"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.45"
        strokeLinejoin="round"
      />
      {/* Facet 6: Bottom-Right Pavilion */}
      <polygon
        points="16,12 29,12 16,28"
        fill={`url(#${id})`}
        fillOpacity="0.65"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.35"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GemIcon;
