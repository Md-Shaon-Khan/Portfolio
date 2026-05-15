'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 520)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-3 text-sm text-slate-100 shadow-glow transition-all ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      aria-label="Scroll back to top"
    >
      <ArrowUp size={16} />
      Back to top
    </button>
  )
}
