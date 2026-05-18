'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

export default function Contact() {
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  return (
    <section id="contact" className="py-28 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-neon-cyan tracking-[0.3em] uppercase mb-2">// 05. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Let&apos;s <span className="text-neon-cyan">Talk</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-4 rounded" />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-14">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Have a project in mind?</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Whether you&apos;re looking to build something new, scale an existing product,
              or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-0 divide-y divide-white/6">
              {[
                { icon: FiMail,     label: 'jayden@azore.dev',          href: 'mailto:jayden@azore.dev' },
                { icon: FiLinkedin, label: 'linkedin.com/in/jaydenazore', href: '#' },
                { icon: FiGithub,   label: 'github.com/jaydenazore',     href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 py-3 text-sm text-slate-500 hover:text-neon-cyan transition-colors duration-200"
                >
                  <Icon className="text-neon-cyan shrink-0" />
                  {label}
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              {[
                { icon: FiGithub,   label: 'GitHub' },
                { icon: FiLinkedin, label: 'LinkedIn' },
                { icon: FiTwitter,  label: 'Twitter' },
                { icon: FaDiscord,  label: 'Discord' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500
                             bg-bg-secondary/80 border border-white/8
                             hover:text-neon-cyan hover:border-neon-cyan
                             hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]
                             hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8 rounded-2xl border border-neon-cyan/30
                                bg-neon-cyan/5 backdrop-blur-md">
                  <p className="text-3xl mb-3">✅</p>
                  <p className="text-neon-cyan font-semibold mb-1">Message sent!</p>
                  <p className="text-sm text-slate-500">I&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name"  type="text"  placeholder="Your name" />
                  <Field label="Email" type="email" placeholder="your@email.com" />
                </div>
                <Field label="Subject" type="text" placeholder="What's this about?" />
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.7rem] text-neon-cyan tracking-[0.1em] uppercase">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-bg-secondary/60 backdrop-blur-md border border-white/10 rounded-xl
                               px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600
                               focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20
                               transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3 rounded-lg font-semibold text-sm
                             bg-gradient-to-r from-neon-cyan to-blue-500 text-bg-primary
                             hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,245,255,0.4)]
                             disabled:opacity-60 transition-all duration-200"
                >
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[0.7rem] text-neon-cyan tracking-[0.1em] uppercase">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="bg-bg-secondary/60 backdrop-blur-md border border-white/10 rounded-xl
                   px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600
                   focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20
                   transition-all duration-200"
      />
    </div>
  )
}
