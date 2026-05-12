import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FOCUS_AREAS = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Healthcare Technology',
  'Backend Engineering',
  'IoT Systems',
  'Research Engineering',
  'Computer Vision',
]

const TIMELINE = [
  { year: '2024–Now', label: 'BSc. IIT — Jahangirnagar University', sub: 'CGPA 3.78 (3rd Semester)', accent: true },
  { year: '2024',     label: 'HSC — JU School & College',           sub: 'GPA 5.00 / 5.00 · Science' },
  { year: '2022',     label: 'SSC — JU School & College',           sub: 'GPA 5.00 / 5.00 · Science' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-sub">01 — About</p>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-honey/80 leading-relaxed text-base">
              I'm <span className="text-honey font-semibold">Md Shaon Khan</span>, a
              technology-driven engineering student at the{' '}
              <span className="text-frost">Institute of Information Technology (IIT)</span>,
              Jahangirnagar University — driven by the intersection of artificial intelligence
              and healthcare.
            </p>
            <p className="text-honey/60 leading-relaxed text-base">
              My work spans deep learning systems, scalable FastAPI backends, IoT architectures,
              and full-stack web platforms. I approach every problem with research maturity —
              building systems that are not just functional, but meaningful.
            </p>
            <p className="text-honey/60 leading-relaxed text-base">
              With a perfect academic record through SSC and HSC, and a strong CGPA at JU,
              I am building toward globally competitive AI and healthcare engineering research.
            </p>

            {/* Focus tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {FOCUS_AREAS.map(area => (
                <span key={area} className="tech-badge">{area}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline + card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Academic card */}
            <div className="glass-card rounded-sm p-6">
              <p className="font-mono text-xs text-punch tracking-widest uppercase mb-5">Academic Timeline</p>
              <div className="space-y-5">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${item.accent ? 'bg-punch' : 'bg-cerulean'}`} />
                      {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-frost/10 mt-1" style={{ minHeight: '2rem' }} />}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-frost/40 tracking-wider">{item.year}</p>
                      <p className={`font-medium text-sm mt-0.5 ${item.accent ? 'text-honey' : 'text-honey/80'}`}>{item.label}</p>
                      <p className="font-mono text-xs text-frost/50 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'CGPA',   value: '3.78', note: '3rd Sem' },
                { label: 'SSC GPA',value: '5.00', note: 'Perfect' },
                { label: 'HSC GPA',value: '5.00', note: 'Perfect' },
              ].map(s => (
                <div key={s.label} className="glass-card rounded-sm p-4 text-center">
                  <p className="font-display text-2xl font-bold text-punch">{s.value}</p>
                  <p className="font-mono text-[10px] text-frost/50 tracking-wider mt-1 uppercase">{s.label}</p>
                  <p className="font-mono text-[10px] text-cerulean/70 mt-0.5">{s.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}