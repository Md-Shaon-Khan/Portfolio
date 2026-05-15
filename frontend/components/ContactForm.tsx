'use client'

import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [state, handleSubmit] = useForm('mojrgjvo')

  useEffect(() => {
    if (state.succeeded) setForm(initialForm)
  }, [state.succeeded])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name as keyof FormState]: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-label="Contact form"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm text-slate-200 mb-1">Full Name</span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Your full name"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-sm text-slate-200 mb-1">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
      </div>

      <label className="flex flex-col">
        <span className="text-sm text-slate-200 mb-1">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={onChange}
          required
          className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Project / Collaboration / Internship"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-slate-200 mb-1">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          required
          rows={6}
          className="w-full rounded-lg bg-slate-800/60 border border-slate-700/50 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          placeholder="Tell me about your project or role..."
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="btn-primary inline-flex items-center justify-center px-5 py-3 rounded-md w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {state.succeeded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-emerald-400"
          >
            Message sent successfully.
          </motion.p>
        )}
      </div>
    </form>
  )
}
