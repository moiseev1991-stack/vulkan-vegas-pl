'use client'

import { useState, useEffect, useRef } from 'react'

const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']

const GAMES = [
  'Crown Coins', 'Fire Stampede Ultimate', "Mummy's Jewels",
  'Big Bass Splash', 'Gates of Olympus 1000', 'Sugar Rush',
  'Book of Fallen', 'Wild Love', 'Seven Seven',
  'Blazing Crown Deluxe', 'Fortune Bags', 'Candy Craze',
  'Vulkanspiele Joker', 'Book of Ra', 'Sizzling Hot',
  'Extra Chilli Epic Spins', 'Power of Thor Megaways', 'Fat Santa',
  'Reactoonz', 'Dog House', 'Sweet Bonanza',
]

const NICKS = [
  'prow***', 'madz***', 'szym***', 'pawe***', 'kris***', 'mari***',
  'toma***', 'barb***', 'lukz***', 'ania***', 'grze***', 'mich***',
  'adam***', 'kata***', 'artu***', 'beat***', 'domi***', 'ewel***',
  'fili***', 'gosia***', 'henr***', 'irka***', 'jace***', 'karo***',
  'leon***', 'moni***', 'nata***', 'olek***', 'pier***', 'rado***',
  'seba***', 'tere***', 'ula***',  'wend***', 'xime***', 'yola***',
  'zbig***', 'agni***', 'bron***', 'ceza***', 'danu***', 'edwa***',
  'ferd***', 'gabi***', 'hali***', 'irgi***', 'jowi***', 'klem***',
]

type Currency = 'EUR' | 'PLN'

interface LivePlayer {
  uid:      number
  nick:     string
  game:     string
  amount:   number
  currency: Currency
  flash:    'up' | 'down' | null
  isNew:    boolean
}

let uidSeq = 100

function makePlayer(overrides?: Partial<LivePlayer>): LivePlayer {
  const currency: Currency = Math.random() > 0.45 ? 'PLN' : 'EUR'
  return {
    uid:      uidSeq++,
    nick:     NICKS[Math.floor(Math.random() * NICKS.length)],
    game:     GAMES[Math.floor(Math.random() * GAMES.length)],
    amount:   Math.floor(Math.random() * 28000) + 2000,
    currency,
    flash:    null,
    isNew:    false,
    ...overrides,
  }
}

function buildInitial(): LivePlayer[] {
  const list: LivePlayer[] = []
  // Первые 4 — фиксированные стартовые данные
  const starters: Pick<LivePlayer, 'nick' | 'game' | 'amount' | 'currency'>[] = [
    { nick: 'prow***', game: 'Fire Stampede Ultimate', amount: 8395,  currency: 'EUR' },
    { nick: 'madz***', game: 'Crown Coins',            amount: 30030, currency: 'PLN' },
    { nick: 'szym***', game: "Mummy's Jewels",         amount: 30162, currency: 'PLN' },
    { nick: 'pawe***', game: 'Crown Coins',            amount: 26500, currency: 'PLN' },
  ]
  starters.forEach((s) => list.push(makePlayer(s)))
  // Остальные ~26 — случайные
  while (list.length < 30) list.push(makePlayer())
  return sortByAmount(list)
}

