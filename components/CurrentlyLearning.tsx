import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Terminal, 
  Rocket,
  Database,
  Layout,
  Lightbulb,
  TrendingUp,
  Users
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'


const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'brain': Brain,
  'terminal': Terminal,
  'rocket': Rocket,
  'database': Database,
  'layout': Layout,
  'lightbulb': Lightbulb,
  'trending-up': TrendingUp,
  'users': Users,
}

export default function CurrentlyLearning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  const levelColors: Record<string, string> = {
    'beginner': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    'intermediate': 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    'advanced': 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
  }

  return (
    <section id="learning" className="py-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-indigo/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Currently <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Active focus areas. Skills being developed in real-time. Founder mentality requires continuous learning.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Learning Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.currentlyLearning.map((item, index) => {
            const Icon = iconMap[item.icon] || Lightbulb
            const levelColor = levelColors[item.level || 'intermediate']

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-2xl border border-border-glass glass hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-105"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-accent-indigo/10 border border-accent-indigo/30 group-hover:scale-110 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent-cyan group-hover:text-accent-cyan" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Level Badge */}
                {item.level && (
                  <div className={`inline-block px-3 py-1 rounded-full border text-[11px] font-semibold uppercase tracking-wider ${levelColor}`}>
                    {item.level}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Learning Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-accent-indigo/30 bg-accent-indigo/5 glass"
        >
          <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center space-x-2">
            <Lightbulb className="w-6 h-6 text-accent-cyan" />
            <span>Learning Framework</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-accent-cyan font-semibold text-sm mb-2">→ Build in Public</p>
              <p className="text-gray-400 text-sm">Learning by shipping. Every project is a learning milestone.</p>
            </div>
            <div>
              <p className="text-accent-cyan font-semibold text-sm mb-2">→ Consistent Daily Practice</p>
              <p className="text-gray-400 text-sm">1% improvement every day. Progress compounds over time.</p>
            </div>
            <div>
              <p className="text-accent-cyan font-semibold text-sm mb-2">→ Teaching Others</p>
              <p className="text-gray-400 text-sm">Best way to learn deeply. Share knowledge freely.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
