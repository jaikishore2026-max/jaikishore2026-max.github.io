import React, { useState } from 'react'
import { Mail, Send, Check, Loader2, Github, Twitter, MapPin } from 'lucide-react'
import { toast } from 'sonner'
import { portfolioData } from '../lib/portfolio-data'
import emailjs from '@emailjs/browser'

// Read EmailJS config from environment (NEXT_PUBLIC_ prefix required for client-side access)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

if (typeof window !== 'undefined' && (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY)) {
  // warn in console for developers if env vars are not set
  // eslint-disable-next-line no-console
  console.warn('EmailJS env vars not set: NEXT_PUBLIC_EMAILJS_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY')
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: portfolioData.socials.email,
      subject: formData.subject || `New message from ${formData.name}`,
      message: formData.message,
    }

    let success = false
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      success = true
      setIsSuccess(true)
      toast.success(`Thank you, ${formData.name}! Message sent successfully.`)

      // Reset Form
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
      if (success) setTimeout(() => setIsSuccess(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Interested in scaling your community or discussing software projects? Let&apos;s build something exceptional!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full mt-4" />
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-border-glass glass space-y-8">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-gray-400">Direct Email</h4>
                    <a
                      href={`mailto:${portfolioData.socials.email}`}
                      className="font-sans text-sm sm:text-base font-semibold text-white hover:text-accent-cyan transition-colors"
                    >
                      {portfolioData.socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-gray-400">Location</h4>
                    <span className="font-sans text-sm sm:text-base font-semibold text-white">
                      {portfolioData.about.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Connect */}
              <div className="border-t border-border-glass pt-6">
                <h4 className="font-sans font-semibold text-sm text-gray-400 mb-4">Connect Socially</h4>
                <div className="flex space-x-3">
                  {portfolioData.socials.github && (
                    <a
                      href={portfolioData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border-glass glass hover:border-accent-blue/40 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {portfolioData.socials.twitter && (
                    <a
                      href={portfolioData.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border-glass glass hover:border-accent-blue/40 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-border-glass glass">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 rounded-xl border border-border-glass bg-bg-deep/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all duration-300 text-sm font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-border-glass bg-bg-deep/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all duration-300 text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    className="w-full px-5 py-4 rounded-xl border border-border-glass bg-bg-deep/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all duration-300 text-sm font-sans"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your brand goals or technical project ideas..."
                    className="w-full px-5 py-4 rounded-xl border border-border-glass bg-bg-deep/50 text-white placeholder-gray-500 focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all duration-300 text-sm font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4.5 rounded-xl font-semibold uppercase tracking-wider text-xs sm:text-sm text-white bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-cyan flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-80 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:shadow-accent-indigo/25 active:scale-[0.99]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
