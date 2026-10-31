"use client";

import { useSimpleWords } from "./SimpleWordsContext";
import { Sparkles } from "lucide-react";

export function SimpleWordsToggle() {
  const { isSimpleWords, toggleSimpleWords } = useSimpleWords();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={isSimpleWords}
        onClick={toggleSimpleWords}
        className={`group relative inline-flex h-7 sm:h-8 items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3 py-1 transition-all duration-200 border cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-burnt-orange ${
          isSimpleWords
            ? "bg-burnt-orange text-white border-burnt-orange shadow-xs"
            : "bg-ivory-light text-charcoal border-warm-sand-border hover:border-burnt-orange/50 hover:bg-white shadow-2xs"
        }`}
      >
        <Sparkles
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isSimpleWords ? "rotate-12 text-white" : "text-burnt-orange group-hover:scale-110"
          }`}
          aria-hidden="true"
        />
        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
          Simple Words
        </span>
        <div
          className={`h-3 w-6 rounded-full transition-colors duration-200 relative p-0.5 ${
            isSimpleWords ? "bg-white/30" : "bg-warm-sand"
          }`}
          aria-hidden="true"
        >
          <div
            className={`h-2 w-2 rounded-full transition-transform duration-200 ${
              isSimpleWords ? "translate-x-3 bg-white" : "translate-x-0 bg-charcoal-muted"
            }`}
          />
        </div>
      </button>
    </div>
  );
}

