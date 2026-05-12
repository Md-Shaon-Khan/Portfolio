import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-2 left-0 right-0 z-40 flex justify-center px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-sm transition-all duration-500 ${
          scrolled
            ? 'glass-card shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 border border-frost/40 flex items-center justify-center rounded-sm group-hover:border-punch transition-colors duration-300">
            <span className="font-display font-bold text-punch text-sm">SK</span>
          </div>
          <span className="font-mono text-xs text-frost/60 tracking-widest hidden sm:block">
            MD SHAON KHAN
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active === link.href
                    ? 'text-punch'
                    : 'text-frost/60 hover:text-honey'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-xs"
        >
          Resume ↗
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-honey transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-honey transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-honey transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-4 right-4 mt-2 glass-card rounded-sm p-6 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-mono text-sm tracking-widest uppercase text-frost/80 hover:text-punch transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" target="_blank" className="btn-primary text-xs">
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}