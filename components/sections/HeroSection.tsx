'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import HeroBackground from '@/components/ui/HeroBackground';
import HandDrawnUnderline from '@/components/ui/HandDrawnUnderline';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[75vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <HeroBackground />
      </div>
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8 lg:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8 shadow-lg border border-blue-100"
          >
            <Sparkles className="w-4 h-4" />
            Schweizweite Digitalisierungsstudie 2025
            <TrendingUp className="w-4 h-4" />
          </motion.div>

          {/* Main headline with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative mb-8"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 tracking-tight">
              Wie <span className="relative inline-block font-normal text-blue-600">
                digital
                <div className="absolute inset-0 text-amber-500">
                  <HandDrawnUnderline />
                </div>
              </span>
              <br />
              ist Ihr Verband?
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Nehmen Sie jetzt an der schweizweiten Umfrage zu 
            <span className="text-blue-600 font-medium"> Digitalisierung und Künstlicher Intelligenz</span> in Verbänden teil –
            <span className="block mt-2">in nur 5 Minuten.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <LinkButton 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJIuOcT27Vtv70hKekV-c4wDXh9ouRb58E6j156fZsVD0WKA/viewform?usp=dialog" 
              variant="primary" 
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              className="group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-12 py-4 text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <span className="flex items-center gap-2">
                Jetzt teilnehmen
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </span>
            </LinkButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}