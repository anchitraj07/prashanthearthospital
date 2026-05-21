'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string; // Image source (optional)
  iconName?: string; // Icon name when no image
  size?: number; // Size for icon/image
  className?: string; // Additional classes
  onClick?: () => void; // Click handler
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/Logo.png',
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}: AppLogoProps) {
  // Memoize className calculation
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {/* Show image if src provided, otherwise show icon */}
      <div className="relative group/logo">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {src ? (
            <AppImage
              src={src}
              alt="Logo"
              width={size}
              height={size}
              className="flex-shrink-0 transition-transform duration-500 group-hover/logo:scale-110"
              priority={true}
              unoptimized={src.endsWith('.svg')}
            />
          ) : (
            <AppIcon name={iconName} size={size} className="flex-shrink-0" />
          )}
        </div>
      </div>
    </div>
  );
});

export default AppLogo;
