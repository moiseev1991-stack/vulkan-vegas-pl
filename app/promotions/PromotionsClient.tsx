'use client'

import { useState } from 'react'
import { LayoutGrid, Dices, Network, Trophy } from 'lucide-react'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

const tabs = [
  { label: 'Wszystko',          icon: <LayoutGrid size={14} /> },
  { label: 'Kasyno',            icon: <Dices size={14} /> },
  { label: 'Promocje sieciowe', icon: <Network size={14} /> },
  { label: 'Sporty',            icon: <Trophy size={14} /> },
]

const casinoPromos = [
  {
    title: 'Misje',
    reward: 'Wykonaj zadania, odbierz nagrodę',
    image: '/images/promotions/mission.png',
    fallbackIcon: '⚡',
    fallbackGradient: 'linear-gradient(135deg, #1a1a00, #0d0d00)',
  },
  {
    title: 'Lootboxy',
    reward: 'Otwórz i zobacz, co jest w środku',
    image: '/images/lootboxes/chest-gold.png',
    fallbackIcon: '📦',
    fallbackGradient: 'linear-gradient(135deg, #260015, #0A000B)',
  },
  {
    title: 'Bonus Highroller',
    reward: '200% + 100 FS Crown Coins',
    image: '/images/promotions/highroller.png',
    fallbackIcon: '👑',
    fallbackGradient: 'linear-gradient(135deg, #1a0a00, #0A000B)',
  },
  {
    title: 'Bonus urodzinowy',
    reward: 'Bonus X',
    image: '/images/promotions/birthday.png',
    fallbackIcon: '🎂',
    fallbackGradient: 'linear-gradient(135deg, #0a001a, #050010)',
  },
]

const networkPromos = [
  {
    title: 'Grand Easter Heist',
    reward: '500,000 EUR od Endorphina',
    image: '/images/promotions/grand-easter.png',
    fallbackIcon: '🐣',
    fallbackGradient: 'linear-gradient(135deg, #260015, #1a0008)',
  },
  {
    title: 'Platipus Tournament',
    reward: 'Fundusz nagród €125,000',
    image: '/images/promotions/platipus.png',
    fallbackIcon: '🦆',
    fallbackGradient: 'linear-gradient(135deg, #001a2d, #000d1a)',
  },
  {
    title: 'Gamzix Spin Express',
    reward: 'Pula nagród: 1 000 000 EUR',
    image: '/images/promotions/gamzix.png',
    fallbackIcon: '🎯',
    fallbackGradient: 'linear-gradient(135deg, #1a002d, #0d0015)',
  },
  {
    title: 'Slotopia: Bloom to Win',
    reward: 'Pula nagród: 105 000 EUR',
    image: '/images/promotions/slotopia.png',
    fallbackIcon: '🌸',
    fallbackGradient: 'linear-gradient(135deg, #002d00, #000d00)',
  },
  {
    title: 'Spring Season of Legends',
    reward: 'Pula nagród: €512,000',
    image: '/images/promotions/spring.png',
    fallbackIcon: '🌿',
    fallbackGradient: 'linear-gradient(135deg, #002d1a, #000d0a)',
  },
  {
    title: 'Spinoleague od Spinomenal',
    reward: 'Łączna pula nagród: 12,000,000...',
    image: '/images/promotions/spinoleague.png',
    fallbackIcon: '🏆',
    fallbackGradient: 'linear-gradient(135deg, #2d1a00, #0d0800)',
  },
]

