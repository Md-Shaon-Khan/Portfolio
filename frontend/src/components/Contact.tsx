import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full bg-navy/60 border border-frost/15 rounded-sm px-4 py-3 font-mono text-sm text-honey placeholder-frost/25
    focus:outline-none focus:border-cerulean/60 transition-colors duration-200`

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="glow-ring w-80 h-80 bg-punch/8 -top-20 right-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <p className="section-sub">04 — Contact</p>
          <h2 className="section-heading">Let's Build Together</h2>
          <p className="text-frost/50 text-base mt-3 max-w-lg">
            Open to research collaborations, internships, freelance projects, and technical discussions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="md:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-frost/40 tracking-wider uppercase block mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-mono text-xs text-frost/40 tracking-wider uppercase block mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-frost/40 tracking-wider uppercase block mb-2">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project / Collaboration / Internship"
                className={inputClass}
              />
            </div>

            <div>
              <label className="font-mono text-xs text-frost/40 tracking-wider uppercase block mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project or idea..."
                className={inputClass + ' resize-none'}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>Sending...</>
              ) : (
                <><FiSend size={14} /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xs text-frost text-center py-2 border border-frost/20 rounded-sm"
              >
                ✓ Message sent — I'll respond within 24 hours.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xs text-punch text-center py-2 border border-punch/20 rounded-sm"
              >
                ✗ Something went wrong. Try emailing me directly.
              </motion.p>
            )}
          </motion.div>

          {/* Info — 2 cols */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="md:col-span-2 space-y-6"
          >
            {/* Links */}
            <div className="glass-card rounded-sm p-6 space-y-5">
              <p className="font-mono text-xs text-punch tracking-widest uppercase">Connect</p>
              {[
                  { label: 'GitHub',   href: 'https://github.com/Md-Shaon-Khan',                      sub: '@Md-Shaon-Khan' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-shaon-khan-01003433a/',   sub: 'md-shaon-khan' },
                  { label: 'Email',    href: 'mailto:shaon@example.com',                               sub: 'shaon@example.com' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 border border-frost/15 rounded-sm flex items-center justify-center group-hover:border-punch/50 group-hover:bg-punch/5 transition-all duration-200">
                      <span className="sr-only">{link.label}</span>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-honey/70 group-hover:text-honey transition-colors">{link.label}</p>
                      <p className="font-mono text-[10px] text-frost/35">{link.sub}</p>
                    </div>
                  </a>
                ))}
            </div>

            {/* Availability */}
            <div className="glass-card rounded-sm p-6">
              <p className="font-mono text-xs text-punch tracking-widest uppercase mb-3">Status</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-honey/70">Available for opportunities</span>
              </div>
              <p className="font-mono text-[11px] text-frost/40 leading-relaxed">
                Open to internships, research roles, and collaborative AI / healthcare projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}