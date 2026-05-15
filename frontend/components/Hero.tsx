'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Star } from 'lucide-react'

const phrases = [
  'AI + IoT system design',
  'Machine Learning model pipelines',
  'Scalable backend software',
  'Biomedical data solutions',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [phrase, setPhrase] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'pause'>('typing')

  useEffect(() => {
    if (phase === 'pause') {
      const timer = setTimeout(() => {
        setPhrase((current) => (current + 1) % phrases.length)
        setText('')
        setPhase('typing')
      }, 1800)
      return () => clearTimeout(timer)
    }

    const currentText = phrases[phrase]
    const timer = setTimeout(() => {
      if (text.length < currentText.length) {
        setText(currentText.slice(0, text.length + 1))
      } else {
        setPhase('pause')
      }
    }, 70)

    return () => clearTimeout(timer)
  }, [phrase, phase, text])

  return (
    <section id="hero" className="relative min-h-[88vh] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-950/90 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.16)]">
            <Star size={16} />
          </span>
          <span className="font-medium tracking-[0.25em] uppercase text-cyan-200">Open to AI/ML Internship Opportunities</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Md Shaon Khan</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-slate-50 sm:text-6xl">
              Aspiring AI Engineer | IoT & Machine Learning Developer
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Building intelligent systems by integrating Artificial Intelligence, IoT, and scalable software engineering.
            </p>

            <div className="text-base text-cyan-200">
              <span className="font-semibold text-slate-100">Now exploring:</span> <span className="font-medium">{text}</span>
              <span className="blink ml-1 inline-block h-5 w-0.5 rounded bg-cyan-300 animate-pulse" />
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1h2hCBg-gbBpUMhvtTIXAAJ_VTpKAcToI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[30px] border border-slate-700/80 bg-slate-900/80 p-5 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,206,255,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(44,213,255,0.08),_transparent_40%)]" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-700/70 bg-slate-950/90 p-6">
              <div className="flex items-center justify-between gap-4 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Personal Brand</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-50">Aspiring AI Engineer</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">
                  <Star size={20} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">University</p>
                  <p className="mt-2 text-sm font-medium text-slate-100">IIT, Jahangirnagar University</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Current focus</p>
                  <p className="mt-2 text-sm font-medium text-slate-100">HealthBridge clinical intelligence platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
