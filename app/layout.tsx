import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BubbleBackground from './components/BubbleBackground'
import ScrollProgress from './components/ScrollProgress'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Nepal College of Hotel Management (NCHM)',
  description:
    'Shaping Future Hotel Industry Leaders - Nepal College of Hotel Management offers premier hospitality education, diploma programs, and professional certifications.',
  keywords: [
    'hotel management',
    'hospitality management',
    'NCHM',
    'Nepal college',
    'diploma',
    'barista certification',
  ],
}

export const viewport: Viewport = {
  themeColor: '#0B1F3B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.add('light-mode');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ScrollProgress />
        <BubbleBackground />
        <Navbar />
        <main className="relative min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
