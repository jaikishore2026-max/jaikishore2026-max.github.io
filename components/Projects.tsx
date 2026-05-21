import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Filter, BarChart } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'development' | 'marketing'>('all')

  const filterOptions: { label: string; value: typeof selectedFilter }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Development', value: 'development' },
    { label: 'Growth & Marketing', value: 'marketing' }
  ]

  const filteredProjects = portfolioData.projects.filter(project => {
    if (selectedFilter === 'all') return true
    return project.category === selectedFilter || project.category === 'all'
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] -z-10 animate-pulse duration-[8000ms]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A handpicked selection of scripting tools, game utilities, and high-impact digital campaigns.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 flex items-center space-x-2 border ${
                selectedFilter === opt.value
                  ? 'bg-gradient-to-r from-accent-blue to-accent-indigo text-white border-transparent shadow-lg shadow-accent-indigo/25'
                  : 'text-gray-400 border-border-glass glass hover:text-white hover:border-accent-indigo/30'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="p-8 rounded-3xl border border-border-glass glass glass-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category & Stats Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-[10px] font-semibold text-accent-cyan uppercase tracking-wider">
                      {project.category === 'all' ? 'Dev & Growth' : project.category}
                    </span>
                    
                    {project.metrics && (
                      <span className="flex items-center space-x-1 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                        <BarChart className="w-3 h-3" />
                        <span>{project.metrics}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 rounded-lg bg-bg-deep border border-border-glass text-[11px] font-medium text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center space-x-4 border-t border-border-glass pt-6">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors py-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Codebase</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-semibold text-accent-cyan hover:text-white transition-colors py-2 ml-auto"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
