'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiArrowRight } from 'react-icons/fi'
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
    <section id="contact" className="py-28 bg-bg-secondary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                        bg-neon-cyan/[0.035] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

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
            Let&apos;s <span className="text-neon-cyan">Build</span> Together
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-4 rounded" />
          <p className="text-slate-500 text-sm mt-5 max-w-md mx-auto leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Direct contact */}
            <div>
              <p className="font-mono text-[0.7rem] text-neon-cyan/60 tracking-[0.2em] uppercase mb-4">
                Reach out directly
              </p>
              <div className="space-y-1">
                {[
                  { Icon: FiMail,     label: 'jayden@azore.dev',           href: 'mailto:jayden@azore.dev' },
                  { Icon: FiLinkedin, label: 'linkedin.com/in/jaydenazore', href: '#' },
                  { Icon: FiGithub,   label: 'github.com/jaydenazore',      href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-slate-500
                               hover:text-neon-cyan hover:bg-neon-cyan/5
                               transition-all duration-200 group"
                  >
                    <Icon className="text-neon-cyan shrink-0" size={15} />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="font-mono text-[0.7rem] text-neon-cyan/60 tracking-[0.2em] uppercase mb-4">
                Find me online
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: FiGithub,   label: 'GitHub'   },
                  { Icon: FiLinkedin, label: 'LinkedIn' },
                  { Icon: FiTwitter,  label: 'Twitter'  },
                  { Icon: FaDiscord,  label: 'Discord'  },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500
                               border border-white/8 bg-bg-primary/60
                               hover:text-neon-cyan hover:border-neon-cyan/30
                               hover:shadow-[0_0_16px_rgba(0,245,255,0.2)]
                               hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-2.5 text-xs text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inset-0 rounded-full bg-neon-emerald" />
                <span className="relative rounded-full h-2 w-2 bg-neon-emerald" />
              </span>
              Usually responds within 24 hours
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
                <div className="text-center p-10 rounded-2xl border border-neon-cyan/25
                                bg-neon-cyan/[0.04] backdrop-blur-md">
                  <div className="w-14 h-14 rounded-full bg-neon-emerald/15 border border-neon-emerald/30
                                  flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <p className="text-lg font-semibold text-slate-100 mb-1">Message sent!</p>
                  <p className="text-sm text-slate-500">I&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name"  type="text"  placeholder="Your name" />
                  <Field label="Email" type="email" placeholder="your@email.com" />
                </div>
                <Field label="Subject" type="text" placeholder="What&apos;s this about?" />
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.7rem] text-neon-cyan/70 tracking-[0.15em] uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-bg-primary/60 backdrop-blur-md border border-white/8 rounded-xl
                               px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700
                               focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/15
                               transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm
                             bg-neon-cyan text-bg-primary
                             hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,245,255,0.45)]
                             disabled:opacity-60 transition-all duration-200 group"
                >
                  {loading ? 'Sending…' : (
                    <>
                      Send Message
                      <FiArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </>
                  )}
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
      <label className="font-mono text-[0.7rem] text-neon-cyan/70 tracking-[0.15em] uppercase">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="bg-bg-primary/60 backdrop-blur-md border border-white/8 rounded-xl
                   px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700
                   focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/15
                   transition-all duration-200"
      />
    </div>
  )
}
