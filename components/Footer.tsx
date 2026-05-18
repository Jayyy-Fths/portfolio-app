export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3">
        <a
          href="#hero"
          className="font-mono text-lg font-bold text-accent/80 hover:text-accent
                     tracking-wide transition-colors duration-200"
        >
          &lt;<span className="text-slate-300">Jayden</span> /&gt;
        </a>
        <p className="font-mono text-xs text-slate-700">
          Designed &amp; built by{' '}
          <span className="text-slate-500">Jayden N. B. Azore</span>
          {' · '}
          <a
            href="mailto:jaydenazore918@gmail.com"
            className="text-slate-500 hover:text-accent transition-colors duration-200"
          >
            jaydenazore918@gmail.com
          </a>
        </p>
        <p className="font-mono text-[0.6rem] text-slate-800 tracking-widest uppercase">
          Next.js · Tailwind CSS · Framer Motion · React 19
        </p>
      </div>
    </footer>
  )
}
