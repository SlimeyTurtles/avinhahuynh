import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Avinh Huynh — Full Stack, DevOps & ML",
  description: "Systems engineer building cloud automation, full-stack apps, and ML models for computational cognitive science.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
