import { Globe, ShieldCheck, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 bg-background text-foreground">
      <div className="w-full max-w-2xl rounded-xl border border-surface-border bg-surface p-8 shadow-2xl">
        <div className="flex items-center gap-2 text-cyan-accent text-sm font-mono tracking-wider uppercase mb-4">
          <Terminal className="h-4 w-4" />
          <span>STS Final Project · HM216</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Behind the Screen
        </h1>
        <p className="text-lg md:text-xl text-foreground-muted mb-8">
          The Physical World That Powers the Internet
        </p>

        <div className="space-y-4 border-t border-surface-border pt-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-md bg-cyan-accent/10 p-2 text-cyan-accent">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                Environment & Architecture Verified
              </h2>
              <p className="text-sm text-foreground-muted">
                Next.js App Router, Tailwind CSS design tokens, Motion for React, and Lucide icons are configured.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-md bg-amber-accent/10 p-2 text-amber-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                Research Assets Preserved
              </h2>
              <p className="text-sm text-foreground-muted">
                Primary subtopic documentation is safeguarded in the isolated research repository directory.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-surface-border pt-6 text-xs font-mono text-foreground-muted">
          <span>Deadline: Oct 29, 2026</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-accent animate-pulse" />
            Ready for Section 1 Development
          </span>
        </div>
      </div>
    </main>
  );
}
