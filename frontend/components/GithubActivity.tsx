'use client'

import { Github } from 'lucide-react'

export default function GithubActivity() {
  return (
    <section className="relative py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">GitHub</span>
          <h2 className="section-heading">Recent repositories</h2>
        </div>
        <div className="rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-8 shadow-glow">
          <div className="flex items-center gap-3 text-slate-200">
            <Github size={18} />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Repository showcase</p>
          </div>
          <p className="mt-4 text-slate-300">Project updates and contributions are available directly on GitHub. The contribution graph and API status badge have been removed.</p>
        </div>
      </div>
    </section>
  )
}

  return (
    <section className="relative py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 grid items-center gap-6 sm:grid-cols-[1fr_auto]">
          <div>
            <span className="section-label">GitHub</span>
            <h2 className="section-heading">Active coding and repository signal</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/85 px-4 py-2 text-sm text-slate-200">
            <Github size={16} />
            Updated from GitHub API
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow">
            <div className="mb-6 flex items-center gap-3 text-slate-200">
              <Activity size={18} />
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contribution graph</p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-slate-700/70 bg-slate-950/90">
              <Image
                src="https://ghchart.rshah.org/Md-Shaon-Khan"
                alt="GitHub contribution graph"
                width={800}
                height={190}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Repository highlight</p>
              <p className="mt-3 text-slate-300">Recent repositories pulled from GitHub to showcase updated engineering work.</p>
            </div>

            {error && (
              <div className="rounded-[28px] border border-rose-500/20 bg-rose-500/10 p-5 text-sm text-rose-100">
                {error}
              </div>
            )}

            <div className="grid gap-4">
              {repos.slice(0, 4).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card rounded-[28px] border border-slate-700/60 bg-slate-950/90 p-5 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-slate-100">{repo.name}</h3>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                      {repo.language ?? 'Code'}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{repo.description ?? 'Updated project repository with active engineering work.'}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <span>{repo.stargazers_count} stars</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
