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
    <span ref={ref} className="text-3xl font-black font-mono text-accent"
          style={{ textShadow: '0 0 20px rgba(249,115,22,0.35)' }}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 30,  suffix: '+', label: 'Projects Shipped' },
  { value: 4,   suffix: '+', label: 'Years Experience' },
  { value: 15,  suffix: '+', label: 'Technologies'     },
  { value: 100, suffix: '%', label: 'Committed'        },
]

const codeLines = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'name', v: 'jayden' }, { t: 'plain', v: ' = {' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  name:      ' }, { t: 'str', v: '"Jayden N. B. Azore"' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  role:      ' }, { t: 'str', v: '"Full-Stack Developer"' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  location:  ' }, { t: 'str', v: '"Remote-first"' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  focus:     ' }, { t: 'bracket', v: '[' }] },
  { indent: 2, tokens: [{ t: 'str', v: '    "Performance"' }, { t: 'plain', v: ', ' }, { t: 'str', v: '"Clean code"' }, { t: 'plain', v: ',' }] },
  { indent: 2, tokens: [{ t: 'str', v: '    "Developer UX"' }, { t: 'plain', v: ', ' }, { t: 'str', v: '"Product thinking"' }] },
  { indent: 1, tokens: [{ t: 'bracket', v: '  ]' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: '  status:    ' }, { t: 'emerald', v: '"open_to_opportunities"' }, { t: 'plain', v: ',' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '}' }] },
]

const tokenColor: Record<string, string> = {
  keyword:  '#f97316',
  name:     '#e2e8f0',
  key:      '#94a3b8',
  str:      '#fbbf24',
  emerald:  '#34d399',
  bracket:  '#94a3b8',
  plain:    '#64748b',
}

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
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-2">{'// 01. About Me'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Who I <span className="text-accent">Am</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-accent-warm mx-auto mt-4 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Terminal code card */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/[0.07]
                       bg-bg-primary/80 backdrop-blur-md
                       hover:border-accent/20 transition-colors duration-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/6">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="font-mono text-[0.65rem] text-slate-600 ml-2 tracking-wide">
                jayden.config.ts
              </span>
            </div>

            {/* Code lines */}
            <div className="p-5 font-mono text-[0.75rem] leading-7 select-none">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                >
                  <span className="text-slate-700 w-6 shrink-0 text-right mr-4 select-none">{i + 1}</span>
                  <span>
                    {line.tokens.map((tok, ti) => (
                      <span key={ti} style={{ color: tokenColor[tok.t] }}>{tok.v}</span>
                    ))}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats + bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Bio text */}
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm mb-8">
              <p>
                I&apos;m a full-stack developer who turns complex problems into clean, performant, and
                beautiful digital experiences. I care about the craft — every component, every API,
                every pixel.
              </p>
              <p>
                I work across the full stack: responsive frontends with{' '}
                <strong className="text-slate-200">React &amp; TypeScript</strong>, scalable APIs with{' '}
                <strong className="text-slate-200">Node.js &amp; Python</strong>, and databases that
                handle real production loads without breaking a sweat.
              </p>
              <p>
                My philosophy:{' '}
                <strong className="text-slate-200">readable code, fast systems, and products people love.</strong>
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="rounded-xl p-5 text-center border border-white/[0.07] bg-bg-primary/60
                             hover:border-accent/25 hover:-translate-y-0.5
                             hover:shadow-[0_8px_30px_rgba(249,115,22,0.08)]
                             transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Counter target={s.value} suffix={s.suffix} />
                  <p className="text-[0.68rem] text-slate-600 tracking-wider uppercase mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
