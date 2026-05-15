'use client'

import React from 'react'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="mb-8">
      {eyebrow && <p className="text-sm text-slate-400 font-medium">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-400 max-w-xl">{subtitle}</p>}
    </header>
  )
}
