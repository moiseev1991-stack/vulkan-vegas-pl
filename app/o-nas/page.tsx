import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O Nas — vulkan-vegas-pl.com.pl Niezależny Przewodnik po Kasynach Online',
  description: 'vulkan-vegas-pl.com.pl to niezależny przewodnik po kasynach online dla polskich graczy. Obiektywne oceny, bieżące oferty bonusowe i porady dotyczące bezpiecznej gry. Działamy od 2025.',
  openGraph: {
    title: 'O Nas — vulkan-vegas-pl.com.pl Niezależny Przewodnik po Kasynach Online',
    description: 'Niezależny serwis afiliacyjny — rzetelne recenzje kasyn, aktualne promocje i zasady odpowiedzialnej gry dla graczy z Polski.',
    url: 'https://vulkan-vegas-pl.com.pl/o-nas/',
  },
}

export default function ONas() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">O Portalu</h1>
      <p className="text-white/60 text-sm mb-10">
        vulkan-vegas-pl.com.pl — niezależny przewodnik po kasynach online, stworzony z myślą o polskich graczach poszukujących rzetelnych informacji.
      </p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        {/* Affiliate disclaimer */}
        <div
          className="rounded-xl p-5"
          style={{ background: 'rgba(255, 215, 0, 0.05)', border: '1px solid rgba(255, 215, 0, 0.2)' }}
        >
          <p className="text-gold font-bold mb-2">📢 Ważna informacja — portal afiliacyjny</p>
          <p className="text-white/70 text-sm">
            vulkan-vegas-pl.com.pl jest <strong className="text-white">niezależnym serwisem afiliacyjnym</strong> — nie jest kasynem
            online i nie prowadzi żadnej działalności hazardowej. Portal nie przyjmuje wpłat, nie zarządza
            kontami graczy ani nie organizuje gier. Może otrzymywać wynagrodzenie od operatorów kasyn za
            użytkowników, którzy kliknęli w linki partnerskie. Nie wpływa to na obiektywność prezentowanych treści.
          </p>
        </div>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Czym jest vulkan-vegas-pl.com.pl?</h2>
          <p>
            vulkan-vegas-pl.com.pl to redakcja specjalizująca się w niezależnych recenzjach i rankingach kasyn
            internetowych dla graczy z Polski. Naszym celem jest dostarczanie rzetelnych, aktualnych informacji,
            które pomagają wybrać bezpieczne, licencjonowane kasyno z atrakcyjną ofertą.
          </p>
          <p className="mt-2">
            Portal funkcjonuje od 2025 roku. Regularnie aktualizujemy nasze treści, śledząc zmiany na rynku:
            nowe promocje, premiery gier, metody płatności oraz regulacje prawne dotyczące hazardu online.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Co oferujemy?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Recenzje i oceny kasyn',
                desc: 'Kompleksowe testy kasyn online — licencja, portfolio gier, bonusy, metody wypłat i poziom obsługi klienta.',
              },
              {
                title: 'Rankingi i zestawienia',
                desc: 'Przejrzyste porównania kasyn według bonusów powitalnych, dostępności mobilnej i szybkości płatności.',
              },
              {
                title: 'Bieżące promocje',
                desc: 'Aktualny przegląd bonusów, darmowych spinów, turniejów i unikalnych akcji w polecanych kasynach.',
              },
              {
                title: 'Edukacja gracza',
                desc: 'Praktyczne poradniki o grach kasynowych, zarządzaniu bankrollem i zasadach odpowiedzialnej gry.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
                <p className="text-white font-semibold mb-1">{item.title}</p>
                <p className="text-white/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Skąd pochodzi nasze finansowanie?</h2>
          <p>
            Portal utrzymuje się dzięki partnerstwom afiliacyjnym z operatorami kasyn online. Oznacza to, że:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Gdy skorzystasz z naszego linku i zarejestrujesz konto, możemy otrzymać prowizję od danego operatora;</li>
            <li>Wynagrodzenie może mieć formę udziału w przychodach (RevShare) lub jednorazowej opłaty za gracza (CPA);</li>
            <li>Umowy partnerskie <strong className="text-white">nie mają wpływu na nasze oceny</strong> — kasyna niespełniające naszych kryteriów nie są polecane, niezależnie od relacji handlowej.</li>
          </ul>
          <p className="mt-2">
            Korzystanie z Portalu jest dla użytkowników bezpłatne.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Nasze kryteria selekcji</h2>
          <p className="mb-3">W rankingach uwzględniamy wyłącznie kasyna, które:</p>
          <ul className="space-y-2">
            {[
              'Legitymują się aktualną licencją wydaną przez uznanego regulatora (MGA Malta, UKGC, Curaçao i in.);',
              'Korzystają z certyfikowanego generatora liczb losowych (RNG) potwierdzającego losowość gier;',
              'Udostępniają graczom narzędzia odpowiedzialnej gry (limity stawek, przerwy, samowykluczenie);',
              'Terminowo realizują wypłaty i stosują przejrzyste warunki bonusów bez ukrytych zapisów;',
              'Nie figurują w rejestrach kasyn stosujących nieuczciwe praktyki wobec graczy.',
            ].map((standard) => (
              <li key={standard} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{standard}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Bezpieczna gra przede wszystkim</h2>
          <p>
            vulkan-vegas-pl.com.pl traktuje promocję odpowiedzialnego hazardu jako integralną część swojej
            działalności. Hazard jest formą rozrywki — nie metodą zarabiania. Jeśli potrzebujesz wsparcia,
            odwiedź naszą stronę{' '}
            <Link href="/odpowiedzialna-gra/" className="text-gold hover:underline">Odpowiedzialna Gra</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Kontakt z redakcją</h2>
          <p>
            Chcesz zgłosić błąd, zaproponować temat lub nawiązać współpracę? Napisz do nas:
          </p>
          <p className="mt-2">
            <a href="mailto:kontakt@vulkan-vegas-pl.com.pl" className="text-gold hover:underline">kontakt@vulkan-vegas-pl.com.pl</a>
          </p>
          <p className="mt-2 text-white/40 text-xs">
            Staramy się odpowiadać na wiadomości w ciągu 1–2 dni roboczych.
          </p>
        </section>

      </div>
    </main>
  )
}
