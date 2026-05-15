import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Md Shaon Khan | Aspiring AI Engineer',
  description: 'Aspiring AI Engineer at IIT Jahangirnagar University building AI, IoT, and scalable backend systems with real project experience.',
  metadataBase: new URL('https://shaonkhan.dev'),
  openGraph: {
    title: 'Md Shaon Khan | Aspiring AI Engineer',
    description: 'Aspiring AI Engineer at IIT Jahangirnagar University building AI, IoT, and scalable backend systems with real project experience.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Shaon Khan | Aspiring AI Engineer',
    description: 'Aspiring AI Engineer focused on AI, Machine Learning, and IoT systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md Shaon Khan',
  jobTitle: 'Aspiring AI Engineer',
  description: 'Undergraduate AI & IoT developer building intelligent systems with AI, ML and scalable backend software.',
  alumniOf: 'Institute of Information Technology (IIT), Jahangirnagar University',
  email: 'shaon.iit52@gmail.com',
  sameAs: [
    'https://github.com/Md-Shaon-Khan',
    'https://www.linkedin.com/in/md-shaon-khan-01003433a/',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} bg-slate-950 text-slate-100`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
