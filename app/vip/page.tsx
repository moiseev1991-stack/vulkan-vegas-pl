import type { Metadata } from 'next'
import VipClient from './VipClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Vegas VIP PL Program Lojalnościowy Cashback i Bonusy' },
  description: 'Program lojalnościowy VIP Vulkan Vegas PL — poziomy VIP, cashback tygodniowy do 20%, ekspresowe wypłaty i osobisty opiekun konta. Ekskluzywne bonusy dla graczy 2026.',
  openGraph: {
    title: 'Vulkan Vegas VIP PL Program Lojalnościowy Cashback i Bonusy',
    description: 'VIP Vulkan Vegas PL — cashback do 20%, ekspresowe wypłaty, ekskluzywne bonusy i dedykowany manager konta.',
    url: 'https://vulkan-vegas-pl.com.pl/vip/',
  },
}

export default function VipPage() {
  return <VipClient />
}
