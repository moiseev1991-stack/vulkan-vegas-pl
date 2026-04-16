'use client'

import Link from 'next/link'

// anchor links shown below specific bonus cards
const bonusAnchors: Record<string, { pre: string; text: string; post: string; href: string }> = {
  welcome:   { pre: 'Aktywuj bonus z ', text: 'promo code',               post: '',  href: '/kod-promocyjny/' },
  freespins: { pre: 'Szukasz ',        text: 'Darmowych spinów bez depozytu', post: '?', href: '/bonus-bez-depozytu/' },
}

const bonuses = [
  {
    id: 'welcome',
    title: 'Bonus powitalny',
    value: '100%',
    sub: 'do 500 EUR',
    desc: 'Na pierwszy depozyt',
    image: '/images/bonuses/welcome-vv.png',
    badge: 'NAJPOPULARNIEJSZY',
    badgeColor: '#C4001C',
    cta: 'Odbierz bonus',
  },
  {
    id: 'reload',
    title: 'Bonus Reload',
    value: '50%',
    sub: 'co tydzień',
    desc: 'Na każdy depozyt',
    image: '/images/bonuses/reload-vv.png',
    badge: null,
    cta: 'Aktywuj',
  },
  {
    id: 'cashback',
    title: 'Cashback',
    value: '10%',
    sub: 'co tydzień',
    desc: 'Zwrot przegranych środków',
    image: '/images/bonuses/cashback-vv.png',
    badge: null,
    cta: 'Dowiedz się więcej',
  },
  {
    id: 'freespins',
    title: 'Darmowe spiny',
    value: '100 FS',
    sub: 'co miesiąc',
    desc: 'Na wybrane automaty',
    image: '/images/bonuses/freespins-vv.png',
    badge: 'NOWY',
    badgeColor: '#006633',
    cta: 'Odbierz spiny',
  },
]

const regulamin = [
  'Bonusy dostępne wyłącznie dla zarejestrowanych graczy.',
  'Każdy bonus podlega wymogowi obrotu x30 przed wypłatą.',
  'Bonus powitalny można odebrać tylko raz na konto.',
  'Cashback naliczany jest co poniedziałek za poprzedni tydzień.',
  'Darmowe spiny ważne przez 7 dni od momentu przyznania.',
  'Vulkan Vegas zastrzega sobie prawo do zmiany warunków bonusów.',
]

