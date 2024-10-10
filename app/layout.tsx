import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fast Food Nutrition Planner',
  description: 'Plan healthy fast food choices for gym goers and dieters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white min-h-screen`}>{children}</body>
    </html>
  )
}
