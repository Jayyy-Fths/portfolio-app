'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref    = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let n = 0
    const step     = Math.ceil(target / 40)
    const interval = setInterval(() => {
      n = Math.min(n + step, target)
      setCount(n)
      if (n >= target) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl font-bold font-mono text-neon-cyan
                               [text-shadow:0_0_20px_rgba(0,245,255,0.4)]">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 30,  suffix: '+', label: 'Projects Shipped' },
  { value: 4,   suffix: '+', label: 'Years Experience' },
  { value: 15,  suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Committed' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-2">// 01. About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Who I <span className="text-neon-cyan">Am</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-4 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Bio */}
          <motion.div
            className="space-y-5 text-slate-400 leading-relaxed"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Hey, I&apos;m{' '}
              <strong className="text-neon-cyan font-semibold">Jayden N. B. Azore</strong> — a
              full-stack developer who turns complex problems into clean, performant, and
              beautiful digital experiences.
            </p>
            <p>
              I work across the entire stack: crafting responsive frontends with{' '}
              <strong className="text-slate-200">React &amp; TypeScript</strong>, building
              scalable APIs with{' '}
              <strong className="text-slate-200">Node.js &amp; Python</strong>, and
              architecting databases that handle real production loads.
            </p>
            <p>
              My philosophy:{' '}
              <strong className="text-slate-200">code should be readable, maintainable, and fast</strong>.
              I care deeply about developer experience and end-user experience in equal
              measure.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-bg-secondary/60 backdrop-blur-md border border-white/8
                           rounded-xl p-6 text-center
                           hover:border-neon-cyan/30 hover:-translate-y-1
                           hover:shadow-[0_8px_30px_rgba(0,245,255,0.08)]
                           transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Counter target={s.value} suffix={s.suffix} />
                <p className="text-xs text-slate-600 tracking-wider uppercase mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
