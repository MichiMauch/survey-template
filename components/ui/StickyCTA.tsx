'use client';

import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import StickyHeader from './StickyHeader';
import MobileBottomBar from './MobileBottomBar';

export default function StickyCTA() {
  const { scrollY } = useScrollPosition();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration and responsive detection
  useEffect(() => {
    setIsClient(true);
    
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Don't render anything on server or during hydration
  if (!isClient) {
    return null;
  }

  const shouldShowDesktopHeader = !isMobile && scrollY > 500;
  const shouldShowMobileBottomBar = isMobile;

  return (
    <>
      {/* Desktop Sticky Header */}
      <StickyHeader isVisible={shouldShowDesktopHeader} />
      
      {/* Mobile Bottom Bar */}
      <MobileBottomBar isVisible={shouldShowMobileBottomBar} />
    </>
  );
}