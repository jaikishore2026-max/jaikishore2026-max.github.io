import React, { FormEvent, ReactNode, useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Github,
  Instagram,
  Mail,
  Menu,
  Mic2,
  MoveUpRight,
  Network,
  Rocket,
  Send,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'

const navLinks = [
  ['home', 'Home'],
  ['story', 'Story'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['learning', 'Learning'],
  ['business', 'Business'],
  ['contact', 'Contact'],
] as const

const socials = [
  { label: 'GitHub', href: 'https://github.com/jaikishore2026-max', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/jai_kishore33', icon: Instagram },
]

const skills = [
  { name: 'Python', detail: 'Automation + AI tooling', level: 75, color: 'cyan', icon: Terminal },
  { name: 'C++', detail: 'Systems thinking', level: 69, color: 'violet', icon: Code2 },
  { name: 'Java', detail: 'Core foundations', level: 52, color: 'emerald', icon: Cpu },
  { name: 'Web Dev', detail: 'Shipping interfaces', level: 78, color: 'cyan', icon: Network },
  { name: 'Social Growth', detail: 'Community systems', level: 81, color: 'violet', icon: TrendingUp },
  { name: 'Public Speaking', detail: '500+ room keynote', level: 88, color: 'emerald', icon: Mic2 },
]

const phases = [
  { number: '01', title: 'Origin', meta: '2023 — 2024', body: 'Curiosity became a daily practice: code, business, and the first small experiments that made building feel real.', tag: 'THE SPARK', icon: Sparkles },
  { number: '02', title: 'Skill Building', meta: '2024 — 2025', body: 'Web development, AI tools, and consistent shipping turned scattered interests into technical foundations.', tag: 'THE GRIND', icon: Zap },
  { number: '03', title: 'Breakthrough', meta: '2025', body: 'Stepped onto a stage for 500+ people and learned that clear communication is a force multiplier for every idea.', tag: 'THE MOMENT', icon: Mic2 },
  { number: '04', title: 'Execution', meta: '2026 — NOW', body: 'Building products, growing communities, and moving from learning in public to creating with intent.', tag: 'THE BUILD', icon: Rocket },
]

const learnings = [
  { title: 'AI Engineering', body: 'LLMs, prompt systems, and intelligent product features.', icon: Cpu, progress: 42 },
  { title: 'System Design', body: 'Scalable architecture, data flow, and production patterns.', icon: Network, progress: 36 },
  { title: 'Startup Building', body: 'Founder mindset, product-market fit, and fast iteration.', icon: Rocket, progress: 48 },
]

const stats = [
  { value: 500, suffix: '+', label: 'people in a keynote' },
  { value: 150, suffix: '%', label: 'community reach growth' },
  { value: 3, suffix: ' yrs', label: 'of focused building' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame = 0
    const start = performance.now()
    const duration = 1100
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])
  return <>{count}{suffix}</>
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: ReactNode; body: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="tech-label mb-4"><span className="pulse-dot" /> {eyebrow}</div>
      <h2 className="display-heading text-4xl text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{body}</p>
    </div>
  )
}

function GlassCard({ children, className = '', accent = 'cyan' }: { children: ReactNode; className?: string; accent?: 'cyan' | 'violet' | 'emerald' }) {
  return <div className={`glass-card accent-${accent} ${className}`}>{children}</div>
}

export default function FuturePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursor, setCursor] = useState({ x: -200, y: -200 })
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 24 })
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(form.get('subject') || 'Portfolio inquiry'))
    const body = encodeURIComponent(`Hi Jaikishore,\n\nName: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`)
    setFormSent(true)
    window.location.href = `mailto:mailme.jaikishore2026@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <motion.div className="cursor-orb" style={{ left: springX, top: springY }} aria-hidden="true" />
      <div className="blueprint-grid" aria-hidden="true" />

      <header className="site-nav">
        <a className="brand-mark" href="#home" aria-label="Jaikishore home"><span>JK</span><b>JAIKISHORE</b></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <div className="nav-socials">
            {socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={16} /></a>)}
          </div>
          <a href="#contact" className="nav-cta">Connect <ArrowUpRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mobile-menu">
          {navLinks.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={15} /></a>)}
        </motion.div>}
      </AnimatePresence>

      <main>
        <section id="home" className="hero-section page-section">
          <div className="hero-copy">
            <Reveal><div className="status-badge"><span className="status-dot" /> FOUNDER IN PROGRESS <span className="badge-divider" /> TECH BUILDER <span className="badge-divider" /> AI ENTHUSIAST</div></Reveal>
            <Reveal delay={0.08}><h1 className="display-heading hero-title">Building the <span>future</span><br />with code <i>&amp;</i> vision.</h1></Reveal>
            <Reveal delay={0.14}><p className="hero-subtitle">I&apos;m Jaikishore — a 17-year-old tech builder and CMO at Falkon Labs, turning technical curiosity into products, communities, and momentum.</p></Reveal>
            <Reveal delay={0.2} className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <MoveUpRight size={17} /></a>
              <a href="mailto:mailme.jaikishore2026@gmail.com" className="button button-ghost">Start a conversation <Mail size={16} /></a>
            </Reveal>
            <Reveal delay={0.26} className="hero-stats">
              {stats.map((stat) => <div className="stat-chip" key={stat.label}><strong><CountUp value={stat.value} suffix={stat.suffix} /></strong><span>{stat.label}</span></div>)}
            </Reveal>
          </div>
          <Reveal className="hero-console" delay={0.18}>
            <div className="console-top"><span><i /> <i /> <i /></span><small>jk://builder-profile</small><span className="console-live">LIVE <span className="status-dot" /></span></div>
            <div className="console-body">
              <div className="console-kicker">CURRENT OPERATING SYSTEM</div>
              <div className="console-title">BUILD / LEARN /<br /><em>REPEAT</em></div>
              <div className="console-line"><span>01</span><b>focus</b><strong>software + growth</strong></div>
              <div className="console-line"><span>02</span><b>mode</b><strong>curious / shipping</strong></div>
              <div className="console-line"><span>03</span><b>base</b><strong>India / internet</strong></div>
              <div className="console-footer"><span className="wave-bars"><i /><i /><i /><i /><i /><i /><i /></span><span>system integrity: <b>100%</b></span></div>
            </div>
          </Reveal>
          <a href="#story" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section id="story" className="page-section section-space">
          <Reveal><SectionHeading eyebrow="01 / THE STORY" title={<>From curiosity to <span className="gradient-text">execution.</span></>} body="A timeline of the moments that shaped how I think, build, and communicate." /></Reveal>
          <div className="story-track">
            {phases.map((phase, index) => { const Icon = phase.icon; return <Reveal key={phase.number} delay={index * 0.08} className="story-item">
              <div className="story-node"><span>{phase.number}</span><Icon size={17} /></div>
              <GlassCard className="story-card" accent={index === 2 ? 'violet' : index === 3 ? 'emerald' : 'cyan'}>
                <div className="card-meta"><span>{phase.tag}</span><time>{phase.meta}</time></div>
                <h3>{phase.title}</h3><p>{phase.body}</p><span className="card-corner">↗</span>
              </GlassCard>
            </Reveal> })}
          </div>
        </section>

        <section id="about" className="page-section section-space compact-top">
          <div className="about-grid">
            <Reveal><SectionHeading eyebrow="02 / PROFILE" title={<>A builder with a <span className="gradient-text">growth loop.</span></>} body="I sit at the intersection of engineering foundations and viral digital growth. That means I can care about the architecture, the story, and the people who use it." /></Reveal>
            <Reveal delay={0.1}><GlassCard className="about-card" accent="violet"><div className="about-quote">&ldquo;The goal isn&apos;t to look busy. It&apos;s to make the next version real.&rdquo;</div><div className="about-signature"><span>JK</span><div><b>JAIKISHORE</b><small>TECH BUILDER / CMO / LEARNER</small></div></div></GlassCard></Reveal>
          </div>
        </section>

        <section id="skills" className="page-section section-space">
          <Reveal><SectionHeading eyebrow="03 / CAPABILITIES" title={<>Tools for the <span className="gradient-text">next move.</span></>} body="A growing toolkit across code, communication, and the systems that connect both." /></Reveal>
          <div className="bento-grid skills-bento">
            {skills.map((skill, index) => { const Icon = skill.icon; return <Reveal key={skill.name} delay={index * 0.04} className={`skill-tile tile-${skill.color}`}><Icon size={22} /><div><h3>{skill.name}</h3><p>{skill.detail}</p></div><div className="skill-meter"><span style={{ width: `${skill.level}%` }} /></div><small>{String(skill.level).padStart(2, '0')} / 100</small></Reveal> })}
            <Reveal className="skill-summary tile-violet" delay={0.12}><div className="tech-label">BUILDING RANGE</div><strong>Code is the<br /><span>medium.</span></strong><p>Growth is the distribution layer. I&apos;m learning to design both.</p><a href="#projects">See the proof <ArrowUpRight size={15} /></a></Reveal>
          </div>
        </section>

        <section id="projects" className="page-section section-space">
          <Reveal><SectionHeading eyebrow="04 / SELECTED WORK" title={<>Proof over <span className="gradient-text">promises.</span></>} body="A mix of shipped experiments, technical systems, and high-energy growth work." /></Reveal>
          <div className="projects-grid">
            <Reveal className="project-featured" delay={0.05}><GlassCard accent="cyan"><div className="project-index">PROJECT 01 <span>2026 / SYSTEMS</span></div><div className="project-visual terrain-visual"><span className="terrain-radar" /><span className="terrain-label">LANDSORA / LIVE</span><span className="terrain-grid" /></div><div className="project-info"><div><h3>Landsora</h3><p>IoT landslide early-warning and risk monitoring console. Deterministic validation, simulated telemetry, and explainable AI for emergency teams.</p></div><a href="https://github.com/jaikishore2026-max/landSora" target="_blank" rel="noreferrer" className="round-arrow" aria-label="View Landsora on GitHub"><Github size={18} /></a></div><div className="project-tags"><span>React / TypeScript</span><span>IoT / AI</span><span>Risk systems</span></div></GlassCard></Reveal>
            <Reveal className="project-side" delay={0.12}><GlassCard accent="violet"><div className="project-index">PROJECT 02 <span>GROWTH / COMMUNITY</span></div><div className="project-icon-large"><TrendingUp size={38} /></div><h3>Falkon Labs</h3><p>Orchestrated social strategy, content hooks, and brand systems that drove <strong>150%+ community reach growth.</strong></p><div className="project-bottom"><span className="metric-pill">+150% reach</span><BriefcaseBusiness size={18} /></div></GlassCard><GlassCard accent="emerald" className="project-mini"><div className="project-index">PROJECT 03 <span>LEADERSHIP</span></div><div className="mini-row"><Mic2 size={22} /><div><h3>500+ keynote</h3><p>Public speaking, protocol, and room-scale communication.</p></div></div></GlassCard></Reveal>
          </div>
        </section>

        <section id="learning" className="page-section section-space">
          <Reveal><SectionHeading eyebrow="05 / NOW LOADING" title={<>Always in <span className="gradient-text">beta.</span></>} body="The current learning queue: concepts I am actively turning into capability." /></Reveal>
          <div className="learning-grid">{learnings.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * 0.08}><GlassCard className="learning-card" accent={index === 1 ? 'violet' : index === 2 ? 'emerald' : 'cyan'}><div className="learning-icon"><Icon size={22} /></div><div className="card-meta"><span>IN PROGRESS</span><span>{String(item.progress).padStart(2, '0')}%</span></div><h3>{item.title}</h3><p>{item.body}</p><div className="learning-meter"><span style={{ width: `${item.progress}%` }} /></div></GlassCard></Reveal> })}</div>
        </section>

        <section id="business" className="page-section section-space">
          <Reveal><SectionHeading eyebrow="06 / BUSINESS MINDSET" title={<>Think in <span className="gradient-text">systems.</span></>} body="Technology makes the solution possible. Product thinking makes it matter." /></Reveal>
          <div className="mindset-grid"><Reveal className="mindset-main"><GlassCard accent="emerald"><span className="big-index">01</span><Users size={27} /><h3>Community is a<br /><span>product surface.</span></h3><p>Trust, clarity, and momentum are designed — not left to chance.</p><div className="mindset-foot"><span>PEOPLE × PRODUCT × PURPOSE</span><ArrowUpRight size={16} /></div></GlassCard></Reveal><div className="mindset-list">{['See the problem before the feature.', 'Make the message as good as the machine.', 'Move fast. Keep the learning.'].map((text, i) => <Reveal key={text} delay={i * 0.08}><div className="mindset-row"><span>0{i + 1}</span><p>{text}</p><ChevronRight size={16} /></div></Reveal>)}</div></div>
        </section>

        <section id="contact" className="page-section section-space contact-section">
          <Reveal><div className="contact-panel"><div className="contact-copy"><div className="tech-label"><span className="pulse-dot" /> OPEN CHANNEL</div><h2 className="display-heading">Have a bold idea?<br /><span>Let&apos;s make it real.</span></h2><p>Whether it&apos;s a product, a community, or a new problem worth solving — I&apos;m always open to the next interesting conversation.</p><a className="email-link" href="mailto:mailme.jaikishore2026@gmail.com">mailme.jaikishore2026@gmail.com <ArrowUpRight size={17} /></a></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Subject<input name="subject" placeholder="What are we building?" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about it..." /></label><button className="button button-primary" type="submit">{formSent ? <>Opening mail <Check size={16} /></> : <>Send a message <Send size={16} /></>}</button></form></div></Reveal>
        </section>
      </main>

      <footer className="site-footer"><div><a className="brand-mark" href="#home"><span>JK</span><b>JAIKISHORE</b></a><p>Building the future with code &amp; vision.</p></div><div className="footer-links">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16} /> {label}</a>)}<a href="mailto:mailme.jaikishore2026@gmail.com"><Mail size={16} /> Email</a></div><small>© {new Date().getFullYear()} JAIKISHORE / ALL SYSTEMS BUILDING</small></footer>
      <div className="cursor-coordinates" aria-hidden="true">X {String(Math.round(cursor.x)).padStart(4, '0')} / Y {String(Math.round(cursor.y)).padStart(4, '0')}</div>
    </div>
  )
}
