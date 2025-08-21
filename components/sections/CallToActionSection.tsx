'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, Zap, Shield } from 'lucide-react';

export default function CallToActionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#3363D3' }}>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
            Jetzt mitmachen und die <br />
            <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              digitale Zukunft
            </span> der Verbände <br />
            mitgestalten.
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ihre Stimme ist wichtig! Werden Sie Teil der grössten Digitalisierungsstudie 
            der Schweizer Verbandslandschaft.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <LinkButton 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJIuOcT27Vtv70hKekV-c4wDXh9ouRb58E6j156fZsVD0WKA/viewform?usp=dialog" 
              variant="primary" 
              size="xl"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-blue-500/25 px-16 py-6 text-2xl font-bold transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                Jetzt teilnehmen
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </LinkButton>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-blue-200 text-sm">100% Anonym</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3">
                <Zap className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-blue-200 text-sm">5 Min. Dauer</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}