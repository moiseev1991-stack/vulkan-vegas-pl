import Link from 'next/link'

const steps = [
  {
    icon: '📝',
    title: 'Zarejestruj się',
    description: 'Utwórz konto w kilka kliknięć.',
  },
  {
    icon: '💳',
    title: 'Dokonaj wpłaty',
    description: 'Zasil konto i odbierz bonus powitalny.',
  },
  {
    icon: '🎰',
    title: 'Graj i zdobywaj',
    description: 'Każda gra przybliża Cię do VIP.',
  },
  {
    icon: '⭐',
    title: 'Awansuj w rankingu',
    description: 'Przechodź kolejne poziomy VIP.',
  },
  {
    icon: '🏆',
    title: 'Odbierz nagrody',
    description: 'Cashback, bonusy i dedykowany opiekun.',
  },
]

export default function VipSteps() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: '#FFC500' }}>KROKI</p>
        <h2 className="text-2xl font-black text-white">Jak zostać członkiem VIP</h2>
      </div>

      {/* Timeline — horizontal on md+, vertical on mobile */}
      <div className="relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Connecting line — desktop only */}
        <div
          className="hidden md:block absolute"
          style={{
            top: '28px',
            left: 'calc(10% + 20px)',
            right: 'calc(10% + 20px)',
            height: '2px',
            background: 'linear-gradient(to right, #C4001C 0%, #FFC500 50%, #C4001C 100%)',
            opacity: 0.4,
          }}
        />

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 px-4 md:px-0">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {/* Circle */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 shrink-0"
                style={{
                  background: i === 0
                    ? 'linear-gradient(135deg, #C4001C, #880000)'
                    : 'linear-gradient(135deg, #1a0010, #130000)',
                  border: `2px solid ${i === 0 ? '#C4001C' : '#2a0010'}`,
                  boxShadow: i === 0 ? '0 0 20px rgba(196,0,28,0.4)' : 'none',
                }}
              >
                <span style={{ fontSize: '22px', lineHeight: 1 }}>{step.icon}</span>
              </div>

              {/* Step number badge */}
              <div
                className="absolute top-0 right-1/2 translate-x-7 -translate-y-1 text-[9px] font-black px-1.5 py-0.5 rounded-full z-20"
                style={{ background: '#FFC500', color: '#000' }}
              >
                {i + 1}
              </div>

              <h3 className="font-black text-sm mb-1" style={{ color: '#FFC500' }}>{step.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div className="flex justify-center mt-8">
          <Link
            href="#register"
            className="inline-block text-black font-bold text-sm px-8 py-2.5 rounded-full transition hover:bg-yellow-400"
            style={{ background: '#FFC500' }}
          >
            Zacznij swoją przygodę VIP
          </Link>
        </div>
      </div>
    </section>
  )
}
