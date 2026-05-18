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
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      rafId = requestAnimationFrame(tick)
    }

    const expand = () => {
      dotRef.current?.classList.add('scale-150')
      ringRef.current?.classList.add('!w-12', '!h-12', '!border-neon-cyan')
    }
    const shrink = () => {
      dotRef.current?.classList.remove('scale-150')
      ringRef.current?.classList.remove('!w-12', '!h-12', '!border-neon-cyan')
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
      <div
        ref={dotRef}
        className="fixed z-[9999] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full
                   bg-neon-cyan pointer-events-none transition-transform duration-100
                   shadow-[0_0_10px_#00f5ff,0_0_20px_rgba(0,245,255,0.4)]"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full
                   border border-neon-cyan/50 pointer-events-none
                   transition-[width,height,border-color] duration-300"
      />
    </>
  )
}
