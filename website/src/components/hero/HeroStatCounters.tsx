"use client";

import { AnimatedCounter } from "./AnimatedCounter";

export function HeroStatCounters() {
  return (
    <div className="pt-2 border-t border-warm-sand-border w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 text-left">
      <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 sm:p-4 shadow-2xs">
        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-burnt-orange tracking-tight">
          <AnimatedCounter target={99} suffix="%" />
        </span>
        <span className="text-xs text-charcoal font-semibold">
          Intercontinental Optical Share
        </span>
        <span className="text-[11px] text-charcoal-muted leading-tight">
          Carried by physical cables resting on ocean floors, not satellites
        </span>
        <span className="text-[10px] font-mono text-charcoal-muted/80 pt-1 border-t border-warm-sand-border/50">
          Source: TeleGeography Submarine Telecoms Forum (verified)
        </span>
      </div>

      <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 sm:p-4 shadow-2xs">
        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-charcoal tracking-tight">
          <AnimatedCounter target={1.4} decimals={1} suffix="M+ km" />
        </span>
        <span className="text-xs text-charcoal font-semibold">
          Submarine Cable Fabric
        </span>
        <span className="text-[11px] text-charcoal-muted leading-tight">
          Hair-thin glass fibers linking global continents beneath the abyss
        </span>
        <span className="text-[10px] font-mono text-charcoal-muted/80 pt-1 border-t border-warm-sand-border/50">
          Source: ICPC (International Cable Protection Committee)
        </span>
      </div>

      <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 sm:p-4 shadow-2xs">
        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-sage-green tracking-tight">
          <AnimatedCounter target={2.2} decimals={1} suffix=" Billion" />
        </span>
        <span className="text-xs text-charcoal font-semibold">
          The Physical Digital Divide
        </span>
        <span className="text-[11px] text-charcoal-muted leading-tight">
          Humans completely offline due to infrastructure and cost barriers
        </span>
        <span className="text-[10px] font-mono text-charcoal-muted/80 pt-1 border-t border-warm-sand-border/50">
          Source: ITU (International Telecommunication Union) Facts and Figures
        </span>
      </div>
    </div>
  );
}

