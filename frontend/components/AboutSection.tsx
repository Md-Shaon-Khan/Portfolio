'use client'

import { motion } from 'framer-motion'

const infoCards = [
  { label: 'CGPA', value: '3.82', detail: 'Up to 4th Semester' },
  { label: 'Email', value: 'shaon.iit52@gmail.com', detail: 'Professional contact' },
  { label: 'HSC GPA', value: '5.00', detail: 'Science' },
  { label: 'SSC GPA', value: '5.00', detail: 'Science' },
]

const focusPoints = [
  'AI',
  'Machine Learning',
  'Deep Learning',
  'IoT Systems',
  'Backend Engineering',
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-heading">A student building real-world AI systems.</h2>
        </motion.div>

        <div className="grid gap-10 xl:grid-cols-[1.6fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              I am an undergraduate student at the Institute of Information Technology (IIT), Jahangirnagar University, maintaining a CGPA of 3.82 (up to 4th Semester). My professional focus is on bridging the gap between hardware and intelligence through the integration of IoT and Artificial Intelligence.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Currently, I am developing HealthBridge, an IoT-driven clinical intelligence system that utilizes deep learning models for predictive health analysis. My technical background is supported by a strong foundation in algorithmic problem-solving, with over 300 problems solved on Codeforces and 100+ on LeetCode.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              I specialize in building and deploying machine learning models, developing scalable backends, and implementing real-time data acquisition through hardware integration. My goal is to develop efficient, data-driven solutions that address complex challenges in biomedical and software engineering domains.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {focusPoints.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-4"
          >
            {infoCards.map((card) => (
              <div key={card.label} className="glass-card rounded-[28px] p-6 shadow-glow">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{card.label}</p>
                <p className="mt-4 text-2xl font-semibold text-slate-100">{card.value}</p>
                <p className="mt-2 text-sm text-slate-400">{card.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
