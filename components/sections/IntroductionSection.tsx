'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network } from 'lucide-react';
import Image from 'next/image';

export default function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Diagonal background split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 transform -skew-y-1 origin-top-left" style={{ clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0% 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              Digitale Transformation
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Die Verbandswelt im 
              <span className="block font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-normal">
                digitalen Wandel
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Die Digitalisierung verändert auch die Verbandswelt – von der internen Organisation über die 
                <span className="font-semibold text-blue-600"> Mitgliederkommunikation</span> bis hin zur 
                <span className="font-semibold text-blue-600"> politischen Einflussnahme</span>.
              </p>
              
              <p>
                Mit dieser kurzen Umfrage möchten wir ein aktuelles <strong>Stimmungsbild</strong> einfangen: 
                Wie weit ist die digitale Transformation in Verbänden bereits fortgeschritten?
              </p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-400 p-6 rounded-r-xl">
                <p className="text-indigo-800 font-medium">
                  Welche Rolle spielt <span className="font-bold">Künstliche Intelligenz</span> heute in Ihrem Verband?
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Schweiz Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#2D62CD' }}
          >
            <Image
              src="/schweiz.webp"
              alt="Digitale Transformation Schweiz"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}