'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
  layout?: 'default' | 'side-by-side' | 'centered';
  delay?: number;
}

export default function SectionCard({ 
  icon: Icon, 
  title, 
  children, 
  className = '', 
  layout = 'default',
  delay = 0 
}: SectionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const layoutClasses = {
    default: 'text-center max-w-4xl mx-auto',
    'side-by-side': 'text-left max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center',
    centered: 'text-center max-w-3xl mx-auto',
  };

  return (
    <section ref={ref} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className={layoutClasses[layout]}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay }}
          className={layout === 'side-by-side' ? 'md:order-1' : ''}
        >
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
          )}
          
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">
            {title}
          </h2>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            {children}
          </div>
        </motion.div>
        
        {layout === 'side-by-side' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-1" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full w-3/4" />
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-full" />
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg" />
                    <div className="h-12 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}