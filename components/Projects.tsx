'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaDatabase, FaShieldAlt, FaChartLine, FaRobot, FaCode } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Project {
  icon:  IconType
  title: string
  desc:  string
  stack: string[]
  github: string
  live:   string
}

const projects: Project[] = [
  {
    icon:   FaDatabase,
    title:  'QuantumDB Visualizer',
    desc:   'Interactive schema visualizer with query performance analysis, index suggestions, and slow-query detection. Supports PostgreSQL, MySQL, and MongoDB.',
    stack:  ['Vue 3', 'Python', 'FastAPI', 'D3.js'],
    github: '#',
    live:   '#',
  },
  {
    icon:   FaShieldAlt,
    title:  'ShieldAuth Microservice',
    desc:   'Zero-dependency OAuth 2.0 / JWT auth microservice with role-based access control, refresh token rotation, and full audit logging.',
    stack:  ['Node.js', 'Redis', 'Docker', 'JWT'],
    github: '#',
    live:   '#',
  },
  {
    icon:   FaChartLine,
    title:  'PulseMetrics Dashboard',
    desc:   'Real-time analytics with customizable widgets, funnel analysis, cohort tracking, and AI-generated traffic summaries.',
    stack:  ['Next.js', 'MongoDB', 'D3.js', 'Tailwind'],
    github: '#',
    live:   '#',
  },
  {
    icon:   FaRobot,
    title:  'DevGPT CLI Assistant',
    desc:   'Terminal-based AI coding assistant. Reads your codebase, explains functions, suggests refactors, and generates boilerplate — without leaving the terminal.',
    stack:  ['Python', 'Claude API', 'Rich', 'Click'],
    github: '#',
    live:   '#',
  },
]

function MockBrowser() {
  return (
    <div className="w-4/5 bg-black/60 border border-white/10 rounded-lg overflow-hidden">
      <div className="h-7 bg-white/3 border-b border-white/8 flex items-center px-3 gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      </div>
      <div className="p-4 font-mono text-[0.62rem] text-neon-cyan leading-7">
        <div><span className="text-neon-purple">const</span> nexaflow = {'{'}</div>
        <div>&nbsp;&nbsp;users: <span className="text-amber-400">12_450</span>,</div>
        <div>&nbsp;&nbsp;rooms: <span className="text-amber-400">3_200</span>,</div>
        <div>&nbsp;&nbsp;messages: <span className="text-amber-400">1_890_000</span></div>
        <div>{'}'}</div>
        <div className="text-slate-600">&nbsp;</div>
        <div><span className="text-neon-purple">socket</span>.on(<span className="text-green-400">&apos;message&apos;</span>, live)</div>
      </div>
    </div>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const Icon = project.icon
  return (
    <motion.div
      className="group relative bg-bg-secondary/60 backdrop-blur-md border border-white/8 rounded-2xl p-7
                 hover:-translate-y-1.5 hover:border-neon-cyan/30
                 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(0,245,255,0.05)]
                 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      <div className="flex justify-between items-start mb-5">
        <div className="w-11 h-11 flex items-center justify-center rounded-xl
                        bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-lg">
          <Icon />
        </div>
        <div className="flex gap-3 text-slate-500">
          <a href={project.github} className="hover:text-neon-cyan hover:-translate-y-0.5 transition-all duration-200">
            <FiGithub size={17} />
          </a>
          <a href={project.live} className="hover:text-neon-cyan hover:-translate-y-0.5 transition-all duration-200">
            <FiExternalLink size={17} />
          </a>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{project.desc}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map(tag => (
          <span key={tag}
            className="font-mono text-[0.68rem] px-2 py-0.5 rounded
                       bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-2">// 03. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            What I&apos;ve <span className="text-neon-cyan">Built</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-4 rounded" />
        </motion.div>

        {/* Featured */}
        <motion.div
          className="group relative grid md:grid-cols-[1.1fr_1fr] rounded-2xl overflow-hidden
                     border border-white/8 hover:border-neon-cyan/30 mb-6
                     hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,245,255,0.06)]
                     transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Image panel */}
          <div className="hidden md:flex items-center justify-center
                          bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5
                          min-h-[280px] border-r border-white/8">
            <MockBrowser />
          </div>

          {/* Content panel */}
          <div className="bg-bg-secondary/60 backdrop-blur-md p-8 flex flex-col justify-center">
            <p className="font-mono text-[0.68rem] text-neon-cyan tracking-[0.2em] uppercase mb-2">
              ⭐ Featured Project
            </p>
            <h3 className="text-xl font-semibold text-slate-100 mb-3">NexaFlow — Real-Time Collab</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Full-stack real-time collaboration platform: live document editing, team chat,
              and presence indicators. Handles 10k+ concurrent WebSocket connections with
              sub-50ms latency.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'].map(t => (
                <span key={t} className="font-mono text-[0.68rem] px-2 py-0.5 rounded
                                         bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-5 text-sm text-slate-500">
              <a href="#" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors duration-200">
                <FiGithub /> Source
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors duration-200">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>

          {/* Top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple
                          scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
