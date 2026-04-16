import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Vulkan Vegas PL Oficjalne Kasyno Online Casino Vulkanspiele',
  description: 'Vulkan Vegas PL oficjalne kasyno online. Opinie i recenzje graczy, aktualne bonusy, automaty i gry na żywo. Zagraj na oficjalnym portalu vulkan-vegas w Polsce.',
  openGraph: {
    title: 'Vulkan Vegas PL Oficjalne Kasyno Online Casino Vulkanspiele',
    description: 'Vulkan Vegas PL oficjalne kasyno online. Opinie graczy, bonusy i automaty na żywo.',
    url: 'https://vulkan-vegas-pl.com.pl/',
  },
}

export default function HomePage() {
  return <HomeClient />
}
