'use client';

import { motion } from 'framer-motion';
import { LinkButton } from './Button';

interface StickyHeaderProps {
  isVisible: boolean;
}

export default function StickyHeader({ isVisible }: StickyHeaderProps) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">
              Digitalisierung & KI
            </span>
            <span className="ml-2 text-sm text-blue-600 font-medium">
              Schweiz 2025
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <LinkButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJIuOcT27Vtv70hKekV-c4wDXh9ouRb58E6j156fZsVD0WKA/viewform?usp=dialog"
              variant="primary"
              size="default"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Jetzt teilnehmen
            </LinkButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}