'use client'

import { Component, useState } from 'react'
import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

class ConvexErrorBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return (
      <p className="text-center text-slate-600 text-sm py-8">
        Reviews unavailable — run <code className="text-accent">npx convex deploy</code> to connect the database.
      </p>
    )
    return this.props.children
  }
}

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform duration-100 hover:scale-110"
        >
          <FaStar size={20} className={(hovered || value) >= n ? 'text-accent-warm' : 'text-white/15'} />
        </button>
      ))}
    </div>
  )
}

function ReviewCard({ review, delay }: { review: { name: string; role: string; message: string; rating: number }; delay: number }) {
  const initials = review.name.split(' ').map(w => w[0] ?? '').join('').slice(0, 2).toUpperCase()
  return (
    <motion.div
      className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7
                 hover:border-accent/25 hover:-translate-y-1
                 hover:shadow-[0_16px_40px_rgba(249,115,22,0.08)]
                 transition-all duration-300 flex flex-col gap-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} size={13} className={i < review.rating ? 'text-accent-warm' : 'text-white/15'} />
        ))}
      </div>
      <blockquote className="text-sm text-slate-400 leading-relaxed flex-1">
        &ldquo;{review.message}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
          <span className="font-mono text-[0.65rem] font-bold text-accent">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">{review.name}</p>
          <p className="text-xs text-slate-500">{review.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

function LiveReviews() {
  const reviews = useQuery(api.reviews.list) ?? []
  const submit  = useMutation(api.reviews.submit)

  const [name,    setName]    = useState('')
  const [role,    setRole]    = useState('')
  const [message, setMessage] = useState('')
  const [rating,  setRating]  = useState(5)
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || rating < 1) return
    setLoading(true)
    await submit({ name: name.trim(), role: role.trim() || 'Visitor', message: message.trim(), rating })
    setLoading(false)
    setDone(true)
    setName(''); setRole(''); setMessage(''); setRating(5)
    setTimeout(() => setDone(false), 4000)
  }

  return (
    <>
      {reviews.length === 0 ? (
        <motion.p
          className="text-center text-slate-600 text-sm mb-16"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          No reviews yet — be the first to leave one below.
        </motion.p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((r, i) => (
            <ReviewCard key={r._id} review={r} delay={i * 0.1} />
          ))}
        </div>
      )}

      <motion.div
        className="max-w-2xl mx-auto bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-slate-100 mb-1">Leave a Review</h3>
        <p className="text-sm text-slate-500 mb-6">Worked with me or seen my work? I&apos;d love to hear from you.</p>

        <AnimatePresence>
          {done && (
            <motion.div
              className="mb-5 px-4 py-3 rounded-xl bg-accent-emerald/10 border border-accent-emerald/25
                         text-sm text-accent-emerald text-center"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            >
              Thanks for your review! It&apos;s now live.
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.7rem] text-accent/70 tracking-[0.15em] uppercase">Name</label>
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="bg-bg-primary/60 border border-white/[0.07] rounded-xl px-4 py-3 text-sm
                           text-slate-200 placeholder:text-slate-700
                           focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15
                           transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.7rem] text-accent/70 tracking-[0.15em] uppercase">Role / How you know me</label>
              <input
                value={role}
                onChange={e => setRole(e.target.value)}
                placeholder="e.g. Classmate, Teacher..."
                className="bg-bg-primary/60 border border-white/[0.07] rounded-xl px-4 py-3 text-sm
                           text-slate-200 placeholder:text-slate-700
                           focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15
                           transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[0.7rem] text-accent/70 tracking-[0.15em] uppercase">Rating</label>
            <StarPicker value={rating} onChange={setRating} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[0.7rem] text-accent/70 tracking-[0.15em] uppercase">Message</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Share your experience..."
              className="bg-bg-primary/60 border border-white/[0.07] rounded-xl px-4 py-3 text-sm
                         text-slate-200 placeholder:text-slate-700
                         focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15
                         transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading || rating < 1}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm
                       bg-accent text-white
                       hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)]
                       disabled:opacity-50 transition-all duration-200 group"
          >
            {loading ? 'Submitting…' : (
              <>
                Submit Review
                <FiSend className="group-hover:translate-x-0.5 transition-transform duration-200" size={14} />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-2">{'// 05. Testimonials'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            What People <span className="text-accent">Say</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-accent-warm mx-auto mt-4 rounded" />
        </motion.div>

        <ConvexErrorBoundary>
          <LiveReviews />
        </ConvexErrorBoundary>
      </div>
    </section>
  )
}
