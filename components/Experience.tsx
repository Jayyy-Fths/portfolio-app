'use client'

import { motion } from 'framer-motion'

const experience = [
  {
    date:    '2023 — Present',
    role:    'Senior Full-Stack Developer',
    company: 'TechForward Inc.',
    desc:    'Leading a 4-person team building a B2B SaaS platform. Architected a microservices migration from a 200k-line monolith, reducing deploy times by 70% and improving uptime to 99.97%.',
  },
  {
    date:    '2021 — 2023',
    role:    'Full-Stack Developer',
    company: 'NovaBuild Digital Agency',
    desc:    'Delivered 12+ client projects from wireframe to production. Specialized in performance — consistently hitting 95+ Lighthouse scores and sub-2s LCP across all projects.',
  },
  {
    date:    '2020 — 2021',
    role:    'Frontend Developer',
    company: 'OpenStack Labs',
    desc:    'Started as a UI intern, promoted to junior developer within 5 months. Built the company design system from scratch — adopted across 8 internal products.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-2">// 04. Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Where I&apos;ve <span className="text-neon-cyan">Worked</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-4 rounded" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative pl-10 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Dot */}
              <span className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-bg-primary
                               border-2 border-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.5)]" />

              <p className="font-mono text-xs text-neon-cyan tracking-wider mb-1">{job.date}</p>
              <h3 className="text-lg font-semibold text-slate-100">{job.role}</h3>
              <p className="text-sm text-slate-500 mb-2">{job.company}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
