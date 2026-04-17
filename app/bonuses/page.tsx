import type { Metadata } from 'next'
import BonusesClient from './BonusesClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Vegas Bonusy PL — Bonus Powitalny Free Spiny Cashback 2026' },
  description: 'Kompletna lista bonusów Vulkan Vegas PL 2026: bonus powitalny do 500 EUR + 100 FS, tygodniowy cashback i reload. Aktualne oferty bonusowe vulkan-vegas-pl.com.pl dla graczy.',
  openGraph: {
    title: 'Vulkan Vegas Bonusy PL — Bonus Powitalny Free Spiny Cashback 2026',
    description: 'Wszystkie bonusy Vulkan Vegas PL: powitalny do 500 EUR, cashback tygodniowy, reload i free spiny.',
    url: 'https://vulkan-vegas-pl.com.pl/bonuses/',
  },
}

export default function BonusesPage() {
  return <BonusesClient />
}
