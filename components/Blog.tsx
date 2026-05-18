'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi'

const articles = [
  {
    category: 'Dev Log',
    title:    'Building My First Game in Pure JavaScript',
    excerpt:  'How I built Five Nights at Frank\'s — from game loop basics to managing state without a framework.',
    readTime: '5 min read',
    date:     'Mar 2025',
    href:     'https://github.com/Jayyy-Fths/Jayyy-s_Articles',
  },
  {
    category: 'Experience',
    title:    'What I Learned Winning a Coding Competition',
    excerpt:  'The Fank project: what went right, what almost went wrong, and why time pressure makes you a better developer.',
    readTime: '4 min read',
    date:     'Feb 2025',
    href:     'https://github.com/Jayyy-Fths/Jayyy-s_Articles',
  },
  {
    category: 'Tutorial',
    title:    'CSS Grid vs Flexbox: When to Use Which',
    excerpt:  'After using both in dozens of projects, here\'s my practical breakdown — no fluff, just when each one actually shines.',
    readTime: '6 min read',
    date:     'Jan 2025',
    href:     'https://github.com/Jayyy-Fths/Jayyy-s_Articles',
  },
]

const categoryColors: Record<string, string> = {
  'Dev Log':   'bg-accent/10 text-accent border-accent/20',
  'Experience': 'bg-accent-violet/10 text-accent-violet border-accent-violet/20',
  'Tutorial':  'bg-accent-warm/10 text-accent-warm border-accent-warm/20',
}

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-2">{'// 06. Articles'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Latest <span className="text-accent">Writing</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-accent-warm mx-auto mt-4 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7
                         hover:border-accent/25 hover:-translate-y-1
                         hover:shadow-[0_16px_40px_rgba(249,115,22,0.08)]
                         transition-all duration-300 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Animated top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-warm
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

              {/* Category tag */}
              <span
                className={`self-start font-mono text-[0.68rem] px-2.5 py-0.5 rounded border
                            ${categoryColors[article.category] ?? 'bg-white/5 text-slate-400 border-white/10'}`}
              >
                {article.category}
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-100 leading-snug
                             group-hover:text-accent transition-colors duration-300 flex-1">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-600 font-mono">
                <span className="flex items-center gap-1.5">
                  <FiClock size={11} />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={11} />
                  {article.date}
                </span>
              </div>

              {/* Read more */}
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-accent/70
                           hover:text-accent transition-colors duration-200 mt-1 group/link"
              >
                Read More
                <FiArrowRight
                  size={14}
                  className="group-hover/link:translate-x-0.5 transition-transform duration-200"
                />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
