import React from 'react'
import { motion } from 'framer-motion'
import { 
  Terminal, 
  Code, 
  Coffee, 
  Layout, 
  TrendingUp, 
  Edit3, 
  Users, 
  Target,
  Sparkles
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'terminal': Terminal,
  'code': Code,
  'coffee': Coffee,
  'layout': Layout,
  'trending-up': TrendingUp,
  'edit-3': Edit3,
  'users': Users,
  'target': Target,
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-indigo/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Uniting hard technical execution with soft skill leadership and digital amplification.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-indigo to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolioData.skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              className="p-8 rounded-3xl border border-border-glass glass glow-card"
            >
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-accent-cyan" />
                <span className="text-glow-blue">{category.title}</span>
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon] || Code
                  return (
                    <div key={skillIndex} className="space-y-2 group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className="p-2 rounded-xl bg-accent-indigo/10 border border-accent-indigo/20 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-sans font-medium text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-display font-bold text-xs sm:text-sm text-accent-cyan">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2 bg-bg-deep rounded-full overflow-hidden border border-border-glass">
                        {/* Animated fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
                          className="h-full bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-cyan rounded-full"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
