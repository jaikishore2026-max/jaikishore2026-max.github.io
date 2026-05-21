import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Briefcase, GraduationCap, MapPin, User } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            About <span className="text-gradient">Jaikishore</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full" />
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Bio & Core Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-border-glass glass">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4 flex items-center space-x-2">
                <User className="w-5 h-5 text-accent-cyan" />
                <span>My Story</span>
              </h3>
              <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                {portfolioData.about.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-border-glass pt-6">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-accent-indigo" />
                  <span className="text-sm font-medium">{portfolioData.about.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <BookOpen className="w-4 h-4 text-accent-indigo" />
                  <span className="text-sm font-medium truncate">{portfolioData.about.education}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Metrics Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {portfolioData.about.stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border-glass glass hover:border-accent-blue/30 transition-all duration-300 group"
                >
                  <div className="font-display font-black text-2xl sm:text-3xl text-gradient group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-border-glass glass h-full">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent-cyan" />
                <span>Experience & Education</span>
              </h3>

              <div className="relative border-l border-border-glass pl-6 space-y-8">
                {portfolioData.timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-accent-indigo bg-bg-deep flex items-center justify-center group-hover:bg-accent-indigo transition-colors duration-300">
                      {item.category === 'work' ? (
                        <Briefcase className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      ) : (
                        <GraduationCap className="w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-[10px] font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                      {item.year}
                    </span>

                    <h4 className="font-display font-bold text-white text-base leading-tight group-hover:text-accent-indigo transition-colors">
                      {item.role}
                    </h4>
                    <p className="font-sans text-xs font-medium text-gray-400 mt-1">
                      {item.company}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
