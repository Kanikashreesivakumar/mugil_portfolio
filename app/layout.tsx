import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/ui/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. MUGIL PHYSIO',
  description: 'Expert physiotherapy services helping you move pain-free. Specializing in manual therapy, sports rehabilitation, posture correction, and pain management.',
  keywords: 'physiotherapy, wellness coach, manual therapy, sports rehab, pain management, posture correction',
  authors: [{ name: 'Dr. mugil vanan' }],
  creator: 'Dr. mugil vanan',
  publisher: 'Wellness Physiotherapy Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Dr. mugil vanan | Physiotherapist & Wellness Coach',
    description: 'Expert physiotherapy services helping you move pain-free. Book your appointment today.',
    siteName: 'Dr. mugil vanan Physiotherapy',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. mugil vanan Physiotherapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. MUGIL VANAN | Physiotherapist & Wellness Coach',
    description: 'Expert physiotherapy services helping you move pain-free.',
    creator: 'k4niz',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
  {/* <CustomCursor /> */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}