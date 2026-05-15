'use client'

import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

const certifications = [
  {
    title: 'HackerRank: Python (Basic) Certified',
    description: 'Verified certification demonstrating foundational Python knowledge and coding skills.',
  },
  {
    title: 'SimpliLearn: PostgreSQL Professional Certification',
    description: 'Practical database engineering certification with focus on relational design and query optimization.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Certifications</span>
          <h2 className="section-heading">Verified technical credentials</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="glass-card rounded-[30px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow hover:border-cyan-400/30 transition-all"
            >
              <div className="mb-4 flex items-center gap-3 text-cyan-300">
                <BadgeCheck size={20} />
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Certification</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
