import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Zap } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

export default function Formula1Passion() {
  const { f1Passion } = portfolioData

  return (
    <section id="f1passion" className="py-24 relative overflow-hidden">
      {/* Decorative Racing Vibes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Formula <span className="text-gradient">1</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            More than motorsport. A philosophy of precision, excellence, and relentless pursuit of victory.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Main F1 Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Gradient Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-12 rounded-3xl border-2 border-red-600/30 bg-gradient-to-br from-red-600/5 to-yellow-400/5 glass overflow-hidden">
            {/* Decorative accent lines */}
            <div className="absolute top-0 left-0 w-40 h-1 bg-gradient-to-r from-red-600 to-transparent" />
            <div className="absolute bottom-0 right-0 w-40 h-1 bg-gradient-to-l from-yellow-400 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {/* Left: Headline & Quote */}
              <div className="flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4"
                >
                  {f1Passion.headline}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                >
                  {f1Passion.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Zap className="w-4 h-4 text-red-600" />
                    <span>Speed & Precision</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span>Excellence Mindset</span>
                  </div>
                </motion.flex>
              </div>

              {/* Right: Favorites */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-display font-bold text-xl text-white mb-6">F1 Favorites</h4>
                <div className="grid grid-cols-2 gap-4">
                  {f1Passion.favorites.map((fav, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="p-4 rounded-xl border border-red-600/30 bg-red-600/5 hover:border-red-600/60 hover:bg-red-600/10 transition-all duration-300 text-center group"
                    >
                      <p className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                        {fav}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl border border-red-600/20 bg-red-600/5 hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300">
            <h4 className="font-display font-bold text-lg text-white mb-3">Strategy</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every race is won before it starts. Strategic thinking, calculated risks, and anticipating moves ahead.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300">
            <h4 className="font-display font-bold text-lg text-white mb-3">Execution</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Perfect execution under pressure. Milliseconds matter. Consistency beats brilliance on the day.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-orange-500/20 bg-orange-500/5 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300">
            <h4 className="font-display font-bold text-lg text-white mb-3">Continuous Improvement</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lap times drop with 1% improvements. In tech and in life, compound progress is unstoppable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
