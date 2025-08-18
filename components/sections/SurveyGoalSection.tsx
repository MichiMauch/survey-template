'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Wrench, AlertTriangle, TrendingUp, BarChart3, Users, Lightbulb } from 'lucide-react';

export default function SurveyGoalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const dataPoints = [
    {
      icon: Wrench,
      title: "Werkzeuge",
      subtitle: "Digital Tools",
      description: "Welche digitalen Lösungen nutzen Verbände bereits in ihrem Arbeitsalltag?",
      items: ["CRM-Systeme", "E-Mail-Marketing", "Social Media Tools", "Webinar-Plattformen"],
      delay: 0.1
    },
    {
      icon: AlertTriangle,
      title: "Hürden",
      subtitle: "Challenges", 
      description: "Wo stossen Verbände auf Hindernisse bei der digitalen Transformation?",
      items: ["Budgetbeschränkungen", "Fehlendes Know-how", "Datenschutz-Bedenken", "Ressourcenmangel"],
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Chancen", 
      subtitle: "Opportunities",
      description: "Welche Potenziale sehen Verbände durch KI und neue Technologien?",
      items: ["Automatisierung", "Personalisierung", "Datenanalyse", "Effizienzsteigerung"],
      delay: 0.3
    }
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-slate-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
               style={{ backgroundColor: 'rgba(16, 132, 199, 0.1)', color: '#1084C7' }}>
            <Target className="w-4 h-4" />
            Studienziel
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Was wir 
            <span className="block font-normal text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(to right, #1084C7, #0F75B0, #1084C7)` }}>
              erforschen möchten
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
            <p>
              Wir möchten verstehen, welche <span className="font-semibold" style={{ color: '#1084C7' }}>digitalen Werkzeuge</span> Verbände bereits nutzen, 
              wo sie <span className="font-semibold text-gray-800">Herausforderungen</span> sehen und welche 
              <span className="font-semibold text-gray-800"> Chancen</span> sich durch KI-Anwendungen ergeben.
            </p>
            <p>
              Die Ergebnisse sollen helfen, den <strong>Austausch unter Verbänden</strong> zu fördern und 
              <strong> Impulse für die Zukunft</strong> zu geben.
            </p>
          </div>
        </motion.div>

        {/* Interactive data visualization */}
        <div className="grid lg:grid-cols-3 gap-8">
          {dataPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.7, delay: point.delay }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                
                {/* Icon and header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-gray-200 transition-all duration-300" 
                       style={{ '--hover-bg': '#1084C7' } as any}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.backgroundColor = '#1084C7';
                         e.currentTarget.style.color = 'white';
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.backgroundColor = '';
                         e.currentTarget.style.color = '';
                       }}>
                    <point.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {point.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {point.description}
                </p>

                {/* Example items */}
                <div className="space-y-3">
                  {point.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: point.delay + (itemIndex * 0.1) }}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>

                {/* Interactive hover element */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" 
                       style={{ backgroundColor: '#1084C7' }}>
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section with connection illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-indigo-600" />
                <span className="text-lg font-semibold text-gray-800">Austausch fördern</span>
              </div>
              <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-indigo-300 to-purple-300" />
              <div className="flex items-center gap-4">
                <Lightbulb className="w-8 h-8 text-purple-600" />
                <span className="text-lg font-semibold text-gray-800">Impulse geben</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}