export default function PromotionsClient() {
  const [active, setActive] = useState('Wszystko')

  const showWelcomeCasino = active === 'Wszystko' || active === 'Kasyno'
  const showWelcomeSports = active === 'Wszystko' || active === 'Sporty'
  const showCasino        = active === 'Wszystko' || active === 'Kasyno'
  const showNetwork       = active === 'Wszystko' || active === 'Promocje sieciowe'

  return (
    <div className="container mx-auto px-4">

      {/* ── Page header ── */}
      <div className="pt-8 pb-2 mb-2">
        <h2 className="text-2xl font-black text-white">Promocje</h2>
        <p className="text-sm text-gray-600">Aktualne bonusy i oferty kasyna Vulkan Vegas</p>
      </div>

      {/* ── Featured Welcome Banner — always visible above tabs ── */}
      <div
        className="relative rounded-2xl overflow-hidden mb-6 mt-4"
        style={{
          background: 'linear-gradient(150deg, #3d0000 0%, #1a0008 50%, #0c001f 100%)',
          border: '1px solid #2E001A',
          minHeight: '160px',
        }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(120,0,255,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
          {/* Left: text */}
          <div className="flex-1">
            <span
              className="inline-block text-[10px] font-black text-white px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
              style={{ background: '#C4001C' }}
            >
              🎁 OFERTA POWITALNA
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
              Do <span style={{ color: '#FFC500' }}>2 500 €</span> + 350 Free Spinów
            </h2>
            <p className="text-white/50 text-sm mb-4">Na 4 pierwsze depozyty · Bez limitu czasowego</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/go/"
                className="text-black font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-yellow-400 transition"
                style={{ background: '#FFC500' }}
              >
                Odbierz bonus
              </a>
              <a
                href="/kod-promocyjny/"
                className="text-white/70 text-sm px-6 py-2.5 rounded-lg hover:text-white transition"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Mam kod promocyjny
              </a>
            </div>
          </div>

          {/* Right: bonus breakdown pills */}
          <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
            {[
              { dep: '1.', bonus: '100% do €500 + 100 FS' },
              { dep: '2.', bonus: '75% do €750 + 100 FS' },
              { dep: '3.', bonus: '50% do €750 + 75 FS' },
              { dep: '4.', bonus: '25% do €500 + 75 FS' },
            ].map((item) => (
              <div
                key={item.dep}
                className="flex items-center gap-3 px-4 py-2 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="text-xs font-black" style={{ color: '#FFC500', minWidth: '16px' }}>{item.dep}</span>
                <span className="text-xs text-white/80 font-medium">{item.bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Табы ── */}
      <div className="flex gap-2 py-4 border-b border-[#2a0000] overflow-x-auto">
        {tabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-md transition whitespace-nowrap
              ${active === label
                ? 'text-white'
                : 'bg-[#130010] border border-[#2E001A] text-gray-400 hover:text-white'
              }`}
            style={active === label ? { borderBottom: '2px solid #C4001C' } : {}}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      {/* ── Приветственные бонусы ── */}
      {(showWelcomeCasino || showWelcomeSports) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">

          {/* Bonus powitalny w kasynie */}
          {showWelcomeCasino && (
            <div
              className="relative rounded-2xl overflow-hidden p-7 flex items-center"
              style={{
                background: 'linear-gradient(150deg, #3d0000 0%, #1a0008 60%, #0A000B 100%)',
                minHeight: '200px',
                border: '1px solid #2E001A',
              }}
            >
              {/* Декоративная иконка-фон */}
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
                style={{ fontSize: '160px', opacity: 0.07 }}
              >
                🎰
              </span>

              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white mb-1">
                  Bonus powitalny<br />w kasynie
                </h2>
                <p className="text-gold font-bold text-lg mb-4">Do 2 500 € + 350 FS</p>
                <a href="/go/" className="bg-brand text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#820016] transition">
                  Czytaj więcej
                </a>
                <p className="text-white/50 text-xs mt-3">
                  Masz <a href="/kod-promocyjny/" className="text-gold underline hover:text-yellow-300 transition">kod promocyjny</a>? Wprowadź go tutaj.
                </p>
              </div>

              {/* Картинка (если есть) */}
              <div
                className="absolute right-0 top-0 h-full w-1/2"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                }}
              >
                <ImageWithFallback
                  src="/images/promotions/welcome-casino.png"
                  alt="Bonus powitalny"
                  className="w-full h-full object-cover object-center"
                  fallbackIcon=""
                  fallbackGradient="transparent"
                />
              </div>
            </div>
          )}

          {/* Powitalny bonus na zakłady */}
          {showWelcomeSports && (
            <div
              className="relative rounded-2xl overflow-hidden p-7 flex items-center"
              style={{
                background: 'linear-gradient(150deg, #1a1a00 0%, #0d0d00 60%, #0a0a0a 100%)',
                minHeight: '200px',
                border: '1px solid #333',
              }}
            >
              {/* Декоративная иконка-фон */}
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
                style={{ fontSize: '160px', opacity: 0.07 }}
              >
                ⚽
              </span>

              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white mb-1">
                  Powitalny bonus<br />na zakłady
                </h2>
                <p className="text-white text-sm mb-1">Postaw swój pierwszy zakład i otrzymaj</p>
                <p className="text-gold font-bold text-lg mb-4">DO 1 000 € na swój depozyt</p>
                <a href="/go/" className="bg-brand text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#820016] transition">
                  Czytaj więcej
                </a>
              </div>

              {/* Картинка (если есть) */}
              <div
                className="absolute right-0 top-0 h-full w-1/2"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
                }}
              >
                <ImageWithFallback
                  src="/images/promotions/welcome-sports.png"
                  alt="Bonus sportowy"
                  className="w-full h-full object-cover object-center"
                  fallbackIcon=""
                  fallbackGradient="transparent"
                />
              </div>
            </div>
          )}

        </div>
      )}

      {/* ── Kasyno ── */}
      {showCasino && (
        <section className="py-4">
          <h2 className="text-base font-bold text-white mb-4">
            Kasyno
            <span className="ml-4 text-xs font-normal text-white/40">
              Chcesz grać bez wpłaty?{' '}
              <a href="/bonus-bez-depozytu/" className="text-gold underline hover:text-yellow-300 transition">
                Bonus bez depozytu
              </a>
            </span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {casinoPromos.map((promo) => (
              <div
                key={promo.title}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ background: '#130010', border: '1px solid #2a0000' }}
              >
                <div className="relative h-36 overflow-hidden">
                  <ImageWithFallback
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    fallbackIcon={promo.fallbackIcon}
                    fallbackGradient={promo.fallbackGradient}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-12"
                    style={{ background: 'linear-gradient(to top, #130010, transparent)' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-2">{promo.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs shrink-0">🎁</span>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">Twój bonus</p>
                      <p className="text-xs font-bold text-white">{promo.reward}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Promocje Sieciowe ── */}
      {showNetwork && (
        <section className="py-4 pb-8">
          <h2 className="text-base font-bold text-white mb-4">Promocje Sieciowe</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {networkPromos.map((promo) => (
              <div
                key={promo.title}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ background: '#130010', border: '1px solid #2a0000' }}
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    fallbackIcon={promo.fallbackIcon}
                    fallbackGradient={promo.fallbackGradient}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: 'linear-gradient(to top, #130010, transparent)' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-2">{promo.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-xs shrink-0">🎁</span>
                    <div>
                      <p className="text-[10px] text-gray-500">Twój bonus</p>
                      <p className="text-xs font-bold text-white">{promo.reward}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEO Article */}
      <div className="h-px bg-[#160010] mb-12" />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-xl font-black text-white mb-3">Jak odebrać promocje Vulkan Vegas 2026 krok po kroku?</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Promocje kasynowe działają tylko gdy są poprawnie aktywowane i spełnione ich warunki. Poniżej praktyczne instrukcje dotyczące kodów, weryfikacji (KYC) oraz czytania regulaminów (obrót, maksymalna wypłata, ograniczenia gier).</p>
          <h3 className="text-lg font-black text-white mb-2">Gdzie wpisać kod promocyjny przy rejestracji?</h3>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3">
            <li>Wejdź do formularza rejestracji — pole „Kod promocyjny" lub przełącznik „Mam kod"</li>
            <li>Wpisz kod dokładnie (uwzględniając wielkość liter, bez spacji) i potwierdź akceptację regulaminu</li>
            <li>Jeśli pole nie było w rejestracji, aktywuj po zalogowaniu: „Profil" → „Bonusy" → „Kody"</li>
            <li>Sprawdź, czy bonus wymaga dodatkowej aktywacji (klik „Aktywuj", minimalny depozyt lub otwarcie gry)</li>
          </ul>
          <h3 className="text-lg font-black text-white mb-2">Weryfikacja konta (KYC): co przygotować?</h3>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Dokument</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Co widoczne</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Czego nie ujawniać</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Dowód osobisty/paszport</td><td style="padding:6px 9px;border:1px solid #3a0010">Imię, nazwisko, data urodzenia, numer, data ważności</td><td style="padding:6px 9px;border:1px solid #3a0010">Nie zasłaniaj danych wymaganych do weryfikacji</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Potwierdzenie adresu</td><td style="padding:6px 9px;border:1px solid #3a0010">Rachunek/wyciąg z imieniem, nazwiskiem, adresem (≤3 mies.)</td><td style="padding:6px 9px;border:1px solid #3a0010">Kwoty transakcji</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Metoda płatności</td><td style="padding:6px 9px;border:1px solid #3a0010">Imię, 4 ostatnie cyfry, data ważności karty</td><td style="padding:6px 9px;border:1px solid #3a0010">Środkowe cyfry i CVV</td></tr></tbody></table>' }} />
          <h3 className="text-lg font-black text-white mb-2">Warunki bonusów: obrót, maksymalna wypłata, gry</h3>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Parametr</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Co oznacza</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Gdzie sprawdzić</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Obrót (wagering)</td><td style="padding:6px 9px;border:1px solid #3a0010">Liczba przeliczeń stawki przed wypłatą</td><td style="padding:6px 9px;border:1px solid #3a0010">Regulamin w panelu „Promocje"</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Maks. stawka z bonusem</td><td style="padding:6px 9px;border:1px solid #3a0010">Limit zakładu/spina przy obrocie; przekroczenie unieważnia bonus</td><td style="padding:6px 9px;border:1px solid #3a0010">„Zasady gry z bonusem" w regulaminie</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Ważenie gier</td><td style="padding:6px 9px;border:1px solid #3a0010">Procent zaliczania stawek do obrotu (sloty 100%, stoły 0–20%)</td><td style="padding:6px 9px;border:1px solid #3a0010">Załącznik do regulaminu promocji</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Maks. wypłata (no-deposit)</td><td style="padding:6px 9px;border:1px solid #3a0010">Limit kwoty do wypłaty po spełnieniu WR</td><td style="padding:6px 9px;border:1px solid #3a0010">Paragraf „no deposit/FS" w regulaminie</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Ważność bonusu i FS</td><td style="padding:6px 9px;border:1px solid #3a0010">Czas na aktywację/obrót; po terminie wygasają</td><td style="padding:6px 9px;border:1px solid #3a0010">Sekcja „Ważność" w opisie oferty</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Kody bez depozytu i darmowe spiny — co działa teraz?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Bezpieczna praktyka: akceptuj kody tylko widoczne po zalogowaniu w panelu konta. Kody z forów bywają przeterminowane, dla innych regionów lub naruszają warunki. Weryfikuj w swoim panelu — brak widoczności = brak gwarancji.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Źródło kodu</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Korzyści</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Problemy</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Co zweryfikować</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Newsletter operatora</td><td style="padding:6px 9px;border:1px solid #3a0010">Jasne warunki, mniejsze ryzyko</td><td style="padding:6px 9px;border:1px solid #3a0010">Ograniczenia czasowe/indywidualne</td><td style="padding:6px 9px;border:1px solid #3a0010">Termin, wymagania aktywacji</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Panel konta</td><td style="padding:6px 9px;border:1px solid #3a0010">Automatyczna aktywacja wg profilu</td><td style="padding:6px 9px;border:1px solid #3a0010">Konflikt z inną promocją</td><td style="padding:6px 9px;border:1px solid #3a0010">Kolejność środków, limit stawki</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Fora/komentarze</td><td style="padding:6px 9px;border:1px solid #3a0010">Rzadkie okazje</td><td style="padding:6px 9px;border:1px solid #3a0010">Ryzyko nieaktualności, phishing</td><td style="padding:6px 9px;border:1px solid #3a0010">Warunki na stronie, brak podawania danych</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Czy promocje naprawdę się opłacają?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Im wyższy wagering i więcej ograniczeń, tym trudniej zakończyć promocję z wypłatą. Kiedy lepiej odmówić bonusu: planujesz szybki cash-out, grasz w stoły/live (niski wkład do WR), preferujesz wysokie stawki lub masz ograniczony czas na obrót.</p>
          <div className="overflow-x-auto mb-4 text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: '<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="background:#130012"><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Ograniczenie</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Co oznacza</th><th style="padding:7px 9px;text-align:left;color:#FFC500;border:1px solid #3a0010">Jak postępować</th></tr></thead><tbody><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Wymóg obrotu</td><td style="padding:6px 9px;border:1px solid #3a0010">Wielokrotność bonusu do postawienia</td><td style="padding:6px 9px;border:1px solid #3a0010">Sprawdź czy dotyczy bonusu, depozytu czy obu</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Limit stawki</td><td style="padding:6px 9px;border:1px solid #3a0010">Maks. zakład; przekroczenie unieważnia bonus</td><td style="padding:6px 9px;border:1px solid #3a0010">Ustaw stawkę poniżej progu w ustawieniach gry</td></tr><tr style="background:#0E0010"><td style="padding:6px 9px;border:1px solid #3a0010">Limit wypłaty</td><td style="padding:6px 9px;border:1px solid #3a0010">Sufit no-deposit/FS</td><td style="padding:6px 9px;border:1px solid #3a0010">Oceń z góry, czy warto tracić czas na obrót</td></tr><tr style="background:#130012"><td style="padding:6px 9px;border:1px solid #3a0010">Okno czasowe</td><td style="padding:6px 9px;border:1px solid #3a0010">Deadline na aktywację/obrót</td><td style="padding:6px 9px;border:1px solid #3a0010">Planuj sesje i monitoruj licznik w panelu</td></tr></tbody></table>' }} />

          <h2 className="text-xl font-black text-white mb-3">Jak zmieniały się promocje kasyn online?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">Masowe kody z forów zostały zastąpione spersonalizowanymi ofertami w panelu konta. RODO (2018), PSD2/SCA i wymagania KYC/AML ograniczyły „otwarte" akcje bez weryfikacji. Dominują misje, cashback i krótkie okna aktywacji targetowane do historii gracza. Dlaczego no-deposity zniknęły: multi-konto, koszty compliance, device fingerprinting.</p>

          <h2 className="text-xl font-black text-white mb-3">Często Zadawane Pytania</h2>
          {[
            { q: 'Czy Vulkan Vegas jest legalny w Polsce w 2026?', a: 'W Polsce kasyno online może działać legalnie tylko z polską licencją. Domenę sprawdzisz w Rejestrze domen zakazanych MF: hazard.mf.gov.pl. Jedynym legalnym kasynem online jest Total Casino.' },
            { q: 'Jak sprawdzić, czy kod jest zablokowany przez MF?', a: 'Wejdź na hazard.mf.gov.pl i wyszukaj domenę. Wynik pokaże, czy jest objęta blokadą.' },
            { q: 'Czy VPN legalizuje kody Vulkan Vegas w Polsce?', a: 'Nie. VPN nie zmienia jurysdykcji i zwykle łamie regulamin operatora (geolokalizacja). Grozi blokadą konta i konfiskatą środków po KYC.' },
            { q: 'Jak szybko ocenić opłacalność bonusu z obrotem?', a: 'Koszt ≈ wymagany obrót × (1−RTP). Bonus 100 PLN, WR 30×, RTP 96%: obrót 3 000 PLN, koszt 120 PLN > wartość bonusu = ujemna EV.' },
            { q: 'Jakie są typowe warunki bonusów w 2026?', a: 'WR 20×–40× dla bonusów depozytowych, limit stawki 2–5% wartości bonusu, ważność 7–30 dni. Stoły i live: 0–20% wkładu do obrotu.' },
            { q: 'Czy darmowe spiny bez depozytu mają limity wypłat?', a: 'Tak. Limit to zwykle 50–200 EUR lub równowartość. Sprawdź: max wypłatę, WR wygranych z FS i listę kwalifikowanych gier.' },
            { q: 'Jak sprawdzić RTP slotu u operatora?', a: 'Otwórz grę → ikona „i"/pomoc → sekcja informacyjna. Operator podaje aktywne RTP i wersję. Ten sam slot może mieć różne profile RTP.' },
            { q: 'Jakie są konsekwencje blokady domeny z pieniędzmi na koncie?', a: 'Blokada MF ogranicza dostęp i płatności przez polskich dostawców, co może uniemożliwić wypłatę. Dochodzenie roszczeń wobec podmiotów bez polskiej licencji jest utrudnione.' },
            { q: 'Czy cashback jest korzystniejszy niż bonus z obrotem?', a: 'Często tak. Cashback 10% bez WR od 100 PLN straty = +10 PLN od razu. Bonus 100% z WR 30× na RTP 96%: koszt obrotu 120 PLN > bonus = ujemna EV.' },
            { q: 'Co grozi za wielokrotne konta dla bonusów?', a: 'Zamknięcie kont, konfiskata bonusów i wygranych, zgłoszenie do AML. Wykrywanie: device fingerprinting, analiza wzorców płatności, zgodność KYC.' },
            { q: 'Jak wyglądają podatki od wygranych online w Polsce?', a: 'W Total Casino ciężar podatku od gier spoczywa na operatorze. Przy nielegalnych podmiotach brak przejrzystych rozliczeń i ochrony konsumenckiej.' },
            { q: 'Jak szybko rozpoznać czerwone flagi w regulaminie?', a: 'Wagering powyżej 50×, max stawka poniżej 1 EUR, max wypłata no-deposit poniżej 25 EUR, waga stołów 0%, okno ważności poniżej 24 godzin.' },
            { q: 'Kurs wymiany a bonus 25 € w koncie PLN?', a: 'Przy koncie PLN bonus w EUR przeliczany jest kursem wewnętrznym operatora. Różnice kilku procent możliwe. Sprawdź walutę i zasady przeliczeń w regulaminie.' },
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
