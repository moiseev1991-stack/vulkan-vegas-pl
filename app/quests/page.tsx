import type { Metadata } from 'next'
import QuestsClient from './QuestsClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Vegas Misje PL — Questy Kasynowe z Nagrodami 2026' },
  description: 'Misje i questy Vulkan Vegas PL — codzienne oraz tygodniowe zadania kasynowe i sportowe. Odbieraj free spiny, bonusy i nagrody pieniężne. Reset misji co 24 godziny.',
  openGraph: {
    title: 'Vulkan Vegas Misje PL — Questy Kasynowe z Nagrodami 2026',
    description: 'Codzienne questy Vulkan Vegas PL — misje kasynowe i sportowe z nagrodami: free spiny, bonusy pieniężne.',
    url: 'https://vulkan-vegas-pl.com.pl/quests/',
  },
}

export default function QuestsPage() {
  return <QuestsClient />
}
