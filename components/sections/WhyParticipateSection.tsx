'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Network, Lightbulb, Award, Sparkles } from 'lucide-react';

export default function WhyParticipateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: BarChart3,
      title: "Benchmark erhalten",
      description: "Vergleichen Sie Ihren Digitalisierungsgrad mit anderen Verbänden und identifizieren Sie Verbesserungspotenzial.",
      delay: 0.1
    },
    {
      icon: Network,
      title: "Austausch fördern",
      description: "Werden Sie Teil einer Community, die den digitalen Wandel in der Verbandslandschaft aktiv gestaltet.",
      delay: 0.2
    },
    {
      icon: Lightbulb,
      title: "Impulse erhalten",
      description: "Erhalten Sie wertvolle Insights und Best Practices für die digitale Transformation Ihres Verbands.",
      delay: 0.3
    },
    {
      icon: Award,
      title: "Zukunft mitgestalten",
      description: "Ihre Expertise trägt dazu bei, Standards und Empfehlungen für die Branche zu entwickeln.",
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-slate-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
               style={{ backgroundColor: 'rgba(16, 132, 199, 0.1)', color: '#1084C7' }}>
            <Sparkles className="w-4 h-4" />
            Ihre Vorteile
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Warum 
            <span className="block font-normal text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(to right, #1084C7, #0F75B0, #1084C7)` }}>
              teilnehmen?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            <strong>Jede Stimme zählt.</strong> Mit Ihrer Teilnahme tragen Sie dazu bei, ein aussagekräftiges Bild 
            der <span className="font-semibold" style={{ color: '#1084C7' }}>digitalen Reife in der Verbandslandschaft</span> zu zeichnen.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ihre Erfahrung und Perspektive helfen, gezielt Entwicklungen anzustossen.
          </p>
        </motion.div>

        {/* Enhanced Benefits Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.7, delay: benefit.delay }}
              className="group relative"
            >
              {/* Floating benefit card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                
                {/* Icon with floating animation */}
                <div className="relative flex items-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 rounded-2xl shadow-md group-hover:scale-105 transition-all duration-300"
                       onMouseEnter={(e) => {
                         e.currentTarget.style.backgroundColor = '#1084C7';
                         e.currentTarget.style.color = 'white';
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.backgroundColor = '';
                         e.currentTarget.style.color = '';
                       }}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover indicators */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full shadow-lg animate-pulse" style={{ backgroundColor: '#1084C7' }} />
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 1, delay: benefit.delay + 0.3 }}
                    className="h-full bg-gray-400 rounded-full"
                  />
                </div>
              </div>

              {/* Floating number indicator */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action highlight - AUSKOMMENTIERT
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 border border-gray-200 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full animate-pulse mr-3" style={{ backgroundColor: '#1084C7' }}></div>
              <span className="text-sm font-medium" style={{ color: '#1084C7' }}>Live Status</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Seien Sie dabei und gestalten Sie die Zukunft mit!
            </h3>
            <p className="text-gray-600 mb-6">
              Gemeinsam schaffen wir Transparenz und treiben die Digitalisierung in Verbänden voran.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="font-semibold text-lg mr-1" style={{ color: '#1084C7' }}>150+</span>
                bereits teilgenommen
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 text-lg mr-1">26</span>
                Kantone vertreten
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-700 text-lg mr-1">4.8★</span>
                durchschnittliche Bewertung
              </div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}