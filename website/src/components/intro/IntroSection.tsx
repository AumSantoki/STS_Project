import { Cable, Cpu, Radio, Users, ArrowUpRight } from "lucide-react";

export function IntroSection() {
  const previewPillars = [
    {
      id: "journey-of-data",
      number: "01",
      title: "The Journey of a Single Click",
      category: "Packet Routing & Physical Layer",
      desc: "Track the journey from your phone's electromagnetic radio waves through cell towers, regional fiber, and Internet Exchange Points (IXPs) into transoceanic pipelines.",
      icon: Radio,
      accent: "cyan",
    },
    {
      id: "inside-the-cloud",
      number: "02",
      title: "Inside the Physical Cloud",
      category: "Hyperscale Facilities & Energy",
      desc: "Examine massive multi-megawatt data centers, cooling systems, power distribution units, and the enormous thermodynamic cost of digital computing.",
      icon: Cpu,
      accent: "blue",
    },
    {
      id: "abyssal-network",
      number: "03",
      title: "Subsea Cables & The Abyss",
      category: "Oceanic Fiber Infrastructure",
      desc: "How 1.4 million kilometers of deep-sea cables on the ocean floor carry 99% of civilization's intercontinental communications.",
      icon: Cable,
      accent: "cyan",
    },
    {
      id: "people-behind",
      number: "04",
      title: "The Human Guardians",
      category: "Field Labor & Network Operations",
      desc: "Meet the cable repair ship crews, deep-sea divers, tower climbers, fiber splicers, and NOC engineers who keep the internet physically running.",
      icon: Users,
      accent: "amber",
    },
  ];

  return (
    <section
      id="hidden-network"
      aria-label="Introduction to Physical Internet Components"
      className="relative z-20 min-h-screen py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-background-deep border-t border-surface-border text-foreground"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-accent uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-accent" />
            <span>The Reality of the Cloud</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            The Internet is not in the sky.{" "}
            <span className="text-foreground-muted font-normal block sm:inline">
              It is etched into the earth and submerged beneath the sea.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Every digital interaction relies on the world&apos;s largest physical machine: 
            millions of kilometers of glass threads, colossal server facilities drawing river-scale cooling, 
            and thousands of skilled technicians working in extreme environments.
          </p>
        </div>

        {/* Anchor point for the secondary action "Discover the journey of data" */}
        <div id="journey-of-data" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-border">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-foreground-muted">
              <span>EXPLORATION ROADMAP</span>
              <span className="text-surface-border">/</span>
              <span className="text-cyan-accent">UPCOMING MODULES</span>
            </div>
            <span className="text-xs font-mono text-foreground-muted">
              DEADLINE: OCT 29, 2026
            </span>
          </div>

          {/* Module Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previewPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="group relative flex flex-col justify-between rounded-xl border border-surface-border bg-surface/50 p-6 sm:p-8 transition-all duration-300 hover:border-cyan-accent/30 hover:bg-surface/90 hover:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-lg p-2.5 ${
                            pillar.accent === "cyan"
                              ? "bg-cyan-accent/10 text-cyan-accent"
                              : pillar.accent === "amber"
                              ? "bg-amber-accent/10 text-amber-accent"
                              : "bg-blue-accent/10 text-blue-accent"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono text-foreground-muted">
                          {pillar.category}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-foreground-muted group-hover:text-cyan-accent transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-accent transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-surface-border/50 flex items-center justify-between text-xs font-mono text-foreground-muted">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent/60" />
                      Documentary Module
                    </span>
                    <span className="text-[11px] text-cyan-accent/80 flex items-center gap-1">
                      Next phase <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Footer Attribution for Academic Research Context */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-surface-border text-xs font-mono text-foreground-muted">
          <span>
            Behind the Screen · STS Final Project (HM216)
          </span>
          <div className="flex items-center gap-4">
            <span className="hover:text-cyan-accent transition-colors">
              Research Preserved: 6 Papers
            </span>
            <span>·</span>
            <span className="text-cyan-accent">
              Phase 2 Hero Complete
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
