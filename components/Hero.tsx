'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const PHRASES = [
  'scalable web apps.',
  'beautiful UIs.',
  'fast REST APIs.',
  'full-stack products.',
  'things that matter.',
]

function useTypewriter() {
  const [text, setText]     = useState('')
  const stateRef            = useRef({ phrase: 0, char: 0, deleting: false })

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
          timeout = setTimeout(tick, 1800)
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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const typed     = useTypewriter()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let mx = -999, my = -999

    interface Particle {
      x: number; y: number; vx: number; vy: number
      r: number; a: number
    }
    let particles: Particle[] = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 11000), 130)
      particles   = Array.from({ length: count }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r:  Math.random() * 1.5 + 0.5,
        a:  Math.random() * 0.45 + 0.15,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Subtle grid
      ctx.strokeStyle = 'rgba(0,245,255,0.025)'
      ctx.lineWidth   = 1
      for (let x = 0; x < canvas.width;  x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke() }
      for (let y = 0; y < canvas.height; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke() }

      // Particles
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${p.a})`
        ctx.fill()
      }

      // Connections
      const maxD = 130
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < maxD) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,245,255,${(1 - d / maxD) * 0.2})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
        const mdx = particles[i].x - mx
        const mdy = particles[i].y - my
        const md  = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 180) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(0,245,255,${(1 - md / 180) * 0.55})`
          ctx.lineWidth   = 0.8
          ctx.stroke()
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    const onMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    resize()
    draw()
    window.addEventListener('resize',    resize)
    window.addEventListener('mousemove', onMouse)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize',    resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020408_100%)]" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p
          className="font-mono text-sm text-neon-cyan tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          // Full-Stack Developer &amp; Builder
        </motion.p>

        <motion.h1
          className="leading-none mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-[clamp(2.8rem,7vw,6rem)] font-bold text-slate-100 tracking-tight">
            Jayden N. B.
          </span>
          <span
            className="glitch block text-[clamp(2.8rem,7vw,6rem)] font-bold text-neon-cyan tracking-tight
                       [text-shadow:0_0_30px_rgba(0,245,255,0.5),0_0_60px_rgba(0,245,255,0.2)]"
            data-text="Azore"
          >
            Azore
          </span>
        </motion.h1>

        <motion.p
          className="text-[clamp(1rem,2.5vw,1.25rem)] text-slate-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          I build{' '}
          <span className="font-mono text-neon-cyan">{typed}</span>
          <span className="inline-block w-0.5 h-[1.1em] bg-neon-cyan align-text-bottom ml-0.5 animate-blink" />
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-md font-semibold text-sm bg-gradient-to-r from-neon-cyan to-blue-500
                       text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,245,255,0.4)]
                       transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-md font-medium text-sm border border-white/15 text-slate-300
                       hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]
                       transition-all duration-200"
          >
            Get In Touch
          </a>
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
        <div className="w-px h-12 bg-gradient-to-b from-neon-cyan to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  )
}
