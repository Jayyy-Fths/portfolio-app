'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '#about',      label: 'About',      num: '01.' },
  { href: '#skills',     label: 'Skills',     num: '02.' },
  { href: '#projects',   label: 'Projects',   num: '03.' },
  { href: '#experience', label: 'Experience', num: '04.' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
                  px-6 md:px-10 py-4 transition-all duration-400
                  ${scrolled ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-neon-cyan/10' : ''}`}
    >
      <a href="#hero" className="font-mono text-lg font-bold text-neon-cyan tracking-wide">
        &lt;<span className="text-slate-200">Jayden</span> /&gt;
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-slate-500
                         hover:text-neon-cyan transition-colors duration-200
                         before:content-[attr(data-num)] before:text-neon-cyan before:mr-1.5 before:text-[0.65rem]"
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
                       border border-neon-cyan text-neon-cyan rounded
                       hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)]
                       transition-all duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-bg-primary/97 backdrop-blur-2xl
                    border-l border-neon-cyan/10 flex flex-col pt-20 px-8 gap-6
                    transition-transform duration-300 z-[999]
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {[...links, { href: '#contact', label: 'Contact', num: '05.' }].map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-mono text-sm text-slate-400 hover:text-neon-cyan transition-colors"
          >
            <span className="text-neon-cyan mr-2">{l.num}</span>{l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
