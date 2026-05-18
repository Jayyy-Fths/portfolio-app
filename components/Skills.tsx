'use client'

import { motion } from 'framer-motion'

interface Skill { name: string; pct: number }
interface Category { title: string; skills: Skill[]; tags: string[] }

const categories: Category[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js',  pct: 92 },
      { name: 'TypeScript',       pct: 88 },
      { name: 'CSS / Tailwind',   pct: 95 },
    ],
    tags: ['Vue 3', 'Svelte', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', pct: 90 },
      { name: 'Python / FastAPI',  pct: 82 },
      { name: 'REST & GraphQL',    pct: 87 },
    ],
    tags: ['WebSockets', 'tRPC', 'Prisma', 'Auth.js'],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'PostgreSQL / MongoDB',    pct: 85 },
      { name: 'Docker / CI/CD',          pct: 80 },
      { name: 'AWS / Vercel / Supabase', pct: 78 },
    ],
    tags: ['Redis', 'Kubernetes', 'GitHub Actions', 'Terraform'],
  },
]

function SkillBar({ name, pct, delay }: Skill & { delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-neon-cyan">{pct}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple
                     shadow-[0_0_8px_rgba(0,245,255,0.4)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-2">// 02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Tech <span className="text-neon-cyan">Stack</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-4 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="bg-bg-secondary/60 backdrop-blur-md border border-white/8 rounded-2xl p-7
                         hover:border-neon-cyan/25 hover:shadow-[0_0_30px_rgba(0,245,255,0.04)]
                         transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <p className="font-mono text-[0.7rem] text-neon-cyan tracking-[0.2em] uppercase
                            pb-3 mb-5 border-b border-white/8">
                {cat.title}
              </p>

              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} delay={si * 0.1 + ci * 0.05} />
              ))}

              <div className="flex flex-wrap gap-2 mt-4">
                {cat.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full
                               bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20
                               hover:bg-neon-cyan/20 hover:-translate-y-0.5
                               transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
