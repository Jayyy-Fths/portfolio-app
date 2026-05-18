'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const PHRASES = [
  'scalable web apps.',
  'beautiful UIs.',
  'fast REST APIs.',
  'full-stack products.',
  'things that matter.',
]

function useTypewriter() {
  const [text, setText]  = useState('')
  const stateRef         = useRef({ phrase: 0, char: 0, deleting: false })

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const s       = stateRef.current
      const current = PHRASES[s.phrase]

      if (!s.deleting) {
        s.char++
        setText(current.slice(0, s.char))
        if (s.char === current.length) {
          s.deleting = true
          timeout    = setTimeout(tick, 1800)
          return
        }
      } else {
        s.char--
        setText(current.slice(0, s.char))
        if (s.char === 0) {
          s.deleting = false
          s.phrase   = (s.phrase + 1) % PHRASES.length
        }
      }
      timeout = setTimeout(tick, s.deleting ? 50 : 80)
    }

    timeout = setTimeout(tick, 600)
    return () => clearTimeout(timeout)
  }, [])

  return text
}

export default function Hero() {
  const typed        = useTypewriter()
  const containerRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springCfg = { damping: 40, stiffness: 80 }
  const sx = useSpring(rawX, springCfg)
  const sy = useSpring(rawY, springCfg)

  const g1x = useTransform(sx, [-0.5, 0.5], [30, -30])
  const g1y = useTransform(sy, [-0.5, 0.5], [30, -30])
  const g2x = useTransform(sx, [-0.5, 0.5], [-30, 30])
  const g2y = useTransform(sy, [-0.5, 0.5], [-30, 30])

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      rawX.set((e.clientX - rect.left) / rect.width - 0.5)
      rawY.set((e.clientY - rect.top)  / rect.height - 0.5)
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [rawX, rawY])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* CSS grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* Parallax gradient glows */}
      <motion.div
        style={{ x: g1x, y: g1y }}
        className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] rounded-full
                   bg-accent/[0.045] blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{ x: g2x, y: g2y }}
        className="absolute -bottom-1/3 -left-1/4 w-[650px] h-[650px] rounded-full
                   bg-accent-violet/[0.045] blur-[120px] pointer-events-none"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_50%,transparent_35%,var(--color-bg-primary)_100%)]" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl px-6">

        {/* Availability badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full
                     border border-accent-emerald/25 bg-accent-emerald/8 cursor-default"
          initial={{ opacity: 0, y: -16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0,   scale: 1    }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping-slow absolute inset-0 rounded-full bg-accent-emerald" />
            <span className="relative rounded-full h-2 w-2 bg-accent-emerald" />
          </span>
          <span className="font-mono text-[0.68rem] text-accent-emerald tracking-[0.18em] uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* Role label */}
        <motion.p
          className="font-mono text-sm text-accent/70 tracking-[0.28em] uppercase mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Full-Stack Developer &amp; Builder
        </motion.p>

        {/* Name */}
        <motion.h1
          className="leading-[0.87] mb-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-[clamp(3.6rem,10.5vw,9.5rem)] font-black text-slate-100 tracking-[-0.03em]">
            Jayden N. B.
          </span>
          <span
            className="block text-[clamp(3.6rem,10.5vw,9.5rem)] font-black tracking-[-0.03em] text-accent"
            style={{ textShadow: '0 0 80px rgba(249,115,22,0.28), 0 0 160px rgba(249,115,22,0.1)' }}
          >
            Azore
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          className="text-[clamp(1rem,2.4vw,1.25rem)] text-slate-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          I build{' '}
          <span className="font-mono text-accent">{typed}</span>
          <span className="inline-block w-0.5 h-[1.1em] bg-accent align-text-bottom ml-0.5 animate-blink" />
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <a
            href="#projects"
            className="relative px-8 py-3.5 rounded-lg font-bold text-sm overflow-hidden
                       bg-accent text-white
                       hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(249,115,22,0.55)]
                       transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg font-medium text-sm
                       border border-white/12 text-slate-300
                       hover:border-accent/40 hover:text-accent hover:bg-accent/5
                       hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]
                       transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="block w-14 h-px bg-gradient-to-r from-transparent to-white/10" />
          {[
            { Icon: FiGithub,   label: 'GitHub',   href: 'https://github.com/Jayyy-Fths' },
            { Icon: FiLinkedin, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/jayden-azore-55a22b40b/' },
            { Icon: FiTwitter,  label: 'Twitter',   href: '#' },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href !== '#' ? '_blank' : undefined}
              rel={href !== '#' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-slate-600 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
          <span className="block w-14 h-px bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-mono text-[0.65rem] text-slate-600 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  )
}
