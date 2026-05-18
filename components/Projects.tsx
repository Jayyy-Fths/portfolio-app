'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaShieldAlt, FaCloud, FaGamepad, FaBook, FaCar, FaNewspaper, FaTrophy } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Project {
  num:    string
  icon:   IconType
  title:  string
  desc:   string
  stack:  string[]
  github: string
  live:   string
}

const projects: Project[] = [
  {
    num:    '01',
    icon:   FaShieldAlt,
    title:  'Army National Guard Website',
    desc:   'A TypeScript-powered website built for the Army National Guard, featuring a modern design and clean, accessible layout.',
    stack:  ['TypeScript', 'HTML', 'CSS'],
    github: 'https://github.com/Jayyy-Fths/Armynationalguardwebsite',
    live:   '#',
  },
  {
    num:    '02',
    icon:   FaCloud,
    title:  'Weather App',
    desc:   'A JavaScript weather application that fetches and displays current conditions and forecasts with a clean UI.',
    stack:  ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Jayyy-Fths/Weather',
    live:   '#',
  },
  {
    num:    '03',
    icon:   FaGamepad,
    title:  "Five Nights at Frank's",
    desc:   "A JavaScript horror survival game inspired by FNAF mechanics — built entirely in the browser with custom game logic.",
    stack:  ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Jayyy-Fths/Five-Nights-at-Frank-Gualteri-',
    live:   '#',
  },
  {
    num:    '04',
    icon:   FaBook,
    title:  'Miyamoto Musashi — The Legend',
    desc:   "Comprehensive website dedicated to the life, philosophy, and legacy of Japan's most famous swordsman. Covers his duels, art, and the Book of Five Rings.",
    stack:  ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Jayyy-Fths/Feb-Project',
    live:   '#',
  },
  {
    num:    '05',
    icon:   FaCar,
    title:  'Racer Man V3',
    desc:   'Browser-based racing game built in JavaScript. Third iteration of the Racer Man series with improved mechanics and visuals.',
    stack:  ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Jayyy-Fths/Racer-Man-V3',
    live:   '#',
  },
  {
    num:    '06',
    icon:   FaGamepad,
    title:  'Snaker',
    desc:   'Classic snake game recreated in the browser with smooth controls, score tracking, and increasing difficulty.',
    stack:  ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Jayyy-Fths/snaker',
    live:   '#',
  },
  {
    num:    '07',
    icon:   FaTrophy,
    title:  'Hackathon Project',
    desc:   'First version of a hackathon project — built under a time crunch with a focus on delivering a functional product fast.',
    stack:  ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Jayyy-Fths/Hackaton_Project',
    live:   '#',
  },
  {
    num:    '08',
    icon:   FaNewspaper,
    title:  'Columbine Media Coverage Analysis',
    desc:   'Research site analyzing how the media covered the Columbine shooting — examining perpetrator focus, criticism of glamorization, and its lasting influence.',
    stack:  ['HTML', 'CSS'],
    github: 'https://github.com/Jayyy-Fths/Columbine-School-Shooting-Media-Coverage-Analysis',
    live:   '#',
  },
]

function Tag({ label, variant = 'warm' }: { label: string; variant?: 'warm' | 'orange' }) {
  return (
    <span
      className={`font-mono text-[0.68rem] px-2.5 py-0.5 rounded
        ${variant === 'orange'
          ? 'bg-accent/10 text-accent border border-accent/20'
          : 'bg-accent-warm/10 text-accent-warm border border-accent-warm/20'
        }`}
    >
      {label}
    </span>
  )
}

function MockBrowser() {
  return (
    <div className="w-[90%] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      {/* Browser chrome */}
      <div className="h-8 bg-white/[0.04] border-b border-white/8 flex items-center px-3 gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <div className="flex-1 mx-3 h-5 rounded bg-white/5 flex items-center px-2">
          <span className="font-mono text-[0.58rem] text-slate-600">fank.app/dashboard</span>
        </div>
      </div>
      {/* Code content */}
      <div className="p-5 font-mono text-[0.7rem] leading-7 bg-black/30">
        <div>
          <span className="text-accent-violet">const</span>{' '}
          <span className="text-accent">fank</span>
          <span className="text-slate-500"> = {'{'}</span>
        </div>
        <div className="ml-4">
          <span className="text-slate-500">team:</span>{' '}
          <span className="text-accent-warm">4</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="ml-4">
          <span className="text-slate-500">timeLimit:</span>{' '}
          <span className="text-accent-warm">&quot;24h&quot;</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="ml-4">
          <span className="text-slate-500">result:</span>{' '}
          <span className="text-accent-emerald">&quot;Category Winner&quot;</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="ml-4">
          <span className="text-slate-500">stack:</span>{' '}
          <span className="text-accent-emerald">&quot;HTML/CSS/JS&quot;</span>
        </div>
        <div className="text-slate-500">{'}'}</div>
      </div>
    </div>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const Icon = project.icon
  return (
    <motion.div
      className="group relative bg-bg-secondary/60 backdrop-blur-md border border-white/[0.07] rounded-2xl p-7
                 hover:-translate-y-2 hover:border-accent/25
                 hover:shadow-[0_24px_50px_rgba(0,0,0,0.45),0_0_30px_rgba(249,115,22,0.08)]
                 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Animated top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-warm
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Large background number */}
      <span
        className="absolute bottom-4 right-5 font-black text-[4.5rem] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(255,255,255,0.025)' }}
      >
        {project.num}
      </span>

      <div className="flex justify-between items-start mb-5">
        <div className="w-11 h-11 flex items-center justify-center rounded-xl
                        bg-accent/10 border border-accent/20 text-accent text-lg
                        group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
          <Icon />
        </div>
        <div className="flex gap-3 text-slate-600">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="hover:text-accent hover:-translate-y-0.5 transition-all duration-200">
            <FiGithub size={17} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
             className="hover:text-accent hover:-translate-y-0.5 transition-all duration-200">
            <FiExternalLink size={17} />
          </a>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-accent/90 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{project.desc}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map(tag => <Tag key={tag} label={tag} />)}
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
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-2">// 03. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            What I&apos;ve <span className="text-accent">Built</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-accent-warm mx-auto mt-4 rounded" />
        </motion.div>

        {/* Featured project */}
        <motion.div
          className="group relative rounded-2xl overflow-hidden border border-white/[0.07]
                     hover:border-accent/25 mb-8
                     hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(249,115,22,0.08)]
                     transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Animated top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-warm
                          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

          <div className="grid md:grid-cols-[1.15fr_1fr]">
            {/* Visual panel */}
            <div
              className="hidden md:flex items-center justify-center min-h-[300px] border-r border-white/6"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 50%, rgba(249,115,22,0.07) 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.07) 0%, transparent 60%),
                  #161210
                `,
              }}
            >
              <MockBrowser />
            </div>

            {/* Content panel */}
            <div className="bg-bg-secondary/70 backdrop-blur-md p-8 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <p className="font-mono text-[0.68rem] text-accent tracking-[0.2em] uppercase">
                  Featured Project — Competition Winner
                </p>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">
                Fank — Coding Competition Winner
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                A webpage built with friends during a coding competition where we won a category.
                Designed and shipped under time pressure in a real competitive environment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['HTML', 'CSS', 'JavaScript'].map(t => (
                  <Tag key={t} label={t} variant="orange" />
                ))}
              </div>
              <div className="flex gap-5 text-sm text-slate-500">
                <a href="https://github.com/Jayyy-Fths/Fank" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
                  <FiGithub size={15} /> Source
                </a>
                <a href="#" className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
                  <FiExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
