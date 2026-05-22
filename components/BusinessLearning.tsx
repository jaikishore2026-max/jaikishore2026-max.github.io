import React from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb,
  Target,
  TrendingUp,
  Users
} from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'lightbulb': Lightbulb,
  'target': Target,
  'trending-up': TrendingUp,
  'users': Users,
}

export default function BusinessLearning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="business" className="py-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-indigo/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Business <span className="text-gradient">Thinking</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From engineer to entrepreneur. Understanding how real businesses work, scale, and create value.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Business Learning Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolioData.businessLearning.map((item, index) => {
            const Icon = iconMap[item.icon] || Lightbulb

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo/20 to-accent-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <div className="p-8 rounded-2xl border border-border-glass glass group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/5 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent-indigo/10 border border-accent-indigo/30 group-hover:scale-110 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-cyan" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Focus Area */}
                  <div className="pt-6 border-t border-border-glass">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-2">Focus</p>
                    <p className="text-sm text-gray-300 font-medium">
                      {item.focus}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Founder Mentality Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-2xl border-2 border-accent-cyan/50 bg-gradient-to-r from-accent-cyan/10 to-accent-indigo/10"
        >
          <div className="text-center">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
              Founder Mentality
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              I don&apos;t just code features. I ask: <span className="text-accent-cyan font-semibold">"What problem does this solve?"</span> How does it create value? Can it scale? I think like a founder—solving problems users actually have, building products people want, and creating sustainable business models.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>User-First Mindset</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent-indigo" />
                <span>Data-Driven Decisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent-blue" />
                <span>Rapid Iteration</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
