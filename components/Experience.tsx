'use client'

import { motion } from 'framer-motion'

const experience = [
  {
    date:    '2023 — Present',
    role:    'Senior Full-Stack Developer',
    company: 'TechForward Inc.',
    badge:   'TF',
    desc:    'Leading a 4-person team building a B2B SaaS platform. Architected a microservices migration from a 200k-line monolith, reducing deploy times by 70% and improving uptime to 99.97%.',
    tags:    ['React', 'Node.js', 'Kubernetes', 'PostgreSQL'],
  },
  {
    date:    '2021 — 2023',
    role:    'Full-Stack Developer',
    company: 'NovaBuild Digital Agency',
    badge:   'NB',
    desc:    'Delivered 12+ client projects from wireframe to production. Specialized in performance — consistently hitting 95+ Lighthouse scores and sub-2s LCP across all projects.',
    tags:    ['Next.js', 'TypeScript', 'Tailwind', 'AWS'],
  },
  {
    date:    '2020 — 2021',
    role:    'Frontend Developer',
    company: 'OpenStack Labs',
    badge:   'OS',
    desc:    'Started as a UI intern, promoted to junior developer within 5 months. Built the company design system from scratch — adopted across 8 internal products.',
    tags:    ['React', 'CSS', 'Figma', 'Storybook'],
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
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px"
               style={{ background: 'linear-gradient(to bottom, #00f5ff40, #a855f740, transparent)' }} />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative flex gap-6 mb-10 last:mb-0"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Company badge / dot */}
              <div className="relative shrink-0 mt-1">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center
                                font-mono text-[0.65rem] font-bold text-neon-cyan
                                bg-bg-primary border border-neon-cyan/25
                                shadow-[0_0_14px_rgba(0,245,255,0.15)]">
                  {job.badge}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-10 last:pb-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <p className="font-mono text-xs text-neon-cyan/70 tracking-wider">{job.date}</p>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 leading-snug">{job.role}</h3>
                <p className="text-sm font-medium text-slate-500 mb-3">{job.company}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[0.65rem] px-2 py-0.5 rounded
                                 bg-white/[0.04] border border-white/8 text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
