import type { Metadata } from 'next'
import HallOfFameClient from './HallOfFameClient'

export const metadata: Metadata = {
  title: 'Hala Sławy Vulkan Vegas PL — Największe Wygrane Graczy 2026',
  description: 'Hala sławy Vulkan Vegas PL — największe wygrane polskich graczy, zweryfikowane wypłaty i historia triumfów. Zobacz rekordy kasyna vulkan-vegas-pl.com.pl 2026.',
  openGraph: {
    title: 'Hala Sławy Vulkan Vegas PL — Największe Wygrane Graczy 2026',
    description: 'Największe wygrane w Vulkan Vegas PL — zweryfikowane wypłaty i historia rekordowych wygranych graczy z Polski.',
    url: 'https://vulkan-vegas-pl.com.pl/hall-of-fame/',
  },
}

export default function HallOfFamePage() {
  return <HallOfFameClient />
}
