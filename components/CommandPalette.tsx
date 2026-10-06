import React, { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, Command, Moon, Search, Sun, Terminal, X, Zap } from 'lucide-react'

export type PaletteAction = { id: string; label: string; detail: string; icon: React.ElementType; run: () => void }

type CommandPaletteProps = { onThemeToggle: () => void; theme: 'obsidian' | 'aurora' }

export default function CommandPalette({ onThemeToggle, theme }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const actions = useMemo<PaletteAction[]>(() => [
    { id: 'home', label: 'Go to home', detail: 'Jump to the command center', icon: Terminal, run: () => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'network', label: 'Open network canvas', detail: 'Explore strategy, execution, and growth', icon: Zap, run: () => document.querySelector('#network')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'proof', label: 'View proof over percentages', detail: 'Inspect code and micro-case studies', icon: Command, run: () => document.querySelector('#proof')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'projects', label: 'Open selected projects', detail: 'Landsora and Falkon Labs', icon: ArrowUpRight, run: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'theme', label: theme === 'obsidian' ? 'Switch to aurora theme' : 'Switch to obsidian theme', detail: 'Change the interface atmosphere', icon: theme === 'obsidian' ? Sun : Moon, run: onThemeToggle },
    { id: 'github', label: 'Launch GitHub', detail: 'Open Jaikishore on GitHub', icon: ArrowUpRight, run: () => window.open('https://github.com/jaikishore2026-max', '_blank', 'noopener,noreferrer') },
  ], [onThemeToggle, theme])

  const filtered = actions.filter((action) => `${action.label} ${action.detail}`.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(true); setQuery(''); setActive(0) }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') { event.preventDefault(); setActive((value) => Math.min(value + 1, Math.max(filtered.length - 1, 0))) }
      if (event.key === 'ArrowUp') { event.preventDefault(); setActive((value) => Math.max(value - 1, 0)) }
      if (event.key === 'Enter' && filtered[active]) { event.preventDefault(); filtered[active].run(); setOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, filtered, open])

  return <>
    <button className="palette-trigger" onClick={() => setOpen(true)} aria-label="Open command palette"><Search size={14} /><span>Search</span><kbd>⌘ K</kbd></button>
    {open && <div className="palette-backdrop" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={() => setOpen(false)}>
      <div className="command-palette" onMouseDown={(event) => event.stopPropagation()}>
        <div className="palette-search"><Search size={18} /><input autoFocus value={query} onChange={(event) => { setQuery(event.target.value); setActive(0) }} placeholder="Search the interface..." /><button onClick={() => setOpen(false)} aria-label="Close command palette"><X size={17} /></button></div>
        <div className="palette-list">{filtered.length ? filtered.map((action, index) => { const Icon = action.icon; return <button key={action.id} className={`palette-item ${active === index ? 'is-active' : ''}`} onMouseEnter={() => setActive(index)} onClick={() => { action.run(); setOpen(false) }}><Icon size={16} /><span><b>{action.label}</b><small>{action.detail}</small></span><ArrowUpRight size={14} /></button> }) : <div className="palette-empty">No command matches that query.</div>}</div>
        <div className="palette-footer"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> select</span><span><kbd>esc</kbd> close</span></div>
      </div>
    </div>}
  </>
}
