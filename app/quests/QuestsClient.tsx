'use client'

import { useState } from 'react'
import { quests } from '@/data/quests'

const faqs = [
  {
    q: 'Czym są codzienne questy?',
    a: 'Codzienne questy to zadania, które możesz wykonać każdego dnia. Każde ukończone zadanie daje ci punkty i nagrody. Questy resetują się o północy czasu UTC.',
  },
  {
    q: 'Jak zdobywać punkty questów?',
    a: 'Punkty zbierasz przez grę w wyznaczone automaty lub zakłady sportowe. Każda misja określa wymagany typ gry i minimalną kwotę zakładu.',
  },
  {
    q: 'Kiedy resetują się questy?',
    a: 'Questy codzienne resetują się każdego dnia o 00:00 UTC. Questy tygodniowe — w każdy poniedziałek o 00:00 UTC.',
  },
  {
    q: 'Czy mogę wykonywać questy na urządzeniu mobilnym?',
    a: 'Tak, platforma jest w pełni responsywna. Możesz wykonywać questy zarówno na komputerze, jak i na telefonie lub tablecie.',
  },
  {
    q: 'Co się dzieje z nieodebranymi nagrodami?',
    a: 'Nieodebrane nagrody wygasają po 7 dniach od momentu ukończenia questa. Pamiętaj o regularnym odbieraniu swoich nagród.',
  },
]

