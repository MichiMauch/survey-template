'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Shield, Mail, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Clock,
      title: "5 Minuten",
      description: "Kurze, fokussierte Fragen"
    },
    {
      icon: Shield,
      title: "Anonym",
      description: "Ihre Daten bleiben geschützt"
    },
    {
      icon: Mail,
      title: "Ergebnisse",
      description: "Optional per E-Mail erhalten"
    },
    {
      icon: CheckCircle,
      title: "Fertig",
      description: "Beitrag zur Digitalisierung"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Ablauf
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Die Teilnahme dauert ca. <span className="font-semibold text-blue-600">5 Minuten</span>. 
            Ihre Antworten bleiben <span className="font-semibold text-green-600">anonym</span> – 
            ausser Sie möchten die Resultate erhalten.
          </p>
        </motion.div>

        {/* Flowing timeline visualization */}
        <div className="relative">
          {/* Animated connection path */}
          <div className="absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2 hidden lg:block overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 origin-left rounded-full shadow-lg"
            />
            {/* Animated pulse dots */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={isInView ? { x: 'calc(100vw + 100%)' } : { x: '-100%' }}
              transition={{ duration: 3, delay: 1, repeat: Infinity }}
              className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-blue-400"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Step number with enhanced design */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="absolute -top-3 -left-3 w-10 h-10 bg-gray-100 text-gray-600 border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold z-20 shadow-lg group-hover:scale-110 transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1084C7';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = '#1084C7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.borderColor = '';
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 h-full text-center group relative overflow-hidden">
                    
                    {/* Icon with enhanced animation */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-gray-100 text-gray-600 rounded-3xl shadow-md group-hover:scale-105 transition-all duration-300"
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#1084C7';
                           e.currentTarget.style.color = 'white';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = '';
                           e.currentTarget.style.color = '';
                         }}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    {/* Content with improved typography */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="absolute bottom-4 left-8 right-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={isInView ? { width: '100%' } : { width: '0%' }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                        className="h-full bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Arrow connector for large screens */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 hidden lg:block z-10">
                      <motion.svg
                        initial={{ x: -10, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-800">
              <strong>Tipp:</strong> Am Ende der Umfrage haben Sie die Möglichkeit, Ihre E-Mail-Adresse anzugeben, 
              um die <strong>Ergebnisse der gesamten Studie</strong> zu erhalten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}