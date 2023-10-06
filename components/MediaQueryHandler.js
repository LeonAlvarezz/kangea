// components/MediaQueryHandler.js
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

export default function MediaQueryHandler() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width:800px)');
    setMatches(mediaQuery.matches);

    const listener = (e) => setMatches(e.matches);
    mediaQuery.addEventListener('change', listener);

    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  return null; // This component doesn't render anything; it handles the media query logic.
}
