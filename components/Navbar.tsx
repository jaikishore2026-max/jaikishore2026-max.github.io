import React, { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'
import { portfolioData } from '../lib/portfolio-data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Section highlighters
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-4 bg-bg-deep/80 backdrop-blur-md border-b border-border-glass shadow-lg shadow-black/10' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue via-accent-indigo to-accent-cyan flex items-center justify-center font-display font-bold text-white text-lg shadow-md shadow-accent-indigo/25 group-hover:scale-105 transition-transform duration-300">
            {portfolioData.avatarText}
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white hidden sm:block group-hover:text-accent-cyan transition-colors">
            JAIKISHORE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                activeSection === link.id
                  ? 'text-accent-cyan'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Socials & Contact CTA */}
        <div className="hidden md:flex items-center space-x-4">
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
          <a
            href="#contact"
            className="px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white border border-border-glass glass hover:border-accent-indigo/40 hover:bg-accent-indigo/10 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-bg-deep/95 border-l border-border-glass backdrop-blur-xl z-40 p-8 transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-between pt-16">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-lg font-semibold tracking-wide transition-colors ${
                  activeSection === link.id ? 'text-accent-cyan' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="border-t border-border-glass pt-6 flex flex-col space-y-4">
            <div className="flex space-x-4 justify-center">
              {portfolioData.socials.github && (
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white p-2 rounded-lg border border-border-glass"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-indigo hover:from-accent-indigo hover:to-accent-blue shadow-lg shadow-accent-indigo/20 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
