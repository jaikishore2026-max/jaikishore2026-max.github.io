import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import CurrentlyLearning from '../components/CurrentlyLearning'
import BusinessLearning from '../components/BusinessLearning'
import Formula1Passion from '../components/Formula1Passion'
import Contact from '../components/Contact'
import { portfolioData } from '../lib/portfolio-data'
import { Github, Twitter, Heart, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${portfolioData.name} | Founder, Developer, Builder`}</title>
        <meta name="description" content={`${portfolioData.name}'s portfolio. Founder, AI builder, marketing strategist. Speaking at 500+, building products, learning startup thinking.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${portfolioData.name} | Founder, Developer, Builder`} />
        <meta property="og:description" content={`${portfolioData.name}'s portfolio. Founder, AI builder, marketing strategist. Speaking at 500+, building products, learning startup thinking.`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${portfolioData.name} | Founder, Developer, Builder`} />
        <meta property="twitter:description" content={`${portfolioData.name}'s portfolio. Founder, AI builder, marketing strategist. Speaking at 500+, building products, learning startup thinking.`} />
      </Head>

      {/* Main Layout Container */}
      <div className="min-h-screen bg-bg-deep text-white font-sans overflow-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Dynamic Sections */}
        <main>
          <Hero />
          <Timeline />
          <About />
          <Skills />
          <Projects />
          <CurrentlyLearning />
          <BusinessLearning />
          <Formula1Passion />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-border-glass py-12 bg-bg-deep/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
              {/* Left side info */}
              <div className="text-center md:text-left">
                <span className="font-display font-black text-lg tracking-wider text-white">
                  {portfolioData.name.toUpperCase()}
                </span>
                <p className="text-xs text-gray-400 mt-2 font-sans">
                  Building the future with code & vision
                </p>
                <p className="text-xs text-gray-500 mt-1 font-sans">
                  &copy; {new Date().getFullYear()} Jaikishore. All rights reserved.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col md:flex-col items-center space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Connect</p>
                <div className="flex space-x-4">
                  {portfolioData.socials.github && (
                    <a
                      href={portfolioData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border-glass glass hover:border-accent-cyan/50 hover:bg-accent-cyan/10 text-gray-400 hover:text-accent-cyan transition-all duration-300"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {portfolioData.socials.instagram && (
                    <a
                      href={portfolioData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border-glass glass hover:border-pink-400/50 hover:bg-pink-400/10 text-gray-400 hover:text-pink-400 transition-all duration-300"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {portfolioData.socials.twitter && (
                    <a
                      href={portfolioData.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border-glass glass hover:border-blue-400/50 hover:bg-blue-400/10 text-gray-400 hover:text-blue-400 transition-all duration-300"
                      title="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-border-glass text-center text-xs text-gray-500">
              <p>
                Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline-block mx-1" /> by Jaikishore. Built with Next.js, Tailwind CSS & Framer Motion.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
