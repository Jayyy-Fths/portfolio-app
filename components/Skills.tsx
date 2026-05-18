'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    num:   '01',
    title: 'Frontend',
    sub:   'Crafting interfaces',
    items: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'Framer Motion', 'Vue 3', 'Svelte', 'Three.js',
      'CSS / SASS', 'Figma',
    ],
  },
  {
    num:   '02',
    title: 'Backend',
    sub:   'Powering systems',
    items: [
      'Node.js', 'Express', 'Python', 'FastAPI',
      'tRPC', 'GraphQL', 'REST APIs', 'WebSockets',
      'Prisma', 'Auth.js',
    ],
  },
  {
    num:   '03',
    title: 'Infrastructure',
    sub:   'Scaling reliably',
    items: [
      'PostgreSQL', 'MongoDB', 'Redis', 'Docker',
      'AWS', 'Vercel', 'Supabase', 'GitHub Actions',
      'Kubernetes', 'Terraform',
    ],
  },
]

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
              className="relative bg-bg-secondary/60 backdrop-blur-md border border-white/8 rounded-2xl p-7
                         hover:border-neon-cyan/20 hover:shadow-[0_0_40px_rgba(0,245,255,0.04)]
                         transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              {/* Large background number */}
              <span
                className="absolute top-3 right-5 font-black text-[5.5rem] leading-none select-none pointer-events-none"
                style={{ color: 'rgba(0,245,255,0.035)' }}
              >
                {cat.num}
              </span>

              {/* Category header */}
              <div className="mb-6">
                <p className="font-mono text-[0.68rem] text-neon-cyan/60 tracking-[0.25em] uppercase mb-1">
                  {cat.sub}
                </p>
                <h3 className="text-xl font-bold text-slate-100">{cat.title}</h3>
                <div className="mt-3 h-px bg-gradient-to-r from-neon-cyan/20 to-transparent" />
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 rounded-lg font-mono text-[0.72rem]
                               bg-white/[0.04] border border-white/8 text-slate-400
                               hover:bg-neon-cyan/10 hover:border-neon-cyan/25 hover:text-neon-cyan
                               hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + ii * 0.04 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
