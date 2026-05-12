import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } },
  item: {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-bg"
    >
      {/* Ambient glows */}
      <div className="glow-ring w-96 h-96 bg-cerulean/10 top-1/4 -left-24" />
      <div className="glow-ring w-72 h-72 bg-punch/8 bottom-1/4 right-0" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-frost/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-frost/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-frost/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-frost/20" />

      <motion.div
        className="relative z-10 max-w-4xl w-full"
        variants={stagger.container}
        initial="hidden"
        animate="show"
      >
        {/* Label */}
        <motion.div variants={stagger.item} className="mb-6">
          <span className="font-mono text-xs text-punch tracking-[0.3em] uppercase border border-punch/30 px-3 py-1.5 rounded-sm">
            AI · Healthcare · Engineering
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={stagger.item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
        >
          <span className="text-honey">Building</span>
          <br />
          <span className="text-punch italic">Intelligent</span>
          <br />
          <span className="text-honey">Systems.</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={stagger.item}
          className="font-mono text-sm md:text-base text-frost/70 mb-10 h-6"
        >
          <TypeAnimation
            sequence={[
              'Healthcare Technology Engineering',    2000,
              'Machine Learning & Deep Learning',     2000,
              'FastAPI · MongoDB · React Systems',     2000,
              'IoT & Embedded Systems Research',      2000,
            ]}
            speed={55}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={stagger.item}
          className="text-frost/60 text-base md:text-lg max-w-xl leading-relaxed mb-12 font-body"
        >
          Jahangirnagar University IIT student specializing in AI, healthcare technology,
          and scalable backend systems. CGPA 3.78 — building globally competitive solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={stagger.item} className="flex flex-wrap gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FiFileText size={14} /> Resume
          </a>
          <a
            href="https://github.com/Md-Shaon-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/md-shaon-khan-01003433a/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            <FiMail size={14} /> Contact
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={stagger.item}
          className="mt-16 flex flex-wrap gap-8 border-t border-frost/10 pt-8"
        >
          {[
            { label: 'CGPA',       value: '3.78' },
            { label: 'SSC / HSC',  value: '5.00' },
            { label: 'Focus',      value: 'AI & Healthcare' },
            { label: 'University', value: 'JU IIT' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-honey">{stat.value}</p>
              <p className="font-mono text-xs text-frost/40 tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="font-mono text-xs text-frost/30 tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-punch/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}