export default function QuestsClient() {
  const [questTab, setQuestTab] = useState<'casino' | 'sports'>('casino')
  const [faqOpen, setFaqOpen]   = useState<number | null>(null)

  const filtered = quests.filter((q) => q.category === questTab)

  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: '270px', background: 'linear-gradient(135deg, #130010 0%, #2d0005 50%, #07000C 100%)' }}
      >
        <div
          className="relative z-10 flex items-center justify-between w-full px-16 py-10"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          {/* Левый контент */}
          <div style={{ maxWidth: '480px' }}>
            <div className="flex gap-2 mb-4">
              <span className="flex items-center gap-1 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#820016' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> NA ŻYWO
              </span>
              <span
                className="flex items-center gap-1 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: '#1a1a00', border: '1px solid #a16207' }}
              >
                ⚡ TYGODNIOWY
              </span>
            </div>

            <h1 className="text-4xl font-black text-white mb-3">Strefa Questów</h1>
            <p className="text-gray-400 text-sm mb-5">
              Wykonuj zadania, aby odblokować bonusy. Im więcej questów ukończysz,
              tym większe nagrody otrzymasz!
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Łatwe misje',  icon: '⚡' },
                { label: 'Fajne bonusy', icon: '🎁' },
                { label: 'Nagrody dnia', icon: '🏆' },
              ].map((tag) => (
                <button
                  key={tag.label}
                  className="flex items-center gap-1.5 text-xs text-gray-300 px-3 py-1.5 rounded-full hover:text-white transition"
                  style={{ background: '#130010', border: '1px solid #2E001A' }}
                >
                  {tag.icon} {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Правая картинка */}
          <div
            className="absolute right-0 top-0 h-full hidden lg:block"
            style={{
              width: '420px',
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
            }}
          >
            <img
              src="/images/quests/mascot.png"
              alt=""
              className="w-full h-full object-contain object-right"
              style={{ filter: 'drop-shadow(0 0 30px rgba(255,100,0,0.3))' }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Codzienne questy ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="px-4 pt-8 pb-4">
          <h2 className="text-white font-bold text-xl mb-4">Codzienne questy</h2>

          {/* Табы */}
          <div className="flex gap-2">
            {(['casino', 'sports'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setQuestTab(tab)}
                className="flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full transition"
                style={
                  questTab === tab
                    ? { background: '#C4001C', color: '#fff' }
                    : { background: '#130010', border: '1px solid #2E001A', color: 'rgba(255,255,255,0.5)' }
                }
              >
                {tab === 'casino' ? '🎰 KASYNO' : '⚽ SPORTY'}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка квестов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pb-8">
          {filtered.map((quest) => (
            <div
              key={quest.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #160010 0%, #150000 100%)', border: '1px solid #2a0000' }}
            >
              {/* Картинка */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-12"
                  style={{ background: 'linear-gradient(to top, #160010, transparent)' }}
                />
                <span
                  className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-sm text-white"
                  style={{ background: quest.badgeColor }}
                >
                  {quest.badgeLabel}
                </span>
              </div>

              {/* Контент */}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1">{quest.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{quest.description}</p>

                {/* Прогресс */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Postęp</span>
                    <span style={{ color: '#FFC500' }}>{quest.progress}/{quest.total}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full" style={{ background: '#2a0000' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(quest.progress / quest.total) * 100}%`,
                        background: 'linear-gradient(to right, #C4001C, #FFC500)',
                      }}
                    />
                  </div>
                </div>

                {/* Награда + кнопка */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🏆</span>
                    <span className="text-xs font-bold" style={{ color: '#FFC500' }}>{quest.reward}</span>
                  </div>
                  <button
                    className="text-black text-xs font-bold px-4 py-1.5 rounded-md hover:bg-yellow-400 transition"
                    style={{ background: '#FFC500' }}
                  >
                    Rozpocznij
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Twój postęp ── */}
      <div className="px-4 mb-8" style={{ maxWidth: '1280px', margin: '0 auto 32px' }}>
        <section
          className="rounded-2xl overflow-hidden p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, #130010 0%, #0A000B 100%)',
            border: '1px solid #2a0000',
          }}
        >
          {/* Левая часть */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">TWÓJ POSTĘP</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-6xl font-black" style={{ color: '#FFC500' }}>50</span>
              <span className="text-gray-400 text-sm">do nagrody</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Ukończ wszystkie dostępne misje i zdobądź unikalną nagrodę specjalną!
            </p>

            <div className="w-80 h-3 rounded-full mb-5" style={{ background: '#2a0000' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: '33%',
                  background: 'linear-gradient(to right, #C4001C, #FFC500)',
                  boxShadow: '0 0 8px rgba(255,200,0,0.4)',
                }}
              />
            </div>

            <button
              className="text-black font-bold text-sm px-8 py-2.5 rounded-lg hover:bg-yellow-400 transition"
              style={{ background: '#FFC500' }}
            >
              Rozpocznij
            </button>
          </div>

          {/* Правая часть: иконки наград */}
          <div className="flex gap-4">
            {['🎰', '💰', '🎡', '🏆'].map((icon, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: '#130010', border: '1px solid #2E001A' }}
              >
                {icon}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FAQ ── */}
      <section className="px-4 pb-16" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="text-white font-bold text-xl mb-4">Warunki i zasady</h2>
        <div className="rounded-xl overflow-hidden" style={{ background: '#110000', border: '1px solid #2a0000' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #2a0000' : 'none' }}>
              <button
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-white/80 text-sm font-medium pr-4">{faq.q}</span>
                <span
                  className="text-white/40 text-xl flex-shrink-0 transition-transform duration-200"
                  style={{ transform: faqOpen === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              {faqOpen === i && (
                <div className="px-5 pb-4 text-white/50 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SEO Article */}
      <div className="h-px bg-[#160010] mb-12" />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-xl font-black text-white mb-3">Jak działają misje i questy w Vulkan Vegas?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Misje i questy to czasowo ograniczone wyzwania powiązane z konkretnymi grami lub kategoriami gier. Mechanika polega na aktywacji zadania, grze w kwalifikujące się tytuły i realizacji celów (np. liczby rund, obrotu) w określonym czasie, po czym nagroda trafia do portfela bonusowego lub jako darmowe spiny. W Polsce gry kasynowe online mogą oferować wyłącznie podmioty z zezwoleniem Ministra Finansów.</p>
          <h3 className="text-lg font-black text-white mb-2">Nagrody i poziomy: co można zdobyć?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Misje nagradzają: darmowe spiny (free spins) na konkretny automat z limitem stawki i terminem ważności, środki bonusowe po spełnieniu warunku obrotu, cashback (zwrot strat netto), punkty lojalnościowe/XP do programu VIP oraz bilety do turniejów.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Rodzaj nagrody</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Jak działa</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Gdzie trafia</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Ograniczenia</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Darmowe spiny</td><td style="padding:6px 9px;border:1px solid #3a0010">Określona liczba rund na wskazanym slocie</td><td style="padding:6px 9px;border:1px solid #3a0010">Bezpośrednio w grze; wygrane jako saldo bonusowe</td><td style="padding:6px 9px;border:1px solid #3a0010">Tylko w wybranej grze; termin ważności; limit stawki</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Środki bonusowe</td><td style="padding:6px 9px;border:1px solid #3a0010">Kwota bonusu po spełnieniu reguł</td><td style="padding:6px 9px;border:1px solid #3a0010">Portfel bonusowy</td><td style="padding:6px 9px;border:1px solid #3a0010">Warunek obrotu; wykluczenia gier; limit maks. stawki</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Cashback</td><td style="padding:6px 9px;border:1px solid #3a0010">Zwrot części strat za dany okres</td><td style="padding:6px 9px;border:1px solid #3a0010">Najczęściej portfel bonusowy</td><td style="padding:6px 9px;border:1px solid #3a0010">Określony sposób liczenia strat; dodatkowe T&amp;C</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Punkty lojalnościowe/XP</td><td style="padding:6px 9px;border:1px solid #3a0010">Punkty do programu VIP lub sklepu</td><td style="padding:6px 9px;border:1px solid #3a0010">Saldo punktów/VIP</td><td style="padding:6px 9px;border:1px solid #3a0010">Wymiana na bonusy wg regulaminu</td></tr></tbody></table>' }} />
          <h3 className="text-lg font-black text-white mb-2">Warunki obrotu i RTP: co sprawdzić przed startem?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Warunek obrotu (wagering) określa, ile razy należy postawić kwotę bonusu zanim wypłata stanie się dostępna. RTP to długoterminowy zwrot gracza i jest parametrem gry — misje go nie zmieniają. Limity stawek, wagi gier i wykluczenia wpływają na realną opłacalność udziału.</p>
          <h3 className="text-lg font-black text-white mb-2">Krok po kroku: jak aktywować misję?</h3>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Zaloguj się i przejdź do sekcji „Promocje" lub „Misje"</li>
            <li>Wybierz misję, otwórz kartę i zapoznaj się z celami, T&amp;C i grami kwalifikującymi</li>
            <li>Aktywuj przyciskiem „Dołącz" lub „Aktywuj" i potwierdź w panelu</li>
            <li>Uruchom kwalifikującą grę z karty misji i monitoruj pasek postępu</li>
            <li>Po spełnieniu warunków odbierz nagrodę w sekcji „Bonusy"</li>
          </ul>

          <h2 className="text-xl font-black text-white mb-3">Kody promocyjne vs Misje: co naprawdę działa?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Kody bywają limitowane i geolokalizowane; misje są widoczne w panelu konta z jasnym opisem zasad. Bezpieczną praktyką jest traktowanie kodów z forów jako niezweryfikowanych — uznawaj je za ważne dopiero po zobaczeniu w swoim panelu konta z pełnym regulaminem.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Źródło</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Typowy status 2026</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Jak zweryfikować</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Główne ryzyko</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Panel promocji/misji</td><td style="padding:6px 9px;border:1px solid #3a0010">Aktualne, dostosowane do kraju i profilu</td><td style="padding:6px 9px;border:1px solid #3a0010">Sprawdź opis, terminy, warunki obrotu</td><td style="padding:6px 9px;border:1px solid #3a0010">Błędna interpretacja T&amp;C</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Newsletter/SMS</td><td style="padding:6px 9px;border:1px solid #3a0010">Często limitowane czasowo</td><td style="padding:6px 9px;border:1px solid #3a0010">Porównaj z regulaminem w panelu</td><td style="padding:6px 9px;border:1px solid #3a0010">Przegapienie terminu ważności</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Agregatory/fora</td><td style="padding:6px 9px;border:1px solid #3a0010">Mieszanka aktualnych i nieaktualnych</td><td style="padding:6px 9px;border:1px solid #3a0010">Weryfikuj w panelu konta</td><td style="padding:6px 9px;border:1px solid #3a0010">Phishing, malware, dane logowania</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Jak maksymalizować korzyści bez przepalania budżetu?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Strategia udziału w misjach powinna opierać się na kalkulacji: ile realnie kosztuje obrót bonusu, jaka jest wartość oczekiwana darmowych spinów (EV ≈ liczba spinów × stawka × RTP) i czy warunki są zgodne z budżetem. Im niższy wagering i wyższe RTP, tym mniejszy oczekiwany koszt uwolnienia środków.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Wagering (x)</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Bonus (zł)</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Wymagany obrót (zł)</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">RTP</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Szacowany koszt obrotu (zł)</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">x10</td><td style="padding:6px 9px;border:1px solid #3a0010">100</td><td style="padding:6px 9px;border:1px solid #3a0010">1 000</td><td style="padding:6px 9px;border:1px solid #3a0010">96%</td><td style="padding:6px 9px;border:1px solid #3a0010">40</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">x20</td><td style="padding:6px 9px;border:1px solid #3a0010">100</td><td style="padding:6px 9px;border:1px solid #3a0010">2 000</td><td style="padding:6px 9px;border:1px solid #3a0010">96%</td><td style="padding:6px 9px;border:1px solid #3a0010">80</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">x35</td><td style="padding:6px 9px;border:1px solid #3a0010">100</td><td style="padding:6px 9px;border:1px solid #3a0010">3 500</td><td style="padding:6px 9px;border:1px solid #3a0010">96%</td><td style="padding:6px 9px;border:1px solid #3a0010">140</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">x50</td><td style="padding:6px 9px;border:1px solid #3a0010">100</td><td style="padding:6px 9px;border:1px solid #3a0010">5 000</td><td style="padding:6px 9px;border:1px solid #3a0010">96%</td><td style="padding:6px 9px;border:1px solid #3a0010">200</td></tr></tbody></table>' }} />
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Sygnały ostrzegawcze: wysoki wagering x35+, krótkie okno czasowe (24h) przy dużym obrocie, wykluczenie wielu gier i niejasne T&amp;C. Jeśli nie możesz poświęcić czasu na pełny obrót — odpuść lub wybierz mniejszą misję.</p>

          <h2 className="text-xl font-black text-white mb-3">Czy misje Vulkan Vegas wypadają lepiej niż alternatywy?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">W Polsce w 2026 r. jedynym legalnym kasynem online jest Total Casino (Totalizator Sportowy). Oferty innych operatorów nie są objęte polską licencją co oznacza wyższe ryzyko prawne i brak ochrony konsumenckiej.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Kryterium</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Total Casino (PL)</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Kasyna bez polskiej licencji</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Status prawny w PL</td><td style="padding:6px 9px;border:1px solid #3a0010">Legalne, zezwolenie MF</td><td style="padding:6px 9px;border:1px solid #3a0010">Brak polskiej licencji; nielegalne w PL</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Transparentność T&amp;C</td><td style="padding:6px 9px;border:1px solid #3a0010">Regulaminy po polsku, zgodne z prawem</td><td style="padding:6px 9px;border:1px solid #3a0010">Zależne od jurysdykcji operatora</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Narzędzia odpow. gry</td><td style="padding:6px 9px;border:1px solid #3a0010">Wymagane: limity, samowykluczenie</td><td style="padding:6px 9px;border:1px solid #3a0010">Zależne od operatora; brak standardu PL</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Ryzyko prawne gracza</td><td style="padding:6px 9px;border:1px solid #3a0010">Niskie (gra w ramach prawa)</td><td style="padding:6px 9px;border:1px solid #3a0010">Wysokie (poza systemem licencyjnym PL)</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Często Zadawane Pytania</h2>
          {[
            { q: 'Czy Vulkan Vegas jest legalny w Polsce w 2026?', a: 'W Polsce jedynym legalnym kasynem online jest Total Casino (Totalizator Sportowy). Oferty innych marek, w tym Vulkan Vegas, nie są objęte polską licencją. Potwierdzisz to na gov.pl/finanse/hazard.' },
            { q: 'Jak zweryfikować, że misja jest oficjalna i aktywna?', a: 'Misja jest oficjalna, gdy widać ją po zalogowaniu w panelu konta z regulaminem, licznikiem postępu i informacją o kwalifikujących grach. Brak tych elementów oznacza brak ważności.' },
            { q: 'Jak policzyć realny koszt obrotu bonusu z misji?', a: 'Koszt ≈ wymagany obrót × (1 − RTP). Przykład: bonus 100 zł z wagering x20 na slocie RTP 96% = obrót 2 000 zł, koszt 2 000 × 4% = 80 zł.' },
            { q: 'Jak ocenić wartość darmowych spinów z misji?', a: 'EV = liczba spinów × stawka × RTP. Przykład: 50 spinów po 0,80 zł na RTP 96% = 38,40 zł przed ewentualnym obrotem wygranych.' },
            { q: 'Czy misje zmieniają RTP gier?', a: 'Nie. RTP jest ustalane przez producenta gry i nie zmienia się z powodu misji. Na opłacalność wpływają jedynie warunki promocji: wagering, limity stawek i wykluczenia.' },
            { q: 'Czy kody z forów działają dla graczy z Polski?', a: 'Większość kodów wygasa szybko lub jest targetowana na inne jurysdykcje. Kod uznaj za ważny tylko gdy widzisz go w panelu konta z regulaminem i potwierdzeniem aktywacji.' },
            { q: 'Co oznacza limit maksymalnej stawki w misji?', a: 'Limit określa najwyższy dozwolony zakład podczas obrotu. Przekroczenie często skutkuje utratą bonusu i wygranych z niego. Ustaw stawkę o 10–20% poniżej limitu regulaminowego.' },
            { q: 'Dlaczego postęp misji się nie nalicza?', a: 'Najczęstsze przyczyny: gra przed aktywacją misji, niekwalifikowana gra, przekroczony limit stawki lub wygaśnięcie czasu. Do reklamacji przygotuj Round ID i historię zakładów.' },
            { q: 'Jak oszacować budżet na ukończenie misji?', a: 'Liczba rund = wymagany obrót ÷ stawka. Przykład: bonus 100 zł, wagering x20, stawka 2 zł → 2 000 ÷ 2 = 1 000 spinów; oczekiwany koszt 2 000 × 4% = 80 zł.' },
            { q: 'Czy gry stołowe liczą się do obrotu tak samo jak sloty?', a: 'Zależnie od regulaminu wkład gier stołowych bywa niższy lub wyłączony. Przy 10% wkładzie ruletki: 100 zł na ruletce zalicza tylko 10 zł do wymogu.' },
            { q: 'Czy udział w misjach bez polskiej licencji niesie ryzyko?', a: 'Tak — brak ochrony polskiego regulatora, możliwe spory bez skutecznej ścieżki w PL. Sprawdź wykazy na gov.pl/finanse/hazard i korzystaj z narzędzi odpowiedzialnej gry.' },
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
