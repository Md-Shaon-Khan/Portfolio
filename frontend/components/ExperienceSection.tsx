'use client'

import { motion } from 'framer-motion'

const experienceCards = [
  {
    title: 'AI/ML & IoT Developer | 1+ Year',
    lines: [
      'HealthBridge: Engineered an IoT-driven clinical intelligence platform integrating hardware sensors with Deep Learning for real-time disease prediction and ECG signal processing.',
      'ML Engineering: Developed and deployed predictive models using TensorFlow and Scikit-learn, implementing advanced data preprocessing and signal filtering techniques.',
    ],
  },
  {
    title: 'Full-Stack Software Engineer',
    lines: [
      'UniFix: Architected a comprehensive university complaint management system using JavaScript and PHP. Developed role-based dashboards to streamline campus issue reporting and resolution tracking.',
      'IIT Academic Portal: Designed and deployed a centralized academic resource platform for Jahangirnagar University, focusing on optimized database management and UI/UX.',
      'Technical Stack: Proficient in building scalable backends with PostgreSQL and MySQL, and integrating hardware via Arduino.',
    ],
  },
  {
    title: 'Competitive Programming & Problem Solving',
    lines: [
      'Solved 450+ problems across Codeforces and LeetCode.',
      'Peak Codeforces Rating: 1182.',
      'Developed optimized solutions using C++ and Python with strong DSA fundamentals.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Professional & technical experience</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experienceCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="glass-card rounded-[30px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow hover:-translate-y-1 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-slate-100">{card.title}</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {card.lines.map((line) => (
                  <p key={line} className="text-slate-300/90">{line}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
