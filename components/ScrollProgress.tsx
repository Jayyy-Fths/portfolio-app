'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (barRef.current) barRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-0.5 z-[9997] w-0
                 bg-gradient-to-r from-accent to-accent-violet
                 shadow-[0_0_8px_rgba(0,245,255,0.6)]
                 transition-[width] duration-100"
    />
  )
}
