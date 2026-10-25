import { Cable, Cpu, Radio, Users, ArrowUpRight, BookOpen } from "lucide-react";

export function IntroSection() {
  const previewPillars = [
    {
      id: "journey-of-data",
      number: "01",
      title: "The Physical Routing Pipeline",
      category: "Packet Routing & Physical Layer",
      desc: "Following electromagnetic radio waves through access cabinets, autonomous systems, and deep-sea optical fiber.",
      icon: Radio,
      accent: "orange",
    },
    {
      id: "inside-the-cloud",
      number: "02",
      title: "Inside the Thermodynamic Cloud",
      category: "Hyperscale Facilities & Energy",
      desc: "Massive multi-megawatt computing campuses, evaporative chiller towers, and the thermodynamic cost of digital computing.",
      icon: Cpu,
      accent: "gold",
    },
    {
      id: "abyssal-network",
      number: "03",
      title: "The Abyssal Seafloor Fabric",
      category: "Subsea Optical Infrastructure",
      desc: "How 1.4 million kilometers of deep-sea cables carry 99% of civilization's intercontinental telecommunications.",
      icon: Cable,
      accent: "sage",
    },
    {
      id: "people-behind",
      number: "04",
      title: "The Unseen Human Workforce",
      category: "Field Labor & Maintenance",
      desc: "The cable ship captains, saturation divers, high-altitude riggers, fiber splicers, and NOC engineers keeping networks online.",
      icon: Users,
      accent: "orange",
    },
  ];

  return (
    <section
      id="pedagogical-context"
      aria-label="Academic Research Context and Roadmap"
      className="relative z-20 py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-ivory-light border-t border-warm-sand-border text-charcoal scroll-mt-20"
    >
      {/* Anchor for backward compatibility */}
      <div id="hidden-network" className="scroll-mt-28" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-burnt-orange uppercase font-bold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-burnt-orange" />
            <span>ACADEMIC FOUNDATION · STS HM216</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            The Internet is not in the sky.{" "}
            <span className="text-charcoal-muted font-normal block sm:inline">
              It is etched into earth, submerged beneath sea, and maintained by human hands.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Every digital interaction relies on the world&apos;s largest physical machine: 
            millions of kilometers of glass threads, colossal server halls drawing river-scale cooling, 
            and thousands of skilled technicians working in extreme environments.
          </p>
        </div>

        {/* Exploration Pillars */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-warm-sand-border">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-charcoal-muted font-bold">
              <span>EXPLORATION DOSSIERS</span>
              <span className="text-warm-sand">/</span>
              <span className="text-burnt-orange">PHYSICAL SUBTOPICS</span>
            </div>
            <span className="text-xs font-mono text-charcoal-muted">
              DEADLINE: OCT 29, 2026
            </span>
          </div>

          {/* Module Cards in Warm Editorial Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previewPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="group relative flex flex-col justify-between rounded-xl border border-warm-sand-border bg-ivory p-6 sm:p-8 transition-all duration-300 hover:border-burnt-orange/50 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-lg p-2.5 ${
                            pillar.accent === "orange"
                              ? "bg-burnt-orange/10 text-burnt-orange"
                              : pillar.accent === "gold"
                              ? "bg-muted-gold/20 text-charcoal"
                              : "bg-sage-green/20 text-charcoal"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-charcoal-muted">
                          {pillar.category}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-charcoal-muted group-hover:text-burnt-orange transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-charcoal group-hover:text-burnt-orange transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-warm-sand-border/70 flex items-center justify-between text-xs font-mono text-charcoal-muted">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-burnt-orange" />
                      Documentary Module
                    </span>
                    <span className="text-[11px] text-burnt-orange font-bold flex items-center gap-1">
                      Interactive Explorer <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Attribution Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 sm:pt-10 border-t border-warm-sand-border text-xs font-mono text-charcoal-muted text-center sm:text-left">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-burnt-orange shrink-0" />
            <span>Behind the Screen · STS Final Project (HM216)</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
            <span>Preserved Research: 6 Empirical Papers</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-burnt-orange font-bold">
              Interaction Redesign Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
