import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odpowiedzialna Gra — Bezpieczny Hazard Online dla Graczy w Polsce',
  description: 'Odpowiedzialna gra online — praktyczne wskazówki, narzędzia ochrony w kasynach i lista organizacji pomocowych w Polsce. Limity, przerwy, samowykluczenie. Tylko 18+.',
  openGraph: {
    title: 'Odpowiedzialna Gra — Bezpieczny Hazard Online dla Graczy w Polsce',
    description: 'Zasady bezpiecznego hazardu i pomoc dla graczy z problemem — Anonimowi Hazardziści, KCPU, linia 116 123.',
    url: 'https://vulkan-vegas-pl.com.pl/odpowiedzialna-gra/',
  },
  robots: { index: true, follow: true },
}

export default function OdpowiedzialnaGra() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Odpowiedzialna Gra</h1>
      <p className="text-white/60 text-sm mb-10">
        vulkan-vegas-pl.com.pl wspiera zasady bezpiecznego hazardu. Pamiętaj — gra to rozrywka. Gdy przestaje nią być, czas po pomoc.
      </p>

      {/* Warning banner */}
      <div
        className="rounded-xl p-5 mb-10"
        style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)' }}
      >
        <p className="text-white font-bold text-base mb-1">🛑 Ostrzeżenie</p>
        <p className="text-white/70 text-sm">
          Hazard wiąże się z realnym ryzykiem finansowym. Nie graj pieniędzmi, których utrata mogłaby
          zagrozić Twojej sytuacji życiowej. Jeśli czujesz, że tracisz kontrolę — nie zwlekaj z szukaniem pomocy.
        </p>
      </div>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Złote zasady bezpiecznej gry</h2>
          <ul className="space-y-2">
            {[
              'Graj dla zabawy — hazard nie jest ani sposobem na zarobek, ani metodą na odrobienie strat.',
              'Wyznacz sobie limit czasu i budżet na grę, zanim zaczniesz — i trzymaj się go konsekwentnie.',
              'Unikaj gry pod wpływem alkoholu, substancji psychoaktywnych lub w silnym stresie emocjonalnym.',
              'Przegrana to część gry — nigdy nie próbuj jej „odrobić" kolejnymi zakładami.',
              'Rób regularne przerwy i dbaj o to, by hazard nie kolidował z codziennymi obowiązkami.',
              'Wybieraj wyłącznie kasyna posiadające licencję i certyfikowane oprogramowanie losujące.',
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Kiedy gra staje się problemem?</h2>
          <p className="mb-3">Poniższe sygnały mogą wskazywać na rozwijające się uzależnienie:</p>
          <ul className="space-y-2">
            {[
              'Hazard dominuje w Twoich myślach — planujesz kolejną sesję, gdy kończysz poprzednią.',
              'Musisz stawiać coraz wyższe kwoty, żeby poczuć ten sam dreszcz emocji.',
              'Wielokrotnie próbowałeś ograniczyć grę, ale bez trwałego efektu.',
              'Po przegranej odczuwasz silny lęk, rozdrażnienie lub stany depresyjne.',
              'Ukrywasz przed rodziną i przyjaciółmi, ile czasu i pieniędzy poświęcasz na hazard.',
              'Sięgasz po kredyty, pożyczki lub pożyczasz od bliskich, żeby móc grać.',
              'Hazard wypiera z Twojego życia pracę, relacje i inne ważne aktywności.',
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5 shrink-0">!</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Narzędzia ochrony dostępne w kasynach</h2>
          <p className="mb-3">
            Legalne kasyna online są zobowiązane do udostępniania graczom narzędzi ograniczających ryzyko:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: 'Limity wpłat', desc: 'Dobowy, tygodniowy lub miesięczny pułap depozytów.' },
              { title: 'Limity strat', desc: 'Automatyczne blokowanie dalszej gry po przekroczeniu ustalonej straty.' },
              { title: 'Limit czasu sesji', desc: 'Automatyczne wylogowanie po upływie wyznaczonego czasu.' },
              { title: 'Przerwa techniczna', desc: 'Tymczasowe zablokowanie konta na okres od 24 godzin do 30 dni.' },
              { title: 'Samowykluczenie', desc: 'Trwałe lub długoterminowe zamknięcie konta gracza w kasynie.' },
              { title: 'Powiadomienia czasowe', desc: 'Przypomnienia o czasie trwania bieżącej sesji gry.' },
            ].map((tool) => (
              <div key={tool.title} className="rounded-lg p-3" style={{ background: '#130010', border: '1px solid #2E001A' }}>
                <p className="text-white font-semibold text-xs mb-1">{tool.title}</p>
                <p className="text-white/50 text-xs">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Gdzie szukać pomocy w Polsce?</h2>
          <p className="mb-4">
            Jeśli Ty lub ktoś z Twoich bliskich potrzebuje wsparcia w związku z uzależnieniem od hazardu,
            skontaktuj się z jedną z poniższych instytucji:
          </p>
          <div className="space-y-3">
            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <p className="text-white font-bold mb-1">Centrum Wsparcia dla Osób w Kryzysie Emocjonalnym</p>
              <p className="text-white/60 text-xs mb-1">Telefon zaufania: <strong className="text-white">116 123</strong> (bezpłatny, czynny całą dobę)</p>
              <p className="text-white/50 text-xs">Profesjonalna pomoc psychologiczna i wsparcie kryzysowe dla każdego.</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <p className="text-white font-bold mb-1">Krajowe Centrum Przeciwdziałania Uzależnieniom (KCPU)</p>
              <p className="text-white/60 text-xs mb-1">
                Strona: <a href="https://kcpu.gov.pl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">kcpu.gov.pl</a>
              </p>
              <p className="text-white/50 text-xs">Ogólnopolska baza placówek terapeutycznych i informacje o leczeniu uzależnień.</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <p className="text-white font-bold mb-1">Anonimowi Hazardziści Polska (GA)</p>
              <p className="text-white/60 text-xs mb-1">
                Strona: <a href="https://www.hazardzisci.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">hazardzisci.org</a>
              </p>
              <p className="text-white/50 text-xs">Program 12 kroków — wspólnota wzajemnej pomocy dla uzależnionych i ich rodzin.</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: '#130010', border: '1px solid #2E001A' }}>
              <p className="text-white font-bold mb-1">Fundacja Krok po Kroku</p>
              <p className="text-white/60 text-xs mb-1">Telefon: <strong className="text-white">801 889 880</strong></p>
              <p className="text-white/50 text-xs">Specjalistyczna pomoc terapeutyczna dla uzależnionych od hazardu i ich rodzin.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Ochrona dzieci i młodzieży</h2>
          <p>
            Portal vulkan-vegas-pl.com.pl jest przeznaczony wyłącznie dla dorosłych (18+). Rodzice i opiekunowie
            powinni stosować oprogramowanie do kontroli rodzicielskiej, aby uniemożliwić nieletnim dostęp
            do treści dotyczących hazardu:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><a href="https://www.netnanny.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Net Nanny</a></li>
            <li><a href="https://www.cyberpatrol.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CyberPatrol</a></li>
            <li>Wbudowane narzędzia kontroli rodzicielskiej dostępne w systemach Windows, macOS, iOS i Android.</li>
          </ul>
        </section>

      </div>
    </main>
  )
}
