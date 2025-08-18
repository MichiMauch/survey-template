'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, MessageSquare, TrendingUp, Settings, Shield, Heart, UserCheck } from 'lucide-react';

export default function TargetAudienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targetGroups = [
    { 
      icon: MessageSquare, 
      name: 'Kommunikation', 
      description: 'Verantwortliche für interne und externe Kommunikation',
      delay: 0.1 
    },
    { 
      icon: TrendingUp, 
      name: 'Marketing', 
      description: 'Experten für Mitgliedergewinnung und -bindung',
      delay: 0.15 
    },
    { 
      icon: Settings, 
      name: 'IT', 
      description: 'Technische Leitung und Digitalisierungs-Verantwortliche',
      delay: 0.2 
    },
    { 
      icon: Shield, 
      name: 'Strategie', 
      description: 'Strategische Planung und Organisationsentwicklung',
      delay: 0.25 
    },
    { 
      icon: UserCheck, 
      name: 'Geschäftsleitung', 
      description: 'Führungskräfte und Entscheidungsträger',
      delay: 0.3 
    },
    { 
      icon: Heart, 
      name: 'Ehrenamtliche', 
      description: 'Engagierte Vereinsmitglieder in Führungspositionen',
      delay: 0.35 
    },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gray-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-slate-300 rounded-full blur-3xl" />
      </div>
      
      {/* People silhouettes background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="30" r="3" fill="currentColor" />
          <circle cx="80" cy="40" r="2.5" fill="currentColor" />
          <circle cx="60" cy="20" r="2" fill="currentColor" />
          <circle cx="30" cy="70" r="2.5" fill="currentColor" />
          <circle cx="70" cy="80" r="3" fill="currentColor" />
        </svg>
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
            <Users className="w-4 h-4" />
            Zielgruppe
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Wer soll 
            <span className="block font-normal text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(to right, #1084C7, #0F75B0, #1084C7)` }}>
              teilnehmen?
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Die Umfrage richtet sich an <strong>Fach- und Führungskräfte in Verbänden</strong> – 
            insbesondere aus den folgenden Bereichen:
          </p>
        </motion.div>

        {/* Interactive role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {targetGroups.map((group) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.6, delay: group.delay }}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-xl mb-4 group-hover:scale-110 transition-all duration-300"
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = '#1084C7';
                       e.currentTarget.style.color = 'white';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = '';
                       e.currentTarget.style.color = '';
                     }}>
                  <group.icon className="w-6 h-6" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {group.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {group.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ backgroundColor: '#1084C7' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inclusive message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 border-2 border-gray-200/50 rounded-3xl p-8 text-center shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Jeder ist willkommen!</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Auch <strong>kleinere oder ehrenamtlich geführte Verbände</strong> sind ausdrücklich eingeladen, 
              teilzunehmen! Ihre Perspektive ist genauso wertvoll für unsere Studie.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}