import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Aplikacja Mobilna PL Pobierz APK Casino App',
  description: 'Pobierz Vulkan Vegas aplikację mobilną na Android i iOS. Oficjalna casino app vulkanspiele PL — graj na smartfonie, odbierz bonusy i korzystaj z pełnej oferty.',
  openGraph: {
    title: 'Vulkan Vegas Aplikacja Mobilna PL Pobierz APK Casino App',
    description: 'Pobierz Vulkan Vegas aplikację mobilną na Android i iOS. Oficjalna casino app vulkanspiele PL.',
    url: 'https://vulkan-vegas-pl.com.pl/aplikacja/',
  },
}

export default function AplikacjaPage() {
  return (
    <div className="min-h-screen" style={{ background: '#07000C' }}>
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded mb-4"
            style={{ background: '#820016' }}
          >
            📲 APP MOBILNA
          </span>
          <h1 className="text-3xl font-black text-white mb-3">
            <span style={{ color: '#FFC500' }}>Vulkan Vegas App</span> — Pobierz Casino na Telefon PL
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Oficjalna aplikacja Vulkan Vegas Casino PL na Android (APK) i iOS.
            Pełna oferta gier, bonusów i płatności w zasięgu ręki.
          </p>
        </div>

        {/* Features — teraz PRZED przyciskami pobierania */}
        <div className="space-y-3 mb-8">
          <h2 className="text-base font-bold text-white mb-4">Co oferuje aplikacja mobilna?</h2>
          {[
            { icon: '🎁', title: 'Bonusy mobilne', desc: 'Ekskluzywne oferty dostępne tylko w aplikacji kasyna' },
            { icon: '🎰', title: 'Ponad 3000 gier', desc: 'Automaty, kasyno na żywo i gry stołowe na smartfonie' },
            { icon: '💳', title: 'Błyskawiczne płatności', desc: 'Wpłaty i wypłaty w kilka sekund z poziomu aplikacji' },
            { icon: '🔔', title: 'Powiadomienia push', desc: 'Alerty o bonusach i turniejach w czasie rzeczywistym' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg p-4 flex items-center gap-4"
              style={{ background: '#130010', border: '1px solid #2E001A' }}
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Download buttons */}
        <div
          className="rounded-xl p-6 mb-10 text-center"
          style={{ background: '#130012', border: '1px solid #2E001A' }}
        >
          <h2 className="text-lg font-bold text-white mb-5">Pobierz Vulkan Vegas teraz</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/go/"
              className="inline-block text-black font-black text-sm px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
              style={{ background: '#FFC500' }}
            >
              🤖 Pobierz APK Android
            </Link>
            <Link
              href="/go/"
              className="inline-block text-white font-bold text-sm px-6 py-3 rounded-lg transition"
              style={{ background: '#1A0012', border: '1px solid #3a0018' }}
            >
              🍎 Pobierz na iOS
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-3">18+ | Hazard z głową</p>
        </div>

        {/* SEO */}
        <div className="h-px mb-8" style={{ background: '#160010' }} />
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white">
            Jak pobrać Vulkan Vegas APK na Android?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Aplikacja Vulkan Vegas PL na Android dostępna jest jako plik APK do pobrania bezpośrednio
            ze strony kasyna. Instalacja zajmuje ok. 60 sekund — wystarczy włączyć opcję
            &quot;Nieznane źródła&quot; w ustawieniach, pobrać plik i uruchomić instalację.
          </p>
          <h3 className="text-base font-bold text-white/80">
            Vulkan Vegas na iOS — App Store
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Użytkownicy iPhone i iPad mogą pobrać aplikację kasyna bezpośrednio z App Store.
            Aplikacja działa na systemach iOS 13.0 i nowszych bez konieczności instalacji APK.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/" className="text-gray-500 text-sm hover:text-white transition">
            ← Strona główna
          </Link>
        </div>
      </div>
    </div>
  )
}
