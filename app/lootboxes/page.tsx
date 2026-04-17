import type { Metadata } from 'next'
import { lootboxes } from '@/data/lootboxes'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Vegas Lootboxy PL — Skrzynki z Nagrodami Casino 2026' },
  description: 'Lootboxy kasynowe Vulkan Vegas PL 2026 — kupuj skrzynki i wygrywaj free spiny, bonusy i nagrody pieniężne. Zasady, limity zakupu i warunki odbioru nagród w kasynie.',
  openGraph: {
    title: 'Vulkan Vegas Lootboxy PL — Skrzynki z Nagrodami Casino 2026',
    description: 'Lootboxy Vulkan Vegas PL — skrzynki z nagrodami: free spiny, bonusy pieniężne i zasady wypłat dla polskich graczy.',
    url: 'https://vulkan-vegas-pl.com.pl/lootboxes/',
  },
}

const rules = [
  'Każdy typ lootboxa można kupić maksymalnie 3 razy dziennie. Limit zakupu odnawia się o godzinie 00:00 UTC następnego dnia kalendarzowego.',
  'Zakup lootboxa odbywa się z rzeczywistego salda.',
  'Dokładna kwota nagrody zostanie ujawniona po zakupie każdego lootboxa.',
  'Po zakupie nagrody będą dostępne w sekcji bonusów kasyna lub na twoim koncie osobistym.',
  'Zakłady z darmowymi spinami wynoszą: 0,2 EUR/USD/CAD/CHF, 0,8 PLN/PEN, 2 SEK/NOK, 150 CLP, 100 ARS.',
  'Jeśli nie możesz użyć swoich darmowych spinów z jakiegokolwiek powodu — skontaktuj się z naszym zespołem wsparcia.',
  'Aktywacja bonusów może być ograniczona w zależności od twojej lokalizacji lub przepisów regionalnych.',
  'Niewykorzystane bonusy wygasną i zostaną usunięte z twojego konta 3 dni po ich przyznaniu.',
  'Obowiązują ogólne warunki bonusów.',
]

const rewardIcon: Record<string, string> = {
  'Bonus pieniężny':                    '🔴',
  'Pieniądze na saldzie rzeczywistym':  '💰',
  'Darmowe obroty w najlepszej grze':   '🎰',
  'Koło Fortuny':                       '🎡',
  'Darmowe obroty':                     '🎰',
  'Pieniądze na saldzie':               '💰',
}

const easterBox  = lootboxes.find((l) => l.id === 'easter')!
const mainBoxes  = lootboxes.filter((l) => l.id !== 'easter')