function sortByAmount(list: LivePlayer[]): LivePlayer[] {
  return [...list].sort((a, b) => {
    const va = a.currency === 'EUR' ? a.amount * 4.3 : a.amount
    const vb = b.currency === 'EUR' ? b.amount * 4.3 : b.amount
    return vb - va
  })
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// ── Подиум ──────────────────────────────────────────────────────────────────

const topPlayers = [
  { nick: 'adit***', game: 'Seven Seven',        amount: 100000, currency: 'RON' },
  { nick: 'Orha***', game: 'Electric Coins',     amount: 15015,  currency: 'EUR' },
  { nick: 'budo***', game: 'Vulkanspiele Spark', amount: 44300,  currency: 'PLN' },
]

const podiumConfig = [
  {
    pedestalHeight: 130,
    avatarSize: 'w-20 h-20',
    avatarStyle: { background: 'linear-gradient(135deg, #FFC500 0%, #CC8800 50%, #FFC500 100%)', boxShadow: '0 0 30px rgba(255,200,0,0.5)', border: '3px solid #FFC500' },
    pedestalStyle: { background: 'linear-gradient(180deg, #CC8800 0%, #7a4f00 100%)', boxShadow: '0 -4px 24px rgba(255,180,0,0.2)' },
    crown: true, amountColor: '#FFC500',
  },
  {
    pedestalHeight: 85,
    avatarSize: 'w-16 h-16',
    avatarStyle: { background: 'linear-gradient(135deg, #aaa 0%, #ddd 50%, #aaa 100%)', boxShadow: '0 0 20px rgba(180,180,180,0.3)', border: '3px solid #bbb' },
    pedestalStyle: { background: 'linear-gradient(180deg, #777 0%, #444 100%)', boxShadow: '0 -4px 16px rgba(150,150,150,0.12)' },
    crown: false, amountColor: '#ccc',
  },
  {
    pedestalHeight: 60,
    avatarSize: 'w-14 h-14',
    avatarStyle: { background: 'linear-gradient(135deg, #cd7f32 0%, #f0a04b 50%, #cd7f32 100%)', boxShadow: '0 0 20px rgba(200,120,0,0.3)', border: '3px solid #cd7f32' },
    pedestalStyle: { background: 'linear-gradient(180deg, #9b5e1a 0%, #5a3000 100%)', boxShadow: '0 -4px 16px rgba(180,100,0,0.1)' },
    crown: false, amountColor: '#cd7f32',
  },
]
const podiumOrder = [1, 0, 2]

function formatAmount(amount: number, currency: string): string {
  const formatted = amount.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const symbols: Record<string, string> = { EUR: '€', PLN: 'zł', RON: 'RON' }
  return `${formatted} ${symbols[currency] || currency}`
}

// ── Компонент ───────────────────────────────────────────────────────────────

export default function HallOfFameClient() {
  const [selectedMonth, setSelectedMonth] = useState(3)
  const [live, setLive] = useState<LivePlayer[]>(() => buildInitial())
  const tickRef = useRef(0)

  useEffect(() => {
    // Разные интервалы для разных типов событий — выглядит органично
    const scheduleNext = () => {
      const delay = rand(1400, 3800)
      return setTimeout(() => {
        tickRef.current += 1
        const tick = tickRef.current

        setLive((prev) => {
          let next = prev.map((p) => ({ ...p, flash: null as LivePlayer['flash'], isNew: false }))

          // ── Событие 1: обновить сумму у 1-3 случайных игроков ──
          const updateCount = Math.random() < 0.25 ? rand(2, 3) : 1
          const usedIdx = new Set<number>()
          for (let u = 0; u < updateCount; u++) {
            let idx: number
            do { idx = rand(0, next.length - 1) } while (usedIdx.has(idx))
            usedIdx.add(idx)

            const p = { ...next[idx] }
            const goUp = Math.random() > 0.3
            if (goUp) {
              // Мелкий прирост — реалистично, ставки небольшие
              p.amount += rand(30, rand(200, 1200))
              p.flash = 'up'
            } else {
              p.amount = Math.max(500, p.amount - rand(20, 400))
              p.flash = 'down'
            }
            next[idx] = p
          }

          // ── Событие 2 (каждые ~8 тиков): сменить игру ──
          if (tick % 8 === 0) {
            const gi = rand(0, next.length - 1)
            next[gi] = { ...next[gi], game: GAMES[rand(0, GAMES.length - 1)] }
          }

          // ── Событие 3 (каждые ~22 тика): выпасть из топ-30, войти новый ──
          if (tick % 22 === 0) {
            // Удалить последнего (или почти последнего)
            const dropIdx = rand(Math.floor(next.length * 0.65), next.length - 1)
            next.splice(dropIdx, 1)
            // Добавить нового с небольшой суммой (он войдёт снизу)
            const entrant = makePlayer({
              amount: rand(500, 4000),
              isNew: true,
              flash: 'up',
            })
            next.push(entrant)
          }

          // ── Событие 4 (каждые ~35 тиков): резкий скачок у одного — "крупная ставка" ──
          if (tick % 35 === 0) {
            const lucky = rand(Math.floor(next.length * 0.4), next.length - 1)
            const bigWin = rand(8000, 25000)
            next[lucky] = {
              ...next[lucky],
              amount: next[lucky].amount + bigWin,
              flash: 'up',
            }
          }

          // Пересортировать
          next = sortByAmount(next).slice(0, 30)
          return next
        })

        timerRef.current = scheduleNext()
      }, delay)
    }

    const timerRef = { current: scheduleNext() }
    return () => clearTimeout(timerRef.current)
  }, [])

  // Сбросить flash через 700ms
  useEffect(() => {
    if (!live.some((p) => p.flash)) return
    const id = setTimeout(() => {
      setLive((prev) => prev.map((p) => ({ ...p, flash: null })))
    }, 700)
    return () => clearTimeout(id)
  }, [live])

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative w-full text-center overflow-hidden"
        style={{ minHeight: '220px', paddingTop: '60px', paddingBottom: '40px' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(180,0,0,0.25) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #2E001A, transparent)' }}
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-black text-white mb-2">
            Galeria <span style={{ color: '#FFC500' }}>Sław</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">Najlepsi gracze miesiąca</p>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="text-sm text-white px-5 py-2 rounded-lg cursor-pointer"
            style={{ background: '#130010', border: '1px solid #2E001A', appearance: 'none', WebkitAppearance: 'none' }}
          >
            {months.map((m, i) => (
              <option key={i} value={i}>{m} 2026</option>
            ))}
          </select>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* ── Side-by-side: Podium left + Table right on lg+ ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* ── Podium ── */}
        <div
          className="relative flex items-end justify-center gap-4 px-4 pb-0 lg:sticky lg:top-20 shrink-0"
          style={{ width: '100%', maxWidth: '360px', margin: '0 auto', minHeight: '260px' }}
        >
          {podiumOrder.map((pi) => {
            const player = topPlayers[pi]
            const cfg    = podiumConfig[pi]
            return (
              <div key={player.nick} className="flex flex-col items-center">
                {cfg.crown && (
                  <div className="text-2xl mb-1" style={{ filter: 'drop-shadow(0 0 8px rgba(255,200,0,0.6))' }}>👑</div>
                )}
                <div className={`${cfg.avatarSize} rounded-full flex items-center justify-center font-black mb-2`} style={cfg.avatarStyle}>
                  <span className="text-white font-black" style={{ fontSize: cfg.crown ? '22px' : '18px' }}>{pi + 1}</span>
                </div>
                <p className="text-white font-bold text-sm mb-0.5">{player.nick}</p>
                <p className="text-gray-500 text-xs mb-1">{player.game}</p>
                <p className="font-bold text-sm mb-3" style={{ color: cfg.amountColor }}>
                  {formatAmount(player.amount, player.currency)}
                </p>
                <div
                  className="w-32 flex items-center justify-center rounded-t-lg"
                  style={{ height: `${cfg.pedestalHeight}px`, ...cfg.pedestalStyle }}
                >
                  <span className="font-black" style={{ fontSize: '40px', color: 'rgba(255,255,255,0.12)' }}>{pi + 1}</span>
                </div>
              </div>
            )
          })}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 rounded"
            style={{ background: 'linear-gradient(to right, transparent, #2E001A, transparent)' }}
          />
        </div>

        {/* ── Live таблица ── */}
        <div className="flex-1 min-w-0">
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #160010', background: '#0f0000' }}>

          {/* Шапка */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{ borderBottom: '1px solid #160010', background: '#0d0010' }}
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                style={{ background: '#C4001C', boxShadow: '0 0 6px rgba(180,0,30,0.9)' }}
              />
              <span className="text-xs font-bold" style={{ color: '#C4001C' }}>NA ŻYWO</span>
              <span className="text-xs text-gray-700 ml-1 hidden sm:inline">
                — wyniki aktualizują się w czasie rzeczywistym
              </span>
            </div>
            <span className="text-xs text-gray-700">{live.length} graczy</span>
          </div>

          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #130010' }}>
                <th className="text-left text-xs font-medium px-4 py-2.5 w-12" style={{ color: '#3a3a3a' }}>#</th>
                <th className="text-left text-xs font-medium px-4 py-2.5" style={{ color: '#3a3a3a' }}>Gracz</th>
                <th className="text-left text-xs font-medium px-4 py-2.5 hidden md:table-cell" style={{ color: '#3a3a3a' }}>Gra</th>
                <th className="text-right text-xs font-medium px-4 py-2.5" style={{ color: '#3a3a3a' }}>Wygrana</th>
              </tr>
            </thead>
            <tbody>
              {live.map((player, i) => {
                const isTop5 = i < 5
                return (
                  <tr
                    key={player.uid}
                    className="transition-colors duration-500"
                    style={{
                      borderBottom: '1px solid #130010',
                      background: player.flash === 'up'
                        ? 'rgba(0,100,0,0.14)'
                        : player.flash === 'down'
                          ? 'rgba(100,0,0,0.14)'
                          : player.isNew
                            ? 'rgba(60,60,0,0.1)'
                            : 'transparent',
                    }}
                  >
                    {/* Ранк */}
                    <td className="px-4 py-2.5 text-xs w-12" style={{ color: isTop5 ? '#FFC500' : '#3a3a3a' }}>
                      <span className="font-bold">{i + 4}</span>
                    </td>

                    {/* Ник + индикатор */}
                    <td className="px-4 py-2.5">
                      <span className="flex items-center gap-1.5">
                        <span
                          className="text-sm font-semibold transition-colors duration-300"
                          style={{ color: player.isNew ? '#fef08a' : '#e5e5e5' }}
                        >
                          {player.nick}
                        </span>
                        {player.flash === 'up' && (
                          <span style={{ color: '#4ade80', fontSize: '9px', fontWeight: 900, lineHeight: 1 }}>▲</span>
                        )}
                        {player.flash === 'down' && (
                          <span style={{ color: '#f87171', fontSize: '9px', fontWeight: 900, lineHeight: 1 }}>▼</span>
                        )}
                        {player.isNew && (
                          <span
                            className="text-[9px] font-bold px-1 py-0.5 rounded"
                            style={{ background: 'rgba(255,215,0,0.15)', color: '#FFC500' }}
                          >
                            NEW
                          </span>
                        )}
                      </span>
                    </td>

                    {/* Игра */}
                    <td
                      className="px-4 py-2.5 text-xs transition-colors duration-500 hidden md:table-cell"
                      style={{ color: player.flash ? '#888' : '#555' }}
                    >
                      {player.game}
                    </td>

                    {/* Сумма */}
                    <td
                      className="px-4 py-2.5 text-sm font-black text-right tabular-nums transition-colors duration-300"
                      style={{
                        color: player.flash === 'up'
                          ? '#4ade80'
                          : player.flash === 'down'
                            ? '#f87171'
                            : isTop5
                              ? '#FFC500'
                              : '#a0a0a0',
                      }}
                    >
                      {formatAmount(player.amount, player.currency)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {/* Подвал */}
          <div
            className="px-4 py-2 text-center text-xs"
            style={{ borderTop: '1px solid #130010', color: '#2a2a2a' }}
          >
            Dane odświeżane na bieżąco · Pokazuje aktualnych 30 graczy
          </div>
        </div>
        </div>{/* end flex-1 */}

        </div>{/* end side-by-side flex */}

      </div>

      {/* SEO Text */}
      <div className="h-px bg-[#160010] mb-12" />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-xl font-black text-white mb-3">Vulkan Vegas: największe wygrane — przewodnik 2026</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Szukasz informacji o największych wygranych w Vulkan Vegas? Pokażemy, gdzie je sprawdzać, co naprawdę wpływa na wysokie trafienia oraz jak bezpiecznie odebrać środki w Polsce. Gry hazardowe niosą ryzyko — graj odpowiedzialnie, tylko 18+.</p>

          <h2 className="text-xl font-black text-white mb-3">Jakie są największe wygrane i gdzie je sprawdzić?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Największe wygrane w kasynach online zależą od mechaniki gry (jackpot progresywny) i zmienności slotu. Operatorzy publikują skrócone informacje (pseudonimy, tytuł, kwota), a szczegóły rundy widoczne są w historii konta i logach dostawcy.</p>
          <h3 className="text-lg font-black text-white mb-2">Ranking rekordów: jackpoty i Megaways</h3>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Mechanizm</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Jak powstaje rekord</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Skala</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Gdzie sprawdzić</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Jackpot progresywny sieciowy</td><td style="padding:6px 9px;border:1px solid #3a0010">Kumulacja puli w wielu kasynach</td><td style="padding:6px 9px;border:1px solid #3a0010">Najwyższe absolut. kwoty</td><td style="padding:6px 9px;border:1px solid #3a0010">Wskaźnik puli w grze, lobby</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Jackpot lokalny</td><td style="padding:6px 9px;border:1px solid #3a0010">Pula w obrębie jednego kasyna</td><td style="padding:6px 9px;border:1px solid #3a0010">Wysokie, niższe niż sieciowe</td><td style="padding:6px 9px;border:1px solid #3a0010">Panel jackpota w lobby i grze</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Megaways (bez jackpota)</td><td style="padding:6px 9px;border:1px solid #3a0010">Wysokie mnożniki z mechaniki</td><td style="padding:6px 9px;border:1px solid #3a0010">Rekordy relatywne (× stawki)</td><td style="padding:6px 9px;border:1px solid #3a0010">Karta informacyjna, historia rund</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Turnieje/leaderboardy</td><td style="padding:6px 9px;border:1px solid #3a0010">Wynik w czasie promocji</td><td style="padding:6px 9px;border:1px solid #3a0010">Stałe nagrody z regulaminu</td><td style="padding:6px 9px;border:1px solid #3a0010">Zakładka Turnieje/Promocje</td></tr></tbody></table>' }} />
          <h3 className="text-lg font-black text-white mb-2">Jak weryfikować wiarygodność „big win"?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Pojedynczy zrzut nie stanowi dowodu. Rzetelna weryfikacja opiera się na Round ID, spójności z historią konta i logach dostawcy. Zapisz ID rundy i czas, wyeksportuj szczegóły z historii, porównaj z tabelą wypłat. Dla jackpotów sprawdź reset puli do wartości startowej.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Pole/dowód</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Gdzie znaleźć</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Co potwierdza</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Round/Game ID</td><td style="padding:6px 9px;border:1px solid #3a0010">Overlay w grze lub historia konta</td><td style="padding:6px 9px;border:1px solid #3a0010">Identyfikacja rundy w logach dostawcy</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Data i godzina rundy</td><td style="padding:6px 9px;border:1px solid #3a0010">Historia gry; zegar systemowy gry</td><td style="padding:6px 9px;border:1px solid #3a0010">Synchronizacja z logami serwera</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Kwota wygranej</td><td style="padding:6px 9px;border:1px solid #3a0010">Ekran wyniku, historia rundy</td><td style="padding:6px 9px;border:1px solid #3a0010">Zgodność z tabelą wypłat</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Certyfikat RNG</td><td style="padding:6px 9px;border:1px solid #3a0010">eCOGRA, GLI, stopka serwisu</td><td style="padding:6px 9px;border:1px solid #3a0010">Niezależne testy generatora losowości</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Od czego zależą wysokie wygrane? RTP, wariancja i jackpoty</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Potencjał wysokich wygranych wynika z: matematyki gry (RTP i volatility), konstrukcji nagród (jackpoty progresywne lub stałe) oraz funkcji bonusowych (multipliery, free spiny, retriggery). RTP opisuje długoterminowy zwrot, wariancja — rozkład wyników w krótkim okresie.</p>
          <h3 className="text-lg font-black text-white mb-2">Jackpot progresywny vs stały</h3>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Cecha</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Jackpot progresywny</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Jackpot stały</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Źródło puli</td><td style="padding:6px 9px;border:1px solid #3a0010">Kumulacja ze stawek kwalifikujących</td><td style="padding:6px 9px;border:1px solid #3a0010">Wartość zdefiniowana w modelu gry</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Wysokość nagrody</td><td style="padding:6px 9px;border:1px solid #3a0010">Dynamiczna, potencjalnie bardzo wysoka</td><td style="padding:6px 9px;border:1px solid #3a0010">Stała lub zakres z tabeli wypłat</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Reset po wygranej</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak — do wartości startowej</td><td style="padding:6px 9px;border:1px solid #3a0010">Nie dotyczy</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Mechanizm trafienia</td><td style="padding:6px 9px;border:1px solid #3a0010">Losowy, progowy (must-drop), gra bonus.</td><td style="padding:6px 9px;border:1px solid #3a0010">Konkretna kombinacja symboli</td></tr></tbody></table>' }} />
          <h3 className="text-lg font-black text-white mb-2">Funkcje bonusowe: multipliery, free spiny, retriggery</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Największe wygrane w slotach bez jackpota najczęściej pochodzą z rund bonusowych. Multipliery mogą dotyczyć pojedynczych linii lub całej wygranej. Free spiny mają rozszerzone bębny i wyższy mnożnik. Retriggery podnoszą górne ogony rozkładu. Buy feature zwiększa wariancję pojedynczej transakcji.</p>

          <h2 className="text-xl font-black text-white mb-3">Wypłaty w Polsce: jak bezpiecznie odebrać duże wygrane?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Bezpieczna wypłata zależy od kompletnej weryfikacji KYC/AML i zgodności metody płatności z danymi konta. Standardowy KYC: dokument tożsamości, potwierdzenie adresu, selfie. EDD przy dużych kwotach: źródło środków, dodatkowe dokumenty.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Metoda</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Wpłata</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Wypłata</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Czas po akceptacji</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">BLIK</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">Zwykle nie</td><td style="padding:6px 9px;border:1px solid #3a0010">Wpłata natychmiast</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">E-portfel (Skrill/NETELLER)</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">0–24 h</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Karta Visa/Mastercard</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">2–5 dni rob.</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Przelew bankowy</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">Tak</td><td style="padding:6px 9px;border:1px solid #3a0010">1–3 dni rob.</td></tr></tbody></table>' }} />
          <h3 className="text-lg font-black text-white mb-2">Podatki od wygranych w Polsce</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">W Polsce zasady określa Ustawa o grach hazardowych. Przy grach urządzanych legalnie ciężar podatku od gier spoczywa na operatorze. W przypadku wątpliwości skontaktuj się z Krajową Informacją Skarbową (podatki.gov.pl) i sprawdź aktualne przepisy na isap.sejm.gov.pl.</p>

          <h2 className="text-xl font-black text-white mb-3">Czy pogoń za rekordami ma sens?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Oczekiwany wynik gry w długim okresie jest ujemny o wartość przewagi kasyna (100% − RTP). Efekt „prawie wygranej" wzmacnia motywację mimo braku wypłaty. Świadome wybory (wyższe RTP, limity, turnieje, cele etapowe) pomagają kontrolować koszt rozrywki.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Obrót (PLN)</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Strata RTP 94%</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Strata RTP 96%</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Strata RTP 97%</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">500</td><td style="padding:6px 9px;border:1px solid #3a0010">30</td><td style="padding:6px 9px;border:1px solid #3a0010">20</td><td style="padding:6px 9px;border:1px solid #3a0010">15</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">2 000</td><td style="padding:6px 9px;border:1px solid #3a0010">120</td><td style="padding:6px 9px;border:1px solid #3a0010">80</td><td style="padding:6px 9px;border:1px solid #3a0010">60</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">10 000</td><td style="padding:6px 9px;border:1px solid #3a0010">600</td><td style="padding:6px 9px;border:1px solid #3a0010">400</td><td style="padding:6px 9px;border:1px solid #3a0010">300</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Często Zadawane Pytania</h2>
          {[
            { q: 'Czy Vulkan Vegas jest legalne w Polsce w 2026?', a: 'Vulkan Vegas nie posiada polskiej licencji. W Polsce legalnie działa wyłącznie Totalizator Sportowy (Total Casino). Status domen: hazard.mf.gov.pl.' },
            { q: 'Jak policzyć koszt funkcji Bonus Buy?', a: 'Oczekiwany koszt = cena zakupu × (1 − RTP trybu zakupu). Przy cenie 100× stawki 2 PLN i RTP 96,5%: koszt = 200 PLN × 3,5% = 7 PLN.' },
            { q: 'Czy zmiana stawki zwiększa szansę na jackpot progresywny?', a: 'W wielu jackpotach szansa rośnie proporcjonalnie do stawki lub wymagana jest stawka kwalifikująca. Sprawdź panel Pomoc/Info gry.' },
            { q: 'Jak rozpoznać jackpot "must drop"?', a: 'Widoczny licznik czasu lub pułap kwotowy w interfejsie. Po trafieniu pula resetuje się. Potwierdź Round ID w historii konta.' },
            { q: 'Czy operator może zmienić RTP gry?', a: 'Operator wybiera wariant RTP z oferty producenta. Sprawdź w oknie Pomoc/Info aktualne RTP. W razie sporu poproś o certyfikację RNG.' },
            { q: 'Jak przeliczyć mnożnik x-stawki na PLN?', a: 'Kwota = mnożnik × stawka w walucie gry, przeliczona kursem banku. Przykład: 5 000× przy 0,20 EUR = 1 000 EUR ≈ 4 500 PLN.' },
            { q: 'Czy RTP obejmuje wartość jackpota progresywnego?', a: 'Zależy od producenta. Sprawdź w Info/Help — część gier podaje RTP bazowe i komponent jackpota oddzielnie.' },
            { q: 'Czym różni się hit frequency od RTP?', a: 'Hit frequency = % spinów z jakąkolwiek wypłatą. RTP = średni długookresowy zwrot. Gra może mieć wysoką częstotliwość i niskie średnie wypłaty.' },
            { q: 'Co zrobić, jeśli operator unieważnił wygraną?', a: 'Zażądaj wskazania punktu regulaminu i logów obrotu. Złóż odwołanie z Round ID. Eskaluj do ADR/regulatora licencji.' },
            { q: 'Jak długo przechowywane są logi rund?', a: 'Dane AML zwykle kilka lat. Szczegółowe logi rund mają krótsze retencje. Zgłoś reklamację szybko — najlepiej w ciągu 30 dni.' },
            { q: 'Czy bank może wstrzymać wypłatę z kasyna?', a: 'Tak. Przy wysokich kwotach bank może zażądać wyjaśnień AML. Przygotuj potwierdzenie wypłaty od operatora i historię gry.' },
            { q: 'Czym jest limit "max win"?', a: 'Górny limit wygranej z jednej rundy (np. 5 000×–50 000× stawki). Operatorzy mogą też mieć limity okresowe. Obowiązuje niższy z limitów.' },
            { q: 'Jak przygotować pakiet dowodowy dużej wygranej?', a: 'Zrzut z Round ID, eksport historii konta, potwierdzenie wypłaty od operatora, wyciąg bankowy. Podawaj numery zgłoszeń w korespondencji.' },
            { q: 'Czy BLIK nadaje się do wypłat?', a: 'BLIK popularny przy wpłatach, ale jako metoda wypłaty zwykle niedostępny. Alternatywa: przelew bankowy lub e-portfel (closed loop).' },
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