import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-frost/10 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-frost/30 flex items-center justify-center rounded-sm">
            <span className="font-display text-xs font-bold text-punch">SK</span>
          </div>
          <p className="font-mono text-xs text-frost/30 tracking-widest">MD SHAON KHAN</p>
        </div>

        <p className="font-mono text-xs text-frost/25 text-center">
          © {year} · Built with React + FastAPI · Deployed on Netlify & Render
        </p>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Md-Shaon-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-frost/30 hover:text-honey transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-shaon-khan-01003433a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-frost/30 hover:text-cerulean transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}