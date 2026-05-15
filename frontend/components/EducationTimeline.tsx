'use client'

import { motion } from 'framer-motion'

const educationItems = [
  {
    year: '2023 — Present',
    title: 'B.Sc. in Information Technology',
    institution: 'Institute of Information Technology (IIT), Jahangirnagar University',
    detail: 'Ongoing degree with a CGPA of 3.82 up to the 4th Semester',
  },
  {
    year: '2022',
    title: 'HSC — Science',
    institution: 'Jahangirnagar University School & College',
    detail: 'Physics 97%, Chemistry 97%, Mathematics 97%',
  },
  {
    year: '2020',
    title: 'SSC — Science',
    institution: 'Jahangirnagar University School & College',
    detail: 'Mathematics 96%, Higher Math 95%, Physics 93%, Chemistry 93%',
  },
]

export default function EducationTimeline() {
  return (
    <section id="education" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Education</span>
          <h2 className="section-heading">Academic timeline</h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {educationItems.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="glass-card rounded-[30px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">{item.year}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.institution}</p>
              <p className="mt-4 text-sm text-slate-400">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
