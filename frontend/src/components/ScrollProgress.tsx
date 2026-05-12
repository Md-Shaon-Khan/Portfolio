import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total  = document.body.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(total > 0 ? (current / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-navy/60">
      <div
        className="h-full bg-punch transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}