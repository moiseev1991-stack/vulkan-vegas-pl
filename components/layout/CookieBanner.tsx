'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('cookie_accepted')) return

    const onScroll = () => {
      // показываем после прокрутки на высоту экрана
      if (window.scrollY >= window.innerHeight * 0.8) {
        setShow(true)
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_accepted', '1')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-20 md:bottom-4 right-4 z-50 max-w-xs bg-surface border border-white/10 rounded-2xl p-5 shadow-2xl">
      <p className="text-white/70 text-xs mb-4 leading-relaxed">
        Ta strona korzysta z plików cookie w celu zapewnienia lepszego działania serwisu.
        Dalsze korzystanie oznacza akceptację.{' '}
        <Link href="/polityka-cookie/" className="text-gold hover:underline">Polityka cookie</Link>
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-gold text-black text-xs font-bold py-2.5 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Zgadzam się
        </button>
        <button
          onClick={() => setShow(false)}
          className="flex-1 border border-white/15 text-white/50 text-xs py-2.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          Odrzuć
        </button>
      </div>
    </div>
  )
}
