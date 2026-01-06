import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sunshine Rides | Colorado Transportation',
  description:
    'Our car is your car. Premium transportation services across Colorado - Grand Junction, Montrose, Telluride, Vail, Denver, and Aspen. Wheelchair accessible, medical transport, Medicaid accepted.',
  keywords: [
    'Colorado transportation',
    'ride service',
    'Sunshine Rides',
    'Grand Junction',
    'Montrose',
    'Telluride',
    'Vail',
    'Denver',
    'Aspen',
    'wheelchair accessible',
    'medical transport',
    'Medicaid',
  ],
  authors: [{ name: 'Sunshine Rides' }],
  openGraph: {
    title: 'Sunshine Rides | Colorado Transportation',
    description: 'Our car is your car. Premium transportation services across Colorado.',
    type: 'website',
    siteName: 'Sunshine Rides',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunshine Rides | Colorado Transportation',
    description: 'Our car is your car. Premium transportation services across Colorado.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
