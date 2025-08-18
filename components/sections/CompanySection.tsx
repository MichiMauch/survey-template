'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function CompanySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Über NETNODE
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            NETNODE ist eine Digitalagentur mit Sitz in Luzern, spezialisiert auf Webentwicklung, User Experience 
            und den Einsatz moderner Technologien wie Künstliche Intelligenz. Seit über 20 Jahren begleiten wir 
            Unternehmen, Verbände und Organisationen bei der digitalen Transformation – von der strategischen 
            Beratung bis zur technischen Umsetzung.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://www.netnode.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: '#1084C7' }}
            >
              Mehr über uns auf www.netnode.ch
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}