export default function BonusesClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: '320px', background: 'linear-gradient(135deg, #3d0000 0%, #130010 50%, #0A000B 100%)' }}
      >
        {/* Full-bleed image on the right with fade mask */}
        <div
          className="absolute right-0 top-0 h-full hidden lg:block"
          style={{
            width: '55%',
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          }}
        >
          <img
            src="/images/bonuses/hero-vv.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 container mx-auto px-4 flex items-center" style={{ minHeight: '320px' }}>
          <div className="max-w-lg">
            <span
              className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full mb-4"
              style={{ background: '#C4001C' }}
            >
              🎁 BONUSY
            </span>
            <h1 className="text-4xl font-black text-white mb-3">Bonusy kasynowe</h1>
            <p className="text-white/60 text-sm mb-6 max-w-md">
              Odbierz ekskluzywne bonusy i zwiększ swoje szanse na wygraną. Nowe oferty każdego tygodnia!
            </p>
            <Link
              href="#bonuses"
              className="inline-block text-black font-bold text-sm px-6 py-2.5 rounded-md hover:bg-yellow-400 transition"
              style={{ background: '#FFC500' }}
            >
              Zobacz wszystkie bonusy
            </Link>
          </div>
        </div>
      </div>

      {/* Bonus cards */}
      <div id="bonuses" className="container mx-auto px-4 py-10">
        <h2 className="text-white font-bold text-xl mb-6">Dostępne bonusy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-2xl overflow-hidden flex flex-col hover:border-brand/40 transition-colors"
              style={{ background: '#130010', border: '1px solid #2a0000' }}
            >
              {/* Image area */}
              <div className="relative h-36 overflow-hidden" style={{ background: 'linear-gradient(160deg, #260015 0%, #0A000B 100%)' }}>
                {bonus.badge && (
                  <span
                    className="absolute top-2 right-2 z-10 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full"
                    style={{ background: bonus.badgeColor }}
                  >
                    {bonus.badge}
                  </span>
                )}
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-white/50 text-xs mb-0.5">{bonus.desc}</p>
                <p className="text-gold font-black text-2xl leading-none mb-1">{bonus.value}</p>
                <p className="text-white font-bold text-sm mb-1">{bonus.title}</p>
                <p className="text-white/40 text-xs mb-4">{bonus.sub}</p>
                <a
                  href="/go/"
                  className="mt-auto w-full py-2 rounded-xl text-black font-bold text-sm hover:bg-yellow-400 transition-colors text-center block"
                  style={{ background: '#FFC500' }}
                >
                  {bonus.cta}
                </a>
              </div>
              {bonusAnchors[bonus.id] && (
                <div className="px-4 pb-4">
                  <p className="text-xs text-white/50">
                    {bonusAnchors[bonus.id].pre}
                    <Link
                      href={bonusAnchors[bonus.id].href}
                      className="underline hover:text-yellow-300 transition"
                      style={{ color: '#FFC500' }}
                    >
                      {bonusAnchors[bonus.id].text}
                    </Link>
                    {bonusAnchors[bonus.id].post}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Regulamin */}
      <div className="container mx-auto px-4 pb-16">
        <div
          className="rounded-xl p-6"
          style={{ background: '#110000', border: '1px solid #2a0000' }}
        >
          <h3 className="text-white font-bold text-base mb-4">Regulamin bonusów</h3>
          <ol className="list-decimal list-inside space-y-2">
            {regulamin.map((item, i) => (
              <li key={i} className="text-white/50 text-sm leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* SEO Article */}
      <div className="h-px bg-[#160010] mb-12" />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-xl font-black text-white mb-3">Jak działają bonusy Vulkan Vegas w 2026?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Bonusy są mechanizmem promocyjnym podlegającym regulaminowi: warunki obrotu (WR), limity stawek, listy wykluczonych gier, terminy ważności, weryfikacja KYC. W Polsce gry kasynowe online mogą oferować wyłącznie podmioty z krajową licencją; zawsze sprawdzaj status prawny i aktualny regulamin promocji.</p>
          <h3 className="text-lg font-black text-white mb-2">Typy bonusów: powitalny, cashback, reload</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3"><strong className="text-white">Bonus powitalny</strong> — jednorazowy pakiet dla nowych graczy, zwykle dopasowanie pierwszego depozytu (100% lub 200%) z opcjonalnymi darmowymi spinami. <strong className="text-white">Cashback</strong> — zwrot części netto strat w określonym okresie, z WR lub bez. <strong className="text-white">Reload</strong> — powtarzalny bonus dopasowania depozytu dla istniejących graczy z własnym WR i oknem czasowym.</p>
          <h3 className="text-lg font-black text-white mb-2">Dopasowanie 100% i 200%: jak liczone są kwoty?</h3>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Scenariusz</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Wpłata</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Bonus</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Suma startowa</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Dopasowanie 100%</td><td style="padding:6px 9px;border:1px solid #3a0010">100 €</td><td style="padding:6px 9px;border:1px solid #3a0010">100 €</td><td style="padding:6px 9px;border:1px solid #3a0010">200 €</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Dopasowanie 200%</td><td style="padding:6px 9px;border:1px solid #3a0010">50 €</td><td style="padding:6px 9px;border:1px solid #3a0010">100 €</td><td style="padding:6px 9px;border:1px solid #3a0010">150 €</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Dopasowanie 200%</td><td style="padding:6px 9px;border:1px solid #3a0010">100 €</td><td style="padding:6px 9px;border:1px solid #3a0010">200 €</td><td style="padding:6px 9px;border:1px solid #3a0010">300 €</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Bonus bez depozytu i darmowe spiny: co realnie dostaniesz?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Oferty bez depozytu są przyznawane według zasad opisanych w regulaminach i mogą różnić się zależnie od kraju, konta i kampanii. Zawsze sprawdzaj w zakładce „Promocje" po zalogowaniu — to jedyne wiarygodne miejsce z bieżącą ofertą. Klucz: liczba spinów × stawka × RTP = wartość nominalna; ale WR i limit max cashout decydują o realnej wypłacalności.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Element oferty</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Co to oznacza</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Na co uważać</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Darmowe spiny bez depozytu</td><td style="padding:6px 9px;border:1px solid #3a0010">Spiny na wybrane sloty bez wpłaty</td><td style="padding:6px 9px;border:1px solid #3a0010">WR dotyczy wygranych z FS; krótkie terminy ważności</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Bonus kwotowy (np. 25 €)</td><td style="padding:6px 9px;border:1px solid #3a0010">Środki bonusowe bez wpłaty</td><td style="padding:6px 9px;border:1px solid #3a0010">WR, limit maks. wypłaty, limity stawek</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Maks. wypłata (max cashout)</td><td style="padding:6px 9px;border:1px solid #3a0010">Limit wypłaty po spełnieniu WR</td><td style="padding:6px 9px;border:1px solid #3a0010">Nadwyżka może zostać utracona</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Warunki obrotu, limity i RTP — co musisz wiedzieć</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">WR (wagering) to mnożnik obrotu przed wypłatą. Limity stawek i wagi gier decydują, co liczy się do rozliczenia. RTP i zmienność wpływają na szanse dokończenia obrotu.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Scenariusz WR</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Podstawa</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Mnożnik</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Wymagany obrót</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">WR od bonusu</td><td style="padding:6px 9px;border:1px solid #3a0010">Bonus = 200 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">30×</td><td style="padding:6px 9px;border:1px solid #3a0010">6 000 PLN</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">WR od depozytu + bonusu</td><td style="padding:6px 9px;border:1px solid #3a0010">Depozyt 200 + Bonus 200</td><td style="padding:6px 9px;border:1px solid #3a0010">25×</td><td style="padding:6px 9px;border:1px solid #3a0010">10 000 PLN</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">WR od wygranych z FS</td><td style="padding:6px 9px;border:1px solid #3a0010">Wygrana 50 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">20×</td><td style="padding:6px 9px;border:1px solid #3a0010">1 000 PLN</td></tr></tbody></table>' }} />
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Przewaga kasyna = 1 − RTP. Oczekiwana strata podczas WR = obrót × przewaga. Przy RTP 96% i obrocie 4 000 PLN: strata ok. 160 PLN. Wybieraj sloty z wyższym RTP i niską/średnią zmiennością — bezpieczniejsze przy rozliczaniu WR.</p>

          <h2 className="text-xl font-black text-white mb-3">Czy warto? Ryzyka, alternatywy i kontekst prawny w Polsce</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Najsilniejszy kontrargument: po doliczeniu WR, wag gier i limitów stawek oczekiwana strata może przewyższyć wartość bonusu. W Polsce działalność hazardową reguluje Ustawa o grach hazardowych. Gry kasynowe online mogą być legalnie oferowane wyłącznie w ramach monopolu państwowego.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Scenariusz</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">WR i obrót</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Strata (RTP 96%)</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Saldo oczekiwane</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Bonus 100 PLN, WR 30×</td><td style="padding:6px 9px;border:1px solid #3a0010">3 000 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">120 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">−20 PLN</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Depozyt 200+Bonus 200, WR 25×</td><td style="padding:6px 9px;border:1px solid #3a0010">10 000 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">400 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">−200 PLN</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">50 FS (0,50 PLN), WR 20×</td><td style="padding:6px 9px;border:1px solid #3a0010">480 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">19 PLN</td><td style="padding:6px 9px;border:1px solid #3a0010">~+5 PLN</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Często Zadawane Pytania</h2>
          {[
            { q: 'Czy Vulkan Vegas jest legalne w Polsce w 2026?', a: 'Nie. Prywatni operatorzy kasyn online nie mają polskiej licencji. Monopol online ma Totalizator Sportowy. Status domen sprawdzisz na hazard.mf.gov.pl.' },
            { q: 'Jak w 60 sekund policzyć, czy bonus jest opłacalny?', a: 'EV ≈ wartość bonusu − (1−RTP) × wymagany obrót. Bonus 500 PLN, WR 30×, RTP 96%: obrót 15 000, strata 4% × 15 000 = 600, EV = 500 − 600 = −100 PLN.' },
            { q: 'Które metody płatności często nie kwalifikują do bonusu?', a: 'Wybrane e-portfele (Skrill, Neteller, Paysafecard) i vouchery. Sprawdź sekcję "Wykluczone metody" w warunkach konkretnej promocji.' },
            { q: 'Co oznacza limit stawki 5 PLN na spin podczas WR?', a: 'Każdy spin powyżej 5 PLN może unieważnić bonus. Ustaw stałą stawkę poniżej limitu, najlepiej o 10–20% niższą od progu regulaminowego.' },
            { q: 'Czy istnieją darmowe spiny bez obrotu (0x)?', a: 'Tak, ale są rzadkie. Rozpoznasz je po zapisie "Wagering: 0x" — wygrane trafiają do salda gotówkowego bez WR.' },
            { q: 'Jak bezpiecznie zrezygnować z bonusu?', a: 'Przed grą użyj opcji "anuluj/forfeit" w sekcji Bonusy. Po postawieniu zakładu środki mogą być "zablokowane" przez WR do czasu rozliczenia.' },
            { q: 'Ile czasu jest na spełnienie WR?', a: 'Bonus depozytowy: 7–14 dni. Reload: 1–3 dni. Darmowe spiny: 24–72 godz. Cashback: 1–7 dni. Sprawdź od kiedy liczony jest czas.' },
            { q: 'Cashback 10% vs dopasowanie depozytu: co bardziej opłacalne?', a: 'Cashback 10% bez WR: strata 1 000 PLN = +100 PLN natychmiast. Dopasowanie 50% (bonus 500 PLN) z WR 30× i RTP 96%: strata 600 PLN, EV ≈ −100 PLN.' },
            { q: 'Czy używanie VPN do aktywacji bonusu jest bezpieczne?', a: 'Nie. VPN narusza regulamin; systemy wykrywają niespójności geolokalizacji z KYC, co grozi anulowaniem bonusu i blokadą wypłaty.' },
            { q: 'Jak sprawdzić wersję RTP slotu u operatora?', a: 'Otwórz kartę informacyjną gry (ikona „i"/paytable) — producent publikuje RTP dla konkretnej instancji. Ten sam slot może mieć warianty np. 96,2% vs 94,1%.' },
            { q: 'Dlaczego bonus może zostać anulowany po spełnieniu WR?', a: 'Najczęściej: przekroczenie limitu stawki, gra na wykluczonym tytule lub wpłata wykluczoną metodą. Naruszenia są wykrywane ex post.' },
            { q: 'Jak limit max cashout obcina wynik?', a: 'Przykład: bonus 100 PLN, max cashout 5× = 500 PLN. Wygrana 1 200 PLN → wypłacalne 500 PLN. Nadwyżka 700 PLN jest kasowana zgodnie z regulaminem.' },
            { q: 'Co oznacza waga gier 50% dla wymaganego obrotu?', a: 'Waga 50% podwaja nominalny obrót: przy WR 30× i 6 000 PLN wymaganych, potrzeba 12 000 PLN stawek faktycznych.' },
          ].map(({ q, a }, i) => (
            <div key={i} className="border-b border-[#2a0010] pb-3 mb-3">
              <p className="text-white text-sm font-bold mb-1">{q}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
