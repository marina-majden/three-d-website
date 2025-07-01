import { useState, useEffect } from 'react';

export const useViewportSize = () => {
  const [dimensions, setDimensions] = useState({
    isSmall: false,
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setDimensions({
        isSmall: width <= 440,
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
};