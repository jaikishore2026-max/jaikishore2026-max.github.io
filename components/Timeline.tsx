import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  Award, 
  Rocket
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'sparkles': Sparkles,
  'zap': Zap,
  'award': Award,
  'rocket': Rocket,
}

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const phaseVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-indigo/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            My <span className="text-gradient">Founder Story</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From curiosity to execution. The journey of building, learning, and becoming a founder.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 lg:space-y-12"
        >
          {portfolioData.storyPhases.map((phase, index) => {
            const Icon = iconMap[phase.icon] || Sparkles
            const isHighlight = phase.isHighlight

            return (
              <motion.div
                key={phase.phase}
                variants={phaseVariants}
                className={`relative group ${isHighlight ? 'lg:scale-105' : ''}`}
              >
                <div className="flex gap-6 md:gap-10">
                  {/* Timeline Point */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 ${
                        isHighlight
                          ? 'bg-gradient-to-r from-accent-blue to-accent-indigo shadow-lg shadow-accent-indigo/50 border-2 border-accent-cyan'
                          : 'bg-accent-indigo/10 border-2 border-accent-indigo/50'
                      } group-hover:shadow-lg group-hover:shadow-accent-cyan/25 transition-all duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${isHighlight ? 'text-white' : 'text-accent-cyan'}`} />
                    </motion.div>

                    {/* Connecting Line */}
                    {index < portfolioData.storyPhases.length - 1 && (
                      <div className="w-1 h-24 md:h-32 bg-gradient-to-b from-accent-indigo/50 to-accent-indigo/10 mt-4 rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-8">
                    <div
                      className={`p-8 rounded-2xl border transition-all duration-300 ${
                        isHighlight
                          ? 'border-accent-cyan bg-accent-cyan/5 glass shadow-xl shadow-accent-cyan/10'
                          : 'border-border-glass glass group-hover:border-accent-indigo/50 group-hover:bg-accent-indigo/5'
                      }`}
                    >
                      {/* Phase Badge */}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/30 text-[10px] font-semibold text-accent-cyan uppercase tracking-wider">
                          Phase {phase.phase}
                        </span>
                        {isHighlight && (
                          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-semibold text-amber-400 uppercase tracking-wider animate-pulse">
                            Milestone
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-accent-cyan font-semibold text-sm mb-3">
                        {phase.subtitle}
                      </p>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-4">
                        {phase.year}
                      </p>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 text-base">
                        {phase.description}
                      </p>

                      {/* Special highlight for Phase 3 */}
                      {isHighlight && (
                        <div className="pt-4 border-t border-accent-cyan/20">
                          <p className="text-sm text-amber-200 font-medium flex items-center space-x-2">
                            <Award className="w-4 h-4 text-amber-400" />
                            <span>500+ person audience • Peak growth moment • Turning point in confidence & leadership</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Journey Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 rounded-2xl border border-border-glass glass hover:border-accent-cyan/30 transition-all">
            <div className="text-2xl md:text-3xl font-display font-black text-gradient mb-1">4</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Phases Complete</div>
          </div>
          <div className="p-6 rounded-2xl border border-border-glass glass hover:border-accent-blue/30 transition-all">
            <div className="text-2xl md:text-3xl font-display font-black text-accent-cyan mb-1">500+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Speaking Audience</div>
          </div>
          <div className="p-6 rounded-2xl border border-border-glass glass hover:border-accent-indigo/30 transition-all">
            <div className="text-2xl md:text-3xl font-display font-black text-accent-indigo mb-1">3y</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Journey So Far</div>
          </div>
          <div className="p-6 rounded-2xl border border-border-glass glass hover:border-pink-400/30 transition-all">
            <div className="text-2xl md:text-3xl font-display font-black text-pink-400 mb-1">∞</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">Growth Ahead</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
