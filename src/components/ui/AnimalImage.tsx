import React, { useState } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';

interface AnimalImageProps {
  src: string;
  alt: string;
  scientificName?: string;
  className?: string;
  fallbackClassName?: string;
}

/**
 * Image component with graceful SVG fallback.
 * If the local image file fails to load, displays a premium
 * taxonomic silhouette card with the species name.
 */
export const AnimalImage: React.FC<AnimalImageProps> = ({
  src,
  alt,
  scientificName,
  className = '',
  fallbackClassName = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-[#C89A3C]/30 ${fallbackClassName}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-24 h-24 opacity-40 text-emerald-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Generic animal silhouette */}
          <ellipse cx="100" cy="85" rx="55" ry="40" />
          <circle cx="75" cy="72" r="5" fill="currentColor" />
          {/* Ears */}
          <path d="M60 55 Q55 35 70 50" />
          <path d="M85 55 Q90 35 75 50" />
          {/* Body */}
          <ellipse cx="100" cy="130" rx="40" ry="25" />
          {/* Legs */}
          <line x1="70" y1="155" x2="65" y2="185" strokeWidth="3" strokeLinecap="round" />
          <line x1="85" y1="155" x2="82" y2="185" strokeWidth="3" strokeLinecap="round" />
          <line x1="115" y1="155" x2="118" y2="185" strokeWidth="3" strokeLinecap="round" />
          <line x1="130" y1="155" x2="135" y2="185" strokeWidth="3" strokeLinecap="round" />
          {/* Tail */}
          <path d="M140 130 Q160 120 155 100" strokeWidth="2" />
          {/* Medical cross */}
          <g transform="translate(160, 30)" stroke="#C89A3C" strokeWidth="2">
            <line x1="0" y1="-8" x2="0" y2="8" />
            <line x1="-8" y1="0" x2="8" y2="0" />
          </g>
        </svg>
        <p className="text-xs font-semibold text-slate-400 mt-2">{alt}</p>
        {scientificName && (
          <p className="text-[10px] italic text-[#C89A3C]/70">{scientificName}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={getAssetUrl(src)}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};
