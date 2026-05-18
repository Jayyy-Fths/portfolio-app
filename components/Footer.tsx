export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/6 py-8 text-center">
      <p className="font-mono text-xs text-slate-600">
        Designed &amp; built by{' '}
        <span className="text-neon-cyan">Jayden N. B. Azore</span>
        {' · '}
        <a href="mailto:jayden@azore.dev" className="hover:text-neon-cyan transition-colors duration-200">
          jayden@azore.dev
        </a>
      </p>
      <p className="font-mono text-[0.65rem] text-slate-700 mt-1">
        Next.js · Tailwind CSS · Framer Motion
      </p>
    </footer>
  )
}