export default function LootboxesPage() {
  return (
    <div>

      {/* ── 1. Hero баннер ── */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: '280px', background: 'linear-gradient(135deg, #130010 0%, #2d0005 50%, #07000C 100%)' }}
      >
        <div
          className="relative z-10 px-16 py-10 w-full"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <h2 className="text-4xl font-black text-white mb-2">Lootboxy</h2>
          <p className="text-gray-300 text-sm mb-1">Odkryj niesamowite nagrody</p>
          <p className="text-gray-400 text-sm">
            Co jest w środku? Tylko jeden sposób, aby się przekonać — otwórz i ciesz się!
          </p>
        </div>
        <div
          className="absolute right-0 top-0 h-full"
          style={{
            width: '65%',
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
          }}
        >
          <img
            src="/images/lootboxes/hero-chest.png"
            alt="Lootbox hero"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </section>

      {/* ── 2. Три основные карточки ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-8"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {mainBoxes.map((box) => (
          <div
            key={box.id}
            className="relative rounded-xl overflow-hidden flex flex-col cursor-pointer group"
            style={{
              background: 'linear-gradient(180deg, #130010 0%, #0A000B 100%)',
              border: '1px solid #2E001A',
              borderTop: `2px solid ${box.glowColor}`,
              boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 20px ${box.glowColor}22`,
            }}
          >
            {/* Картинка — полная ширина сверху */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={box.image}
                alt={box.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Свечение снизу картинки */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: `linear-gradient(to top, #0A000B, transparent)` }}
              />
              {/* Бейдж цены */}
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-black"
                style={{ background: '#FFC500', color: '#000' }}
              >
                €{box.price}
              </div>
            </div>

            {/* Контент */}
            <div className="flex flex-col items-center text-center px-6 pb-6 pt-4">
              <h3 className="text-white font-black text-2xl mb-3">{box.name}</h3>

              {/* Бейдж наград */}
              <span
                className="text-xs font-bold px-4 py-1 rounded-full mb-4"
                style={{ background: '#130010', border: `1px solid ${box.glowColor}66`, color: '#FFC500' }}
              >
                Zdobądź {box.rewardCount} nagród
              </span>

              {/* Иконки типов наград */}
              <div className="flex gap-3 mb-6">
                {box.rewardTypes.map((type, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: '#130010', border: '1px solid #2a0000' }}
                    title={type}
                  >
                    {rewardIcon[type] ?? '🎁'}
                  </div>
                ))}
              </div>

              {/* Кнопки */}
              <div className="flex items-center gap-2 w-full">
                <button
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm text-gray-500 hover:text-white flex-shrink-0 transition"
                  style={{ border: '1px solid #2E001A', background: '#110000' }}
                >
                  ⓘ
                </button>
                <button
                  className="flex-1 font-black text-sm py-3 rounded-lg hover:bg-yellow-400 transition"
                  style={{ background: '#FFC500', color: '#000' }}
                >
                  Otwórz dla {box.price}€
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── 3. Easter Box ── */}
      <div className="px-4 pb-8" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style={{
            background: 'linear-gradient(135deg, #130010 0%, #0A000B 100%)',
            border: '1px solid #5a2000',
            boxShadow: '0 8px 40px rgba(200,80,0,0.2)',
          }}
        >
          {/* Картинка — половина ширины на десктопе */}
          <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
            <img
              src={easterBox.image}
              alt={easterBox.name}
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{ background: 'linear-gradient(to top, #0A000B 0%, transparent 60%)' }}
            />
            <div
              className="absolute top-0 right-0 bottom-0 w-24 hidden md:block"
              style={{ background: 'linear-gradient(to right, transparent, #0A000B)' }}
            />
          </div>

          {/* Контент */}
          <div className="flex flex-col justify-center p-8 md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#5a2000', color: '#FFC500' }}>
                🐣 WIELKANOC
              </span>
            </div>
            <h3 className="text-white font-black text-3xl mb-1">{easterBox.name}</h3>
            <p className="text-gold font-black text-2xl mb-3">€{easterBox.price}</p>
            <p className="text-gray-400 text-sm mb-5">
              Otwórz skrzynię i zdobądź {easterBox.rewardCount} losowych nagród z poniższej listy!
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {easterBox.rewardTypes.map((type) => (
                <span key={type} className="flex items-center gap-1.5 text-xs text-gray-300 px-3 py-1.5 rounded-full" style={{ background: '#1a0800', border: '1px solid #3a1500' }}>
                  <span>{rewardIcon[type] ?? '🎁'}</span>
                  {type}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                className="text-gray-400 text-sm px-4 py-2.5 rounded-lg hover:border-gray-500 flex items-center gap-1.5 transition"
                style={{ border: '1px solid #5a2000' }}
              >
                ⓘ Info
              </button>
              <button
                className="flex-1 text-black font-black text-sm py-2.5 rounded-lg hover:bg-yellow-400 transition"
                style={{ background: '#FFC500' }}
              >
                Otwórz dla {easterBox.price}€
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Regulamin ── */}
      <section
        className="px-4 pb-12"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        <h2 className="text-base font-bold text-white mb-4">Regulamin</h2>
        <div
          className="rounded-xl p-6"
          style={{ background: '#110000', border: '1px solid #2a0000' }}
        >
          <ol className="space-y-3">
            {rules.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-400">
                <span className="font-bold flex-shrink-0" style={{ color: '#C4001C' }}>{i + 1}.</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEO Article */}
      <div className="h-px bg-[#160010] mb-12" />
      <section className="container mx-auto px-4 py-12 max-w-4xl">

        <h1 className="text-xl font-black text-white mb-3">Lootboxy Vulkan Vegas: zasady, limity i nagrody 2026</h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Kompletny przewodnik po lootboxach Vulkan Vegas dla graczy z Polski. Poznasz zasady, limity, rodzaje nagród i sposoby bezpiecznej gry, aby świadomie oceniać wartość skrzynek i unikać błędów.
        </p>

        <h2 className="text-lg font-black text-white mb-3">Czym są lootboxy Vulkan Vegas i jak działają?</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Lootboxy to płatne lub odblokowywane za punkty skrzynki z losową nagrodą przypisaną do Twojego konta gracza. Zwykle zawierają: bonusy do depozytu, darmowe spiny na wybrane sloty, jednorazowy cashback, punkty lojalnościowe lub fizyczne/niemonetarne nagrody w akcjach specjalnych. Mechanika polega na zakupie/aktywacji skrzynki, a następnie losowaniu nagrody przez generator liczb losowych (RNG). Każda skrzynka ma własny koszyk potencjalnych nagród i regulamin (np. warunki obrotu, ważność nagród, wyłączenia gier). Dostępność i warunki ofert mogą zależeć od kraju zamieszkania gracza oraz zgodności z lokalnym prawem; przed udziałem sprawdź zasady serwisu oraz rejestr ostrzeżeń Ministerstwa Finansów (<a href="https://hazard.mf.gov.pl/" className="text-brand underline">hazard.mf.gov.pl</a>).
        </p>

        <h3 className="text-base font-bold text-white mb-2">Jak otworzyć skrzynkę krok po kroku?</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">
          Poniżej znajdziesz standardową sekwencję działań, która pozwala bezpiecznie i świadomie otwierać skrzynki z nagrodami. Rzeczywisty układ panelu i nazwy sekcji mogą się różnić w zależności od operatora.
        </p>
        <ul className="text-gray-500 text-sm space-y-2 mb-4 list-disc list-inside">
          <li>Zaloguj się lub załóż konto gracza z prawdziwymi danymi. Wypłata wymaga weryfikacji tożsamości (KYC).</li>
          <li>Przejdź do sekcji Promocje/Sklep/&ldquo;Lootboxy&rdquo;. Przeczytaj cenę/warunki odblokowania, zakres nagród, warunki obrotu, ograniczenia geograficzne i czas trwania akcji.</li>
          <li>Skonfiguruj limity odpowiedzialnej gry (depozyt, czas, stawki).</li>
          <li>Wybierz skrzynkę i potwierdź zakup/aktywację. Transakcje tego typu są zwykle nieodwracalne.</li>
          <li>Otwórz skrzynkę. System losuje nagrodę; bonusowe środki trafiają do salda bonusowego, darmowe spiny — do wskazanych gier.</li>
          <li>Spełnij warunki w terminie ważności. Postęp sprawdzaj w panelu konta w sekcji &ldquo;Bonusy&rdquo;.</li>
        </ul>

        <h3 className="text-base font-bold text-white mb-2">Jak działa RNG i co oznacza dla wyników?</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">
          RNG (Random Number Generator) to oprogramowanie generujące liczby losowe determinujące wynik otwarcia skrzynki. Kluczowe właściwości: niezależność zdarzeń (każde losowanie jest niezależne), nieprzewidywalność, stabilność rozkładu oraz oddzielenie puli (RNG skrzynki ≠ RNG slotu). Rzetelni operatorzy korzystają z audytów niezależnych laboratoriów (np. eCOGRA, iTech Labs, GLI).
        </p>

        <h3 className="text-base font-bold text-white mb-2">Jakie typy skrzynek i poziomy nagród są dostępne?</h3>
        <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;background:#130012"><thead><tr><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Kategoria skrzynki</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Typowe zastosowanie</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Przykładowe nagrody</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Poziomy rzadkości</th></tr></thead><tbody><tr><td style="border:1px solid #3a0010;padding:7px 9px">Standardowa</td><td style="border:1px solid #3a0010;padding:7px 9px">Codzienne oferty o niskim progu wejścia</td><td style="border:1px solid #3a0010;padding:7px 9px">Darmowe spiny, mały bonus %, punkty</td><td style="border:1px solid #3a0010;padding:7px 9px">Common, Uncommon, Rare</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Premium / High-roller</td><td style="border:1px solid #3a0010;padding:7px 9px">Wyższa cena, wyższe nagrody</td><td style="border:1px solid #3a0010;padding:7px 9px">Wyższy bonus, cashback, podwyższony limit wypłaty</td><td style="border:1px solid #3a0010;padding:7px 9px">Rare, Epic, Legendary</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Eventowa / Sezonowa</td><td style="border:1px solid #3a0010;padding:7px 9px">Ograniczona czasowo</td><td style="border:1px solid #3a0010;padding:7px 9px">Spiny do gier tematycznych, wejściówki do turniejów</td><td style="border:1px solid #3a0010;padding:7px 9px">Common, Rare, Epic</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Lojalnościowa / VIP</td><td style="border:1px solid #3a0010;padding:7px 9px">Nagrody dla stałych graczy</td><td style="border:1px solid #3a0010;padding:7px 9px">Wyższe cashbacki, dedykowane bonusy</td><td style="border:1px solid #3a0010;padding:7px 9px">Rare, Epic, Legendary</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Tematyczna / Slotowa</td><td style="border:1px solid #3a0010;padding:7px 9px">Powiązana z konkretną grą</td><td style="border:1px solid #3a0010;padding:7px 9px">Spiny tylko do wskazanego slotu</td><td style="border:1px solid #3a0010;padding:7px 9px">Common, Uncommon, Rare</td></tr></tbody></table>' }} />

        <h2 className="text-lg font-black text-white mb-3">Jakie są zasady, limity i wymogi w Polsce?</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          W Polsce gry hazardowe online podlegają ustawie z 19 listopada 2009 r. o grach hazardowych; legalne kasyno online prowadzi monopol państwowy (Totalizator Sportowy), a bukmacherzy muszą posiadać polską licencję. Dostawcy bez lokalnej licencji są wpisywani do rejestru domen zakazanych Ministerstwa Finansów, a płatności mogą być blokowane przez banki. Przed korzystaniem z ofert sprawdź aktualne informacje w rejestrze (<a href="https://hazard.mf.gov.pl/" className="text-brand underline">hazard.mf.gov.pl</a>).
        </p>

        <h3 className="text-base font-bold text-white mb-2">Jakie limity depozytu i stawki warto ustawić?</h3>
        <ul className="text-gray-500 text-sm space-y-2 mb-4 list-disc list-inside">
          <li>Limit depozytu dziennego/tygodniowego/miesięcznego — określa łączną kwotę wpłat w wybranym okresie.</li>
          <li>Limit stawek — ogranicza maksymalną stawkę na zakład/obrót.</li>
          <li>Limit czasu — zamyka dostęp po przekroczeniu określonej długości sesji.</li>
          <li>Limit strat — zatrzymuje grę po osiągnięciu dopuszczalnej straty.</li>
          <li>Przerwy i cooldown — wymuszają przerwę między sesjami.</li>
          <li>Samowykluczenie — czasowe lub bezterminowe wyłączenie konta.</li>
        </ul>

        <h3 className="text-base font-bold text-white mb-2">Jak przebiega weryfikacja konta (KYC) i dlaczego jest ważna?</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          KYC (Know Your Customer) to proces potwierdzania tożsamości wynikający z przepisów AML/CFT. Standardowo sprawdza się: dane identyfikacyjne, dokument tożsamości (dowód/paszport), potwierdzenie adresu, a w wybranych przypadkach — źródło środków (SOF/SOW). Brak KYC lub nadmierne opóźnienia w weryfikacji u operatora to istotny sygnał ostrzegawczy.
        </p>

        <h3 className="text-base font-bold text-white mb-2">Jakie metody płatności w PL działają?</h3>
        <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;background:#130012"><thead><tr><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Metoda</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Silne uwierzytelnienie (SCA)</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Czas księgowania</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Uwagi</th></tr></thead><tbody><tr><td style="border:1px solid #3a0010;padding:7px 9px">BLIK</td><td style="border:1px solid #3a0010;padding:7px 9px">Tak — autoryzacja w aplikacji banku</td><td style="border:1px solid #3a0010;padding:7px 9px">Natychmiast, 24/7</td><td style="border:1px solid #3a0010;padding:7px 9px">Limity transakcyjne w banku/aplikacji</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Przelewy24</td><td style="border:1px solid #3a0010;padding:7px 9px">Tak — SCA w banku lub 3-D Secure dla kart</td><td style="border:1px solid #3a0010;padding:7px 9px">Zwykle natychmiast</td><td style="border:1px solid #3a0010;padding:7px 9px">Obsługuje BLIK, szybkie przelewy i karty</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Karta płatnicza</td><td style="border:1px solid #3a0010;padding:7px 9px">Tak — 3-D Secure 2</td><td style="border:1px solid #3a0010;padding:7px 9px">Autoryzacja natychmiast</td><td style="border:1px solid #3a0010;padding:7px 9px">Banki mogą blokować transakcje bez polskiej licencji</td></tr></tbody></table>' }} />

        <h2 className="text-lg font-black text-white mb-3">Co można wygrać i jak porównać oferty skrzynek?</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          W skrzynkach najczęściej znajdują się bonusy do depozytu, darmowe spiny, cashbacki, punkty lojalnościowe lub dostępy do turniejów. Porównując oferty, koncentruj się na realnej wartości po uwzględnieniu warunków obrotu (WR), ograniczeń stawek, gier wykluczonych i terminów ważności.
        </p>

        <h3 className="text-base font-bold text-white mb-2">Jak policzyć realną wartość skrzynki (RTP, rzadkość)?</h3>
        <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;background:#130012"><thead><tr><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Element</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Wzór EV</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Uwagi praktyczne</th></tr></thead><tbody><tr><td style="border:1px solid #3a0010;padding:7px 9px">Lootbox (lista nagród i szanse)</td><td style="border:1px solid #3a0010;padding:7px 9px">EV = ∑(pᵢ × Vᵢ) − C</td><td style="border:1px solid #3a0010;padding:7px 9px">Potrzebujesz oficjalnych pᵢ. Bez nich kalkulacja jest spekulacją.</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Darmowe spiny 0x WR</td><td style="border:1px solid #3a0010;padding:7px 9px">EV ≈ n × s × r</td><td style="border:1px solid #3a0010;padding:7px 9px">Brak obrotu — prosty i przewidywalny zwrot.</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Darmowe spiny z obrotem WR</td><td style="border:1px solid #3a0010;padding:7px 9px">EV ≈ max[0, n × s × r × (1 − WR × (1−r))]</td><td style="border:1px solid #3a0010;padding:7px 9px">Wysoki WR obniża wartość.</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">Cashback 0x WR</td><td style="border:1px solid #3a0010;padding:7px 9px">EV wzrost ≈ min[L, c × (t × (1−r))]</td><td style="border:1px solid #3a0010;padding:7px 9px">Zmniejsza koszt gry o współczynnik c, do limitu L.</td></tr></tbody></table>' }} />

        <h2 className="text-lg font-black text-white mb-3">Jak powstały lootboxy w kasynie i czego nas nauczyła historia?</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Mechanika lootboxów wywodzi się z gier wideo i mobilnych systemów &ldquo;gacha&rdquo;. Z czasem branża iGaming zaadaptowała ten model do promocji kasynowych, dodając formalne zasady, weryfikacje KYC/AML oraz audyty RNG. Historia pokazuje, że długowieczne są rozwiązania transparentne (jasne szanse, limitacje i warunki obrotu), a ryzykowne — mechaniki &ldquo;pay-to-win&rdquo; i brak przejrzystości.
        </p>
        <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;background:#130012"><thead><tr><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Rok</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Rynek</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Wydarzenie</th><th style="border:1px solid #3a0010;padding:7px 9px;background:#0E0010;color:#FFC500">Znaczenie</th></tr></thead><tbody><tr><td style="border:1px solid #3a0010;padding:7px 9px">2010</td><td style="border:1px solid #3a0010;padding:7px 9px">Gry PC (globalnie)</td><td style="border:1px solid #3a0010;padding:7px 9px">Team Fortress 2 wprowadza skrzynki wymagające kluczy</td><td style="border:1px solid #3a0010;padding:7px 9px">Utrwalenie modelu w mainstreamie</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">2018</td><td style="border:1px solid #3a0010;padding:7px 9px">Belgia</td><td style="border:1px solid #3a0010;padding:7px 9px">Komisja Gier uznaje wybrane lootboxy za naruszające prawo hazardowe</td><td style="border:1px solid #3a0010;padding:7px 9px">Precedens w UE</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">2017–obecnie</td><td style="border:1px solid #3a0010;padding:7px 9px">Polska</td><td style="border:1px solid #3a0010;padding:7px 9px">Nowelizacje ustawy hazardowej; rejestr domen zakazanych</td><td style="border:1px solid #3a0010;padding:7px 9px">Wzmocniona kontrola nad ofertami online</td></tr><tr><td style="border:1px solid #3a0010;padding:7px 9px">2023</td><td style="border:1px solid #3a0010;padding:7px 9px">UE</td><td style="border:1px solid #3a0010;padding:7px 9px">Rezolucja PE nt. ochrony konsumentów w grach wideo</td><td style="border:1px solid #3a0010;padding:7px 9px">Apel o przejrzystość i badania nad wpływem lootboxów</td></tr></tbody></table>' }} />

        <h2 className="text-lg font-black text-white mb-3">Jaka jest najsilniejsza krytyka lootboxów i jak na nią odpowiedzieć?</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Najczęściej podnoszona krytyka dotyczy nieprzewidywalności wyników i braku pełnej przejrzystości szans na poszczególne nagrody, co może sprzyjać nadmiernym wydatkom. Odpowiedzią jest zestaw praktyk po stronie gracza (limity, przerwy, budżet) oraz po stronie operatora (jasne zasady, publikacja prawdopodobieństw, audyt RNG).
        </p>

        <hr className="border-[#2a0010] my-8" />

        <h2 className="text-lg font-black text-white mb-4">Często Zadawane Pytania</h2>
        {[
          {
            q: 'Czy lootboxy mają RTP jak sloty? Jaka jest różnica między RTP a oczekiwaną wartością (EV) skrzynki?',
            a: 'Lootbox nie ma stałego RTP jak slot; jego opłacalność opisuje oczekiwana wartość EV liczona z prawdopodobieństw nagród i ich wartości netto pomniejszona o koszt skrzynki. RTP dotyczy wyłącznie gier i określa średni zwrot z zakładów w długim okresie, nie zaś loterii nagród w skrzynce.'
          },
          {
            q: 'Jak samodzielnie policzyć oczekiwaną wartość lootboxa, jeśli operator podaje szanse i listę nagród?',
            a: 'Użyj wzoru EV = suma p_i × V_i − koszt, gdzie V_i to wartość realna nagrody po uwzględnieniu WR, RTP i limitów wypłat. Dla spinów 0x WR przy stawce 1 zł i RTP 96% wartość jednego spina to około 0,96 zł.'
          },
          {
            q: 'Co zrobić, gdy operator nie publikuje prawdopodobieństw nagród w lootboxach?',
            a: 'Bez oficjalnych szans EV jest niemożliwe do rzetelnego wyliczenia — traktuj skrzynkę jak koszt rozrywki i ogranicz liczbę prób budżetem z góry. Ustal sztywny limit wartościowy (np. 1–3% miesięcznego budżetu na rozrywkę).'
          },
          {
            q: 'Jak rozpoznać bonus ze skrzynki, którego realna wartość jest bliska zeru?',
            a: 'Zastosuj test WR × (1 − RTP) ≥ 1; jeśli zachodzi, oczekiwana wartość bonusu zbliża się do zera. Przykład: WR 35x i RTP 96% dają 35×0,04 = 1,4 — statystyczny koszt obrotu przewyższa wartość bonusu.'
          },
          {
            q: 'Jak szybko ocenić, czy zdążę spełnić warunki obrotu z nagrody ze skrzynki przed wygaśnięciem?',
            a: 'Policz wymagany obrót T = WR × podstawa obrotu i zamień go na liczbę zagrań N = T ÷ maksymalna dozwolona stawka, a następnie porównaj z czasem do wygaśnięcia i swoim tempem gry.'
          },
          {
            q: 'Czy w Polsce w 2026 r. jest prawny obowiązek publikowania szans nagród w lootboxach?',
            a: 'Nie ma jednolitego przepisu nakazującego publikację "RTP skrzynki". Kluczowe są przejrzyste informacje konsumenckie o cenie i warunkach świadczenia oraz legalność działalności podmiotu; weryfikuj status w rejestrze MF hazard.mf.gov.pl.'
          },
          {
            q: 'Czy zakupiony lootbox można zwrócić w UE w ciągu 14 dni?',
            a: 'Nie, prawo odstąpienia 14 dni nie obejmuje usług hazardowych, a dyrektywa konsumencka UE wyłącza gry hazardowe ze swojego zakresu. Przy jednorazowym losowaniu brak możliwości zwrotu po otwarciu skrzynki.'
          },
          {
            q: 'Jak zweryfikować uczciwość RNG lootboxów w praktyce?',
            a: 'Sprawdź certyfikację niezależnych laboratoriów w stopce i regulaminach (numery i daty certyfikatów). Empiryczne testy wymagają bardzo dużych prób — aby oszacować zdarzenie 1% z dokładnością ±0,2 p.p. potrzeba około 9500 otwarć, więc musisz polegać na audycie.'
          },
          {
            q: 'Czy używanie VPN przy lootboxach ma wpływ na szanse lub legalność?',
            a: 'VPN nie zwiększa szans ani EV, a często narusza regulamin, co grozi blokadą konta i konfiskatą środków. Geofencing, weryfikacja KYC i ścieżki płatności ujawnią rzeczywistą jurysdykcję.'
          },
          {
            q: 'Jak śledzić realny koszt i zwrot z lootboxów w czasie?',
            a: 'Prowadź rejestr otwarć z datą, kosztem, typem nagrody, warunkami (WR, limity, ważność) i rzeczywistą wypłatą. Licz regularnie ROI = (W − C) ÷ C, gdzie W to zrealizowana wartość gotówkowa, a C to łączny koszt skrzynek.'
          },
          {
            q: 'Jak limity maksymalnej wygranej i limity stawek obniżają wartość nagród?',
            a: 'Limit maksymalnej wygranej tnie ogon wysokich wyników i redukuje EV, a limity stawek mogą uniemożliwić szybkie wykonanie WR przed wygaśnięciem. Przykład: 100 spinów 0x WR po 1 zł z RTP 96% ma EV ≈ 96 zł; z limitem 50 zł efektywna wartość nie może przekroczyć 50 zł.'
          },
          {
            q: 'Czy do wypłaty nagród z lootboxów wymagana jest pełna weryfikacja KYC?',
            a: 'Tak, wypłata jakichkolwiek środków zwykle wymaga pełnego KYC. Standardowo sprawdza się wiek 18+, tożsamość dokumentem, adres i zgodność źródła środków z AML. Brak weryfikacji skutkuje wstrzymaniem wypłaty niezależnie od wyniku losowania.'
          },
        ].map(({ q, a }, i) => (
          <div key={i} className="mb-4 rounded-xl p-4" style={{ background: '#0d0010', border: '1px solid #2a0010' }}>
            <p className="text-white text-sm font-bold mb-1">{q}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
          </div>
        ))}

      </section>

    </div>
  )
}
