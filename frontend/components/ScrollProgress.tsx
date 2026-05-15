'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const value = height > 0 ? (scrollTop / height) * 100 : 0
      setProgress(Math.min(100, Math.max(0, value)))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-slate-800/70">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-slate-200 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
