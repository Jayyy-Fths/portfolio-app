'use client'

import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const links = [
  { href: '#about',        label: 'About',        num: '01.' },
  { href: '#skills',       label: 'Skills',       num: '02.' },
  { href: '#projects',     label: 'Projects',     num: '03.' },
  { href: '#experience',   label: 'Experience',   num: '04.' },
  { href: '#testimonials', label: 'Testimonials', num: '05.' },
  { href: '#blog',         label: 'Blog',         num: '06.' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [theme, setTheme]       = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    const initial = stored ?? 'dark'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const isDark = theme === 'dark'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
                  px-6 md:px-10 py-4 transition-all duration-400
                  ${scrolled
                    ? isDark
                      ? 'bg-[#0d0b0a]/85 backdrop-blur-xl border-b border-[#f97316]/10'
                      : 'bg-[#faf9f7]/90 backdrop-blur-xl border-b border-[#f97316]/15'
                    : ''}`}
    >
      <a href="#hero" className="font-mono text-lg font-bold text-accent tracking-wide">
        &lt;<span className={isDark ? 'text-slate-200' : 'text-stone-800'}>Jayden</span> /&gt;
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200
                          hover:text-accent
                          before:content-[attr(data-num)] before:text-accent before:mr-1.5 before:text-[0.65rem]
                          ${isDark ? 'text-slate-500' : 'text-stone-500'}`}
              data-num={l.num}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2
                       border border-accent text-accent rounded
                       hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.25)]
                       transition-all duration-200"
          >
            07. Contact
          </a>
        </li>
        {/* Theme toggle */}
        <li>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200
                        hover:text-accent hover:border-accent/40
                        ${isDark
                          ? 'border-white/10 text-slate-400'
                          : 'border-stone-300 text-stone-500'}`}
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200
                      hover:text-accent hover:border-accent/40
                      ${isDark ? 'border-white/10 text-slate-400' : 'border-stone-300 text-stone-500'}`}
        >
          {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
        </button>
        <button
          className="flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 backdrop-blur-2xl
                    border-l border-accent/10 flex flex-col pt-20 px-8 gap-6
                    transition-transform duration-300 z-[999]
                    ${isDark ? 'bg-[#0d0b0a]/97' : 'bg-[#faf9f7]/97'}
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {[...links, { href: '#contact', label: 'Contact', num: '07.' }].map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`font-mono text-sm hover:text-accent transition-colors
                        ${isDark ? 'text-slate-400' : 'text-stone-500'}`}
          >
            <span className="text-accent mr-2">{l.num}</span>{l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
