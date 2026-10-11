import { CheckCircle2, ExternalLink, Github, Radio, ShieldCheck, Terminal } from 'lucide-react'

const checks = [
  'Node.js 20 runtime configured',
  'Production start command verified',
  'Render health check enabled',
  'Railway-compatible service layout',
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-7 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <a href="/" className="flex items-center gap-3" aria-label="ZephyrMd home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-400 text-[#07111f] shadow-[0_0_28px_rgba(34,211,238,0.35)]">
              <Radio className="size-5" aria-hidden="true" />
            </span>
            <span className="font-semibold tracking-tight">ZephyrMd</span>
          </a>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
            Deployment ready
          </span>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm font-medium text-cyan-300">
              <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              Bot infrastructure, online
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Your community&apos;s calm, capable bot.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              ZephyrMd is configured for production hosting with a lightweight status surface, reliable startup checks, and deployment manifests for Railway and Render.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://github.com/Samkelo119/ZephyrMd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-[#07111f] transition hover:bg-cyan-200">
                <Github className="size-4" aria-hidden="true" />
                View on GitHub
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
              <a href="#status" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200">
                Check status
              </a>
            </div>
          </div>

          <aside id="status" className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-slate-400">System status</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">All systems nominal</h2>
              </div>
              <CheckCircle2 className="size-7 text-emerald-300" aria-label="Healthy" />
            </div>
            <ul className="space-y-4 py-6" aria-label="Deployment checks">
              {checks.map((check) => (
                <li key={check} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-300" aria-hidden="true" />
                  {check}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
                <Terminal className="size-4" aria-hidden="true" />
                Runtime
              </div>
              <p className="mt-2 font-mono text-xs text-slate-400">npm start · port $PORT</p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Ready for a managed deployment
            </div>
          </aside>
        </section>

        <footer className="border-t border-white/10 py-6 text-sm text-slate-500">
          ZephyrMd · A stable home for your bot
        </footer>
      </div>
    </main>
  )
}
