import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'
import ConvexClientProvider from '@/app/ConvexClientProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Jayden N. B. Azore | Full-Stack Developer',
  description:
    'Full-stack developer building scalable web apps, beautiful UIs, and fast APIs. Open to freelance and full-time opportunities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-bg-primary text-slate-200 font-sans">
        <ConvexClientProvider>
          <Cursor />
          <ScrollProgress />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}
