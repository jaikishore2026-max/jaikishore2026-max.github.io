import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-accent-indigo/10 rounded-full blur-[120px] -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-cyan/10 rounded-full blur-[100px] -z-10 animate-pulse duration-[6000ms]" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-border-glass glass mb-8 shadow-inner shadow-white/5"
        >
          <Sparkles className="w-4 h-4 text-accent-cyan animate-spin duration-[4000ms]" />
          <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
            Marketing & Social Lead @ Fluxibility Softwares
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-white mb-6"
        >
          Hey, I'm <span className="text-gradient text-glow-blue">{portfolioData.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 font-sans font-light max-w-2xl leading-relaxed mb-10"
        >
          {portfolioData.subTitle}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-cyan hover:shadow-xl hover:shadow-accent-indigo/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-gray-300 border border-border-glass glass hover:border-accent-indigo/30 hover:bg-accent-indigo/5 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer space-y-2 opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
          >
            <ChevronDown className="w-5 h-5 text-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
