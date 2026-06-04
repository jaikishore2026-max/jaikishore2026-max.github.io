import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

export default function PassionProject() {
  return (
    <section id="passion" className="py-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-indigo/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            My <span className="text-gradient">Passion</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Projects and ideas that drive me forward
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Passion Project Card */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          {/* Gradient Background on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-indigo/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

          <div className="p-12 rounded-2xl border border-border-glass glass group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/5 transition-all duration-300">
            {/* Title */}
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 group-hover:text-accent-cyan transition-colors">
              {portfolioData.passionProject.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
              {portfolioData.passionProject.description}
            </p>

            {/* CTA Button */}
            <a
              href={portfolioData.passionProject.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-display font-bold hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 group/btn"
            >
              <span>{portfolioData.passionProject.buttonText}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
