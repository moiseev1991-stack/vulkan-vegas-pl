import type { Metadata } from 'next'
import PromotionsClient from './PromotionsClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Vegas Promocje PL — Aktualne Bonusy i Oferty Kasyna 2026' },
  description: 'Najnowsze promocje Vulkan Vegas PL 2026 — bonusy tygodniowe, turnieje, questy i lootboxy. Wszystkie aktualne oferty kasyna vulkan-vegas-pl.com.pl dla graczy z Polski.',
  openGraph: {
    title: 'Vulkan Vegas Promocje PL — Aktualne Bonusy i Oferty Kasyna 2026',
    description: 'Aktualne oferty Vulkan Vegas PL — tygodniowe bonusy, turnieje kasynowe, misje i lootboxy dla polskich graczy.',
    url: 'https://vulkan-vegas-pl.com.pl/promotions/',
  },
}

export default function PromotionsPage() {
  return (
    <div>
      <PromotionsClient />

    </div>
  )
}
