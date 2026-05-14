import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'


const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://avinh.net'
const description =
  'Systems engineer building cloud automation, full-stack apps, and ML models for computational cognitive science.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Avinh Huynh — Full Stack, DevOps & ML',
    template: '%s — Avinh Huynh',
  },
  description,
  alternates: { canonical: '/' },
  authors: [{ name: 'Avinh Huynh', url: siteUrl }],
  creator: 'Avinh Huynh',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Avinh Huynh',
    title: 'Avinh Huynh — Full Stack, DevOps & ML',
    description,
    images: [{ url: '/headshot.jpg', width: 1200, height: 630, alt: 'Avinh Huynh' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avinh Huynh — Full Stack, DevOps & ML',
    description,
    images: ['/headshot.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
