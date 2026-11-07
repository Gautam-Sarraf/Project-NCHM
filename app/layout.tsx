import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Nepal College of Hotel Management (NCHM) | Birgunj, Nepal',
  description:
    'Nepal College of Hotel Management (NCHM), Birgunj. Premier hospitality education, practical training kitchens, barista certification, and industry-focused diploma programs.',
  keywords: [
    'hotel management',
    'hospitality management',
    'NCHM',
    'Birgunj hotel college',
    'diploma in hotel management',
    'barista certification Nepal',
    'hospitality training',
  ],
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#30345B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#F8F7F3] text-[#555B6E] selection:bg-[#DFA526]/20 selection:text-[#30345B]">
        <ScrollProgress />
        <Navbar />
        <main className="relative min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
