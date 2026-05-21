import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { portfolioData } from '../lib/portfolio-data'
import { Github, Twitter, Heart } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${portfolioData.name} | ${portfolioData.title}`}</title>
        <meta name="description" content={`Portfolio of ${portfolioData.name}, ${portfolioData.title} at Fluxibility Softwares. Showcasing software development and growth marketing.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${portfolioData.name} | ${portfolioData.title}`} />
        <meta property="og:description" content={`Portfolio of ${portfolioData.name}, ${portfolioData.title} at Fluxibility Softwares. Showcasing software development and growth marketing.`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${portfolioData.name} | ${portfolioData.title}`} />
        <meta property="twitter:description" content={`Portfolio of ${portfolioData.name}, ${portfolioData.title} at Fluxibility Softwares. Showcasing software development and growth marketing.`} />
      </Head>

      {/* Main Layout Container */}
      <div className="min-h-screen bg-bg-deep text-white font-sans overflow-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Dynamic Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-border-glass py-12 bg-bg-deep/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side info */}
            <div className="text-center md:text-left">
              <span className="font-display font-black text-lg tracking-wider text-white">
                {portfolioData.name.toUpperCase()}
              </span>
              <p className="text-xs text-gray-400 mt-1 font-sans">
                &copy; {new Date().getFullYear()} Jaikishore. All rights reserved.
              </p>
            </div>

            {/* Middle: Made with love */}
            <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-sans">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
              <span>for</span>
              <a 
                href="https://github.com/Fluxibility-Softwares" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-accent-cyan hover:underline hover:text-white transition-colors"
              >
                Fluxibility Softwares
              </a>
            </div>

            {/* Right side social links */}
            <div className="flex space-x-4">
              {portfolioData.socials.github && (
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {portfolioData.socials.twitter && (
                <a
                  href={portfolioData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
