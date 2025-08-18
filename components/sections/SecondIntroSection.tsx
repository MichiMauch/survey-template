'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function SecondIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Stats Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] order-2 lg:order-1 rounded-3xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#3363D3' }}
          >
            <Image
              src="/stats.webp"
              alt="Digitalisierungsstatistiken"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Erkenntnisse & Mehrwert
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Profitieren Sie von
              <span className="block font-normal bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-normal">
                wertvollen Insights
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Als Teilnehmende erhalten Sie nach Abschluss der Studie einen 
                <span className="font-semibold text-indigo-600"> exklusiven Ergebnisbericht</span> mit 
                detaillierten Auswertungen und Handlungsempfehlungen.
              </p>
              
              <p>
                Vergleichen Sie Ihren Verband mit anderen und identifizieren Sie 
                <span className="font-semibold text-blue-600"> Optimierungspotenziale</span> in 
                Ihrer digitalen Strategie.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-400 p-6 rounded-r-xl">
                <p className="text-purple-800 font-medium">
                  Nutzen Sie die Chance, von <span className="font-bold">Best Practices</span> anderer 
                  Verbände zu lernen und Ihre digitale Transformation voranzutreiben.
                </p>
              </div>

              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Individueller Benchmark-Report für Ihren Verband</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Konkrete Handlungsempfehlungen von Experten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Zugang zu einem exklusiven Webinar mit Studienergebnissen</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}