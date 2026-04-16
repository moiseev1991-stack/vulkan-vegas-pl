import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import MobileBottomNav from '@/components/layout/MobileBottomNav'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://vulkan-vegas-pl.com.pl'),
  title: {
    default: 'Vulkan Vegas PL — Kasyno Online Automaty Live Casino i Zakłady',
    template: '%s | Vulkan Vegas Casino',
  },
  description: 'Vulkan Vegas kasyno online PL — automaty, gry na żywo i zakłady sportowe. Odbierz bonus powitalny do 2500€ i 350 darmowych spinów na start.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    siteName: 'Vulkan Vegas Casino PL',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={dmSans.variable}>
      <body className="bg-bgDark text-white antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <CookieBanner />
        <MobileBottomNav />
      </body>
    </html>
  )
}
