import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Regulamin — Zasady Korzystania z Serwisu vulkan-vegas-pl.com.pl',
  description: 'Regulamin serwisu vulkan-vegas-pl.com.pl. Warunki użytkowania portalu afiliacyjnego, ograniczenia wiekowe 18+, zakres odpowiedzialności operatora oraz ochrona własności intelektualnej.',
  openGraph: {
    title: 'Regulamin — Zasady Korzystania z Serwisu vulkan-vegas-pl.com.pl',
    description: 'Warunki użytkowania portalu vulkan-vegas-pl.com.pl — charakter afiliacyjny, ograniczenia 18+, prawa autorskie i wyłączenie odpowiedzialności.',
    url: 'https://vulkan-vegas-pl.com.pl/regulamin/',
  },
}

export default function Regulamin() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-white mb-2">Regulamin Serwisu</h1>
      <p className="text-white/40 text-sm mb-10">Obowiązuje od: 1 kwietnia 2026</p>

      <div className="space-y-10 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Informacje wstępne</h2>
          <p>
            Poniższy Regulamin ustala zasady i warunki korzystania z serwisu internetowego prowadzonego
            pod adresem vulkan-vegas-pl.com.pl (dalej: &bdquo;Portal&rdquo;). Portal jest samodzielnym serwisem
            afiliacyjno-informacyjnym z dziedziny kasyn online — nie jest operatorem hazardowym, nie przyjmuje
            środków finansowych od użytkowników i nie organizuje jakichkolwiek gier losowych.
          </p>
          <p className="mt-2">
            Dostęp do Portalu i korzystanie z jego treści jest równoznaczne z pełną akceptacją niniejszego
            Regulaminu. Osoby, które nie zgadzają się z jego postanowieniami, proszone są o niekorzystanie z Portalu.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Ograniczenie dostępu — tylko 18+</h2>
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)' }}
          >
            <p className="text-white font-semibold">
              Portal jest dostępny wyłącznie dla osób, które ukończyły 18 rok życia.
            </p>
          </div>
          <p>
            Gry hazardowe online są prawnie zakazane dla osób nieletnich. Jeżeli nie ukończyłeś 18 lat,
            nie masz prawa korzystać z treści Portalu ani rejestrować się w kasynach, do których prowadzą
            zamieszczone tu linki. Operator Portalu nie ponosi odpowiedzialności za obejście tych ograniczeń
            przez osoby niepełnoletnie.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Charakter prawny Portalu</h2>
          <p>
            vulkan-vegas-pl.com.pl funkcjonuje jako niezależny serwis afiliacyjny. W praktyce oznacza to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Portal publikuje opracowane przez redakcję recenzje, zestawienia i analizy kasyn internetowych;</li>
            <li>Za kierowanie użytkowników do kasyn partnerskich Portal może pobierać wynagrodzenie prowizyjne;</li>
            <li>Wszelkie materiały zamieszczone w Portalu mają charakter wyłącznie informacyjny i nie stanowią doradztwa prawnego ani finansowego;</li>
            <li>Portal nie składa żadnych gwarancji dotyczących wyników gry ani wysokości wygranych w polecanych kasynach.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Ograniczenie odpowiedzialności</h2>
          <p>
            Operator Portalu nie odpowiada za:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Treści, regulaminy bonusów ani polityki kasyn będących podmiotami zewnętrznymi;</li>
            <li>Straty finansowe powstałe u użytkowników w związku z aktywnością hazardową;</li>
            <li>Przerwy w działaniu lub błędy techniczne na stronach kasyn partnerskich;</li>
            <li>Decyzje podejmowane przez użytkowników na podstawie materiałów opublikowanych w Portalu;</li>
            <li>Działania serwisów zewnętrznych, do których prowadzą linki zamieszczone w Portalu.</li>
          </ul>
          <p className="mt-2">
            Operator dokłada starań, by treści Portalu były aktualne i rzetelne, jednak nie gwarantuje
            ich kompletności ani bezbłędności w każdym momencie.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Prawa autorskie i własność intelektualna</h2>
          <p>
            Wszystkie materiały opublikowane w Portalu — w tym artykuły, grafiki, logo, oprogramowanie
            oraz układ strony — stanowią własność Operatora bądź podmiotów, od których Operator uzyskał
            stosowne licencje. Kopiowanie, przetwarzanie lub rozpowszechnianie tych materiałów bez uprzedniej
            pisemnej zgody Operatora jest zabronione i może stanowić naruszenie przepisów prawa autorskiego.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Pliki cookies i prywatność</h2>
          <p>
            Szczegółowe zasady dotyczące plików cookie zawiera{' '}
            <Link href="/polityka-cookie/" className="text-gold hover:underline">Polityka Cookie</Link>.
            Sposób przetwarzania danych osobowych użytkowników opisuje{' '}
            <Link href="/polityka-prywatnosci/" className="text-gold hover:underline">Polityka Prywatności</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Bezpieczna gra</h2>
          <p>
            Portal aktywnie propaguje podejście do hazardu jako formy rozrywki. Jeśli czujesz, że gra
            wymknęła Ci się spod kontroli, zapoznaj się z treściami na stronie{' '}
            <Link href="/odpowiedzialna-gra/" className="text-gold hover:underline">Odpowiedzialna Gra</Link>{' '}
            lub skontaktuj się z polskimi organizacjami niosącymi pomoc osobom uzależnionym.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Prawo właściwe i jurysdykcja</h2>
          <p>
            Regulamin podlega przepisom prawa polskiego. Wszelkie spory związane z korzystaniem z Portalu
            rozstrzygane będą przez właściwe sądy na terytorium Rzeczypospolitej Polskiej.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">9. Aktualizacje Regulaminu</h2>
          <p>
            Operator zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Zmieniona wersja wchodzi
            w życie z chwilą jej opublikowania w Portalu. Kontynuowanie korzystania z Portalu po publikacji
            zmian oznacza ich akceptację.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">10. Dane kontaktowe</h2>
          <p>
            Pytania dotyczące niniejszego Regulaminu prosimy kierować na adres:
            <a href="mailto:kontakt@vulkan-vegas-pl.com.pl" className="text-gold hover:underline ml-1">kontakt@vulkan-vegas-pl.com.pl</a>
          </p>
        </section>

      </div>
    </main>
  )
}
