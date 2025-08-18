'use client';

import { motion } from 'framer-motion';
import { LinkButton } from './Button';
import { ArrowRight } from 'lucide-react';

interface MobileBottomBarProps {
  isVisible: boolean;
}

export default function MobileBottomBar({ isVisible }: MobileBottomBarProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.4, 
        ease: "easeInOut",
        delay: 0.5 // Slight delay for better UX
      }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200/30 shadow-xl"
    >
      <div className="px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center justify-between">
          
          {/* Info Text */}
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium text-gray-900">
              Schweizweite Umfrage
            </p>
            <p className="text-xs text-gray-600">
              Nur 5 Minuten • Komplett anonym
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <LinkButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJIuOcT27Vtv70hKekV-c4wDXh9ouRb58E6j156fZsVD0WKA/viewform?usp=dialog"
              variant="primary"
              size="default"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-6 py-3"
            >
              <span className="flex items-center gap-2">
                Teilnehmen
                <ArrowRight className="w-4 h-4" />
              </span>
            </LinkButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}