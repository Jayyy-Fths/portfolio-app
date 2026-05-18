'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, rafId: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
      rx += (mx - rx) * 0.10
      ry += (my - ry) * 0.10
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      rafId = requestAnimationFrame(tick)
    }

    const expand = () => {
      dotRef.current?.classList.add('!opacity-0')
      ringRef.current?.classList.add('!w-14', '!h-14', '!border-neon-cyan/70', '!bg-neon-cyan/5')
    }
    const shrink = () => {
      dotRef.current?.classList.remove('!opacity-0')
      ringRef.current?.classList.remove('!w-14', '!h-14', '!border-neon-cyan/70', '!bg-neon-cyan/5')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      {/* Dot — instant, sharp */}
      <div
        ref={dotRef}
        className="fixed z-[9999] w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full
                   bg-neon-cyan pointer-events-none transition-opacity duration-150"
        style={{ boxShadow: '0 0 8px #00f5ff, 0 0 16px rgba(0,245,255,0.3)' }}
      />
      {/* Ring — lagged, eased */}
      <div
        ref={ringRef}
        className="fixed z-[9998] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full
                   border border-neon-cyan/35 pointer-events-none
                   transition-[width,height,border-color,background-color] duration-250"
      />
    </>
  )
}
