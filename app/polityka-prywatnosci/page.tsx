import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Prywatności — Ochrona Danych Osobowych vulkan-vegas-pl.com.pl',
  description: 'Polityka prywatności portalu vulkan-vegas-pl.com.pl: zasady przetwarzania danych zgodnie z RODO, rodzaje zbieranych informacji, prawa użytkowników i dane kontaktowe administratora.',
  openGraph: {
    title: 'Polityka Prywatności — Ochrona Danych Osobowych vulkan-vegas-pl.com.pl',
    description: 'Jak przetwarzamy Twoje dane zgodnie z RODO — zakres, cele, prawa użytkownika i kontakt do administratora.',
    url: 'https://vulkan-vegas-pl.com.pl/polityka-prywatnosci/',
  },
}

export default function PolitykaPrywatnosci() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Polityka Prywatności</h1>
      <p className="text-white/40 text-sm mb-10">Obowiązuje od: 1 kwietnia 2026</p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Administrator danych osobowych</h2>
          <p>
            Administratorem danych osobowych osób korzystających z serwisu dostępnego pod adresem
            vulkan-vegas-pl.com.pl (dalej: &bdquo;Portal&rdquo;) jest jego operator. Portal prowadzi wyłącznie
            działalność informacyjno-afiliacyjną — nie jest kasynem i nie pobiera środków pieniężnych
            od użytkowników.
          </p>
          <p className="mt-2">
            Wszelkie pytania dotyczące ochrony danych osobowych można kierować na adres:
            <a href="mailto:kontakt@vulkan-vegas-pl.com.pl" className="text-gold hover:underline ml-1">kontakt@vulkan-vegas-pl.com.pl</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Podstawa prawna przetwarzania danych</h2>
          <p>
            Dane osobowe przetwarzane są w oparciu o Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679
            z dnia 27 kwietnia 2016 r. (RODO) oraz polską ustawę o ochronie danych osobowych z dnia 10 maja 2018 r.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Art. 6 ust. 1 lit. a RODO — zgoda użytkownika (m.in. analityczne i marketingowe pliki cookies);</li>
            <li>Art. 6 ust. 1 lit. b RODO — realizacja umowy lub działania przedumowne;</li>
            <li>Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Kategorie przetwarzanych danych</h2>
          <p>W ramach działalności Portalu mogą być przetwarzane następujące dane:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Adres IP i dane techniczne przeglądarki zbierane automatycznie przy każdej wizycie;</li>
            <li>Pliki cookies — szczegółowe informacje zawiera <Link href="/polityka-cookie/" className="text-gold hover:underline">Polityka Cookie</Link>;</li>
            <li>Dane podawane dobrowolnie za pośrednictwem formularzy kontaktowych (imię, adres e-mail);</li>
            <li>Dane analityczne o zachowaniu użytkownika (odwiedzane strony, czas spędzony na Portalu).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Cele przetwarzania</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Zapewnienie prawidłowego działania Portalu i jego funkcji technicznych;</li>
            <li>Analiza ruchu i zachowań użytkowników w celu ulepszania jakości usług;</li>
            <li>Udzielanie odpowiedzi na zapytania przesłane przez formularz kontaktowy;</li>
            <li>Wyświetlanie spersonalizowanych treści i reklam — wyłącznie na podstawie zgody;</li>
            <li>Wypełnienie obowiązków wynikających z przepisów prawa.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Okres retencji danych</h2>
          <p>
            Dane osobowe przechowywane są przez czas niezbędny do realizacji celów, w jakich zostały zebrane,
            lub do momentu cofnięcia przez użytkownika udzielonej zgody. Dane o charakterze analitycznym
            podlegają anonimizacji po upływie 26 miesięcy.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Przekazywanie danych podmiotom trzecim</h2>
          <p>
            Dane użytkowników mogą być udostępniane podmiotom zewnętrznym wyłącznie w zakresie niezbędnym
            do świadczenia usług, w tym:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Dostawcom narzędzi analitycznych (m.in. Google Analytics);</li>
            <li>Dostawcom usług hostingu i infrastruktury serwerowej;</li>
            <li>Partnerom afiliacyjnym — jedynie dane konieczne do rozliczenia prowizji.</li>
          </ul>
          <p className="mt-2">
            Portal nie sprzedaje danych osobowych użytkowników jakimkolwiek podmiotom trzecim.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Prawa przysługujące użytkownikom</h2>
          <p>Każda osoba, której dane dotyczą, ma prawo do:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong className="text-white">Dostępu</strong> do przetwarzanych danych osobowych;</li>
            <li><strong className="text-white">Sprostowania</strong> danych, jeśli są nieprawidłowe lub niekompletne;</li>
            <li><strong className="text-white">Usunięcia</strong> danych (prawo do bycia zapomnianym);</li>
            <li><strong className="text-white">Ograniczenia</strong> zakresu przetwarzania;</li>
            <li><strong className="text-white">Przeniesienia</strong> danych do innego administratora;</li>
            <li><strong className="text-white">Sprzeciwu</strong> wobec przetwarzania opartego na uzasadnionym interesie;</li>
            <li><strong className="text-white">Cofnięcia zgody</strong> w dowolnym momencie — bez wpływu na legalność wcześniejszego przetwarzania.</li>
          </ul>
          <p className="mt-2">
            Wnioski dotyczące realizacji powyższych praw należy kierować na adres:
            <a href="mailto:kontakt@vulkan-vegas-pl.com.pl" className="text-gold hover:underline ml-1">kontakt@vulkan-vegas-pl.com.pl</a>.
          </p>
          <p className="mt-2">
            Użytkownikowi przysługuje także prawo wniesienia skargi do Urzędu Ochrony Danych Osobowych
            (UODO), ul. Stawki 2, 00-193 Warszawa —{' '}
            <a href="https://uodo.gov.pl" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Zmiany niniejszej Polityki</h2>
          <p>
            Administrator może aktualizować Politykę Prywatności w odpowiedzi na zmiany prawne lub
            organizacyjne. Każda zaktualizowana wersja zostanie opublikowana w Portalu z nową datą wejścia
            w życie. Zachęcamy do regularnego zapoznawania się z jej treścią.
          </p>
        </section>

      </div>
    </main>
  )
}
