import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Cookie — Zarządzanie Plikami Cookies vulkan-vegas-pl.com.pl',
  description: 'Polityka cookies portalu vulkan-vegas-pl.com.pl: rodzaje stosowanych plików cookie (techniczne, analityczne, marketingowe, afiliacyjne), ich cel i sposoby zarządzania ustawieniami.',
  openGraph: {
    title: 'Polityka Cookie — Zarządzanie Plikami Cookies vulkan-vegas-pl.com.pl',
    description: 'Jakie pliki cookies stosujemy i jak nimi zarządzać w Chrome, Firefox, Edge i Safari — vulkan-vegas-pl.com.pl.',
    url: 'https://vulkan-vegas-pl.com.pl/polityka-cookie/',
  },
}

export default function PolitykaCookie() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Polityka Cookie</h1>
      <p className="text-white/40 text-sm mb-10">Obowiązuje od: 1 kwietnia 2026</p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies (inaczej: ciasteczka) to niewielkie pliki tekstowe zapisywane przez przeglądarkę
            na Twoim urządzeniu — komputerze, telefonie lub tablecie — w trakcie przeglądania stron internetowych.
            Dzięki nim serwis może &bdquo;zapamiętać&rdquo; wybrane przez Ciebie ustawienia oraz wcześniejsze wizyty,
            co pozwala na wygodniejsze korzystanie z jego funkcji przy kolejnych odwiedzinach.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Rodzaje cookies stosowanych w Portalu</h2>

          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#2d5a1b', color: '#7dca52' }}>Niezbędne</span>
                <p className="text-white font-semibold text-sm">Cookies techniczne (zgoda: niewymagana)</p>
              </div>
              <p className="text-xs text-white/50">
                Konieczne do prawidłowego funkcjonowania Portalu — bez nich strona nie może działać poprawnie.
                Obejmują zarządzanie sesją, preferencje językowe oraz mechanizmy bezpieczeństwa.
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#1a3a5c', color: '#52a8ca' }}>Analityczne</span>
                <p className="text-white font-semibold text-sm">Cookies analityczne (zgoda: wymagana)</p>
              </div>
              <p className="text-xs text-white/50">
                Pozwalają mierzyć ruch na stronie i analizować sposób korzystania z Portalu, co umożliwia
                nam jego ciągłe ulepszanie. Korzystamy z Google Analytics — dane są agregowane i anonimizowane.
              </p>
              <p className="text-xs text-white/40 mt-1">Przykładowe identyfikatory: _ga, _gid, _gat</p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#4a2d00', color: '#ca9052' }}>Marketingowe</span>
                <p className="text-white font-semibold text-sm">Cookies marketingowe (zgoda: wymagana)</p>
              </div>
              <p className="text-xs text-white/50">
                Umożliwiają mierzenie skuteczności kampanii reklamowych oraz wyświetlanie reklam dopasowanych
                do Twoich zainteresowań. Mogą być ustawiane przez naszych partnerów (Google Ads, Facebook Pixel).
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#3a1a5c', color: '#a052ca' }}>Afiliacyjne</span>
                <p className="text-white font-semibold text-sm">Cookies afiliacyjne (zgoda: wymagana)</p>
              </div>
              <p className="text-xs text-white/50">
                Służą do śledzenia kliknięć w linki partnerskie i prawidłowego przypisywania rejestracji
                w kasynach do Portalu jako źródła. Są niezbędne do rozliczania prowizji afiliacyjnych.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Cookies podmiotów zewnętrznych</h2>
          <p className="mb-3">
            Portal może korzystać z plików cookies dostarczanych przez podmioty trzecie:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white/60 font-semibold">Dostawca</th>
                  <th className="text-left py-2 pr-4 text-white/60 font-semibold">Cel</th>
                  <th className="text-left py-2 text-white/60 font-semibold">Polityka prywatności</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Google Analytics', purpose: 'Analityka odwiedzin', url: 'https://policies.google.com/privacy' },
                  { name: 'Google Ads', purpose: 'Kampanie reklamowe', url: 'https://policies.google.com/privacy' },
                  { name: 'Facebook Pixel', purpose: 'Reklama targetowana', url: 'https://www.facebook.com/policy' },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-2 pr-4 text-white/70">{row.name}</td>
                    <td className="py-2 pr-4 text-white/50">{row.purpose}</td>
                    <td className="py-2">
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                        Więcej
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Jak zarządzać plikami cookies?</h2>
          <p className="mb-3">
            Masz kilka możliwości kontrolowania plików cookies:
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-white font-semibold mb-1">Baner zgody</p>
              <p>
                Przy pierwszej wizycie na Portalu możesz samodzielnie zdecydować, które kategorie cookies
                akceptujesz, korzystając z banera wyświetlanego na dole ekranu.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Ustawienia przeglądarki internetowej</p>
              <p>
                Każda przeglądarka pozwala na samodzielne zarządzanie ciasteczkami. Poniżej znajdziesz
                instrukcje dla popularnych przeglądarek:
              </p>
              <ul className="mt-2 space-y-1">
                {[
                  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/pl/kb/ciasteczka' },
                  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegladarce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                  { name: 'Safari', url: 'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac' },
                ].map((browser) => (
                  <li key={browser.name}>
                    <a href={browser.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3">
            Wyłączenie określonych kategorii cookies może ograniczyć dostępność niektórych funkcji Portalu.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Dodatkowe informacje</h2>
          <p>
            Szczegółowe zasady przetwarzania danych osobowych opisuje nasza{' '}
            <Link href="/polityka-prywatnosci/" className="text-gold hover:underline">Polityka Prywatności</Link>.
            W razie pytań skontaktuj się z nami:{' '}
            <a href="mailto:kontakt@vulkan-vegas-pl.com.pl" className="text-gold hover:underline">kontakt@vulkan-vegas-pl.com.pl</a>.
          </p>
        </section>

      </div>
    </main>
  )
}
