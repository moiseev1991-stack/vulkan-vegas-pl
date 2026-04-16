import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vulkan Vegas Rejestracja i Logowanie PL Casino Online 2026',
  description: 'Vulkan Vegas rejestracja PL — zarejestruj się i odbierz bonus powitalny. Logowanie do kasyna vulkanspiele online, instrukcja krok po kroku i weryfikacja konta.',
  openGraph: {
    title: 'Vulkan Vegas Rejestracja i Logowanie PL Casino Online 2026',
    description: 'Vulkan Vegas rejestracja PL — zarejestruj się, odbierz bonus i zaloguj do vulkanspiele casino.',
    url: 'https://vulkan-vegas-pl.com.pl/rejestracja/',
  },
}

export default function RejestracjaPage() {
  return (
    <div className="min-h-screen" style={{ background: '#07000C' }}>
      <div className="container mx-auto px-4 py-12 max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded mb-4"
            style={{ background: '#820016' }}
          >
            🎰 CASINO PL
          </span>
          <h1 className="text-3xl font-black text-white mb-2">
            <span style={{ color: '#FFC500' }}>Rejestracja</span> i Logowanie Vulkan Vegas Casino PL
          </h1>
          <p className="text-gray-400 text-sm">
            Nowe konto w 2 minuty — odbierz bonus powitalny do 500 EUR + 100 FS
          </p>
        </div>

        {/* Register — teraz PIERWSZA sekcja */}
        <div
          className="rounded-xl p-6 mb-5 text-center"
          style={{ background: 'linear-gradient(135deg, #1A0012 0%, #130010 100%)', border: '1px solid #2E001A' }}
        >
          <p className="text-white font-bold text-base mb-1">Nowy gracz? Odbierz bonus!</p>
          <p className="text-gray-400 text-xs mb-4">100% do 500 EUR + 100 darmowych spinów</p>
          <Link
            href="/go/"
            className="inline-block text-black font-black text-sm px-8 py-3 rounded-lg hover:bg-yellow-400 transition w-full text-center"
            style={{ background: '#FFC500' }}
          >
            Zarejestruj się i odbierz bonus
          </Link>
          <p className="text-gray-600 text-xs mt-3">18+ | Hazard z głową | Obowiązuje regulamin</p>
        </div>

        {/* Login box */}
        <div
          className="rounded-xl p-6 mb-8"
          style={{ background: '#130012', border: '1px solid #2E001A' }}
        >
          <h2 className="text-base font-bold text-white mb-4">
            Masz już konto? Zaloguj się
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-gray-500 text-xs block mb-1">Adres e-mail</label>
              <input
                type="email"
                placeholder="twoj@email.pl"
                readOnly
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{ background: '#07000C', border: '1px solid #3a0015', color: '#fff' }}
              />
            </div>
            <div>
              <label className="text-gray-500 text-xs block mb-1">Hasło</label>
              <input
                type="password"
                placeholder="••••••••"
                readOnly
                className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
                style={{ background: '#07000C', border: '1px solid #3a0015', color: '#fff' }}
              />
            </div>
            <Link
              href="/go/"
              className="block text-center text-white font-bold text-sm px-6 py-2.5 rounded-lg transition"
              style={{ border: '1px solid #555' }}
            >
              Zaloguj się
            </Link>
          </div>
        </div>

        {/* SEO */}
        <div className="h-px my-8" style={{ background: '#160010' }} />
        <section className="space-y-4">
          <h2 className="text-base font-bold text-white">
            Rejestracja Vulkan Vegas PL — jak założyć konto?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Rejestracja w Vulkan Vegas Casino zajmuje mniej niż 2 minuty. Wypełnij formularz,
            potwierdź adres e-mail i odbierz bonus powitalny. Weryfikacja konta (KYC) jest
            wymagana przed pierwszą wypłatą — prześlij dokument tożsamości i potwierdzenie adresu.
          </p>
          <h3 className="text-sm font-bold text-white/70">
            Logowanie Vulkan Vegas — problemy z dostępem?
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Jeśli nie możesz się zalogować, skorzystaj z opcji &quot;Zapomniałem hasła&quot; na stronie
            logowania. Reset hasła odbywa się przez e-mail i zajmuje do 5 minut. Alternatywnie
            skontaktuj się z obsługą przez live chat dostępny 24/7.
          </p>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-gray-500 text-sm hover:text-white transition">
            ← Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  )
}
