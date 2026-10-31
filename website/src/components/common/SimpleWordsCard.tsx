"use client";

import { useSimpleWords } from "./SimpleWordsContext";
import { SIMPLE_WORDS_DATA } from "@/data/simpleWordsData";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface SimpleWordsCardProps {
  sectionKey: keyof typeof SIMPLE_WORDS_DATA;
}

export function SimpleWordsCard({ sectionKey }: SimpleWordsCardProps) {
  const { isSimpleWords } = useSimpleWords();
  const shouldReduceMotion = useReducedMotion();
  const data = SIMPLE_WORDS_DATA[sectionKey];

  if (!data) return null;

  return (
    <AnimatePresence>
      {isSimpleWords && (
        <motion.aside
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
          aria-label={`Simple words explanation for ${data.title}`}
          className="w-full max-w-6xl mx-auto my-4 sm:my-6 overflow-hidden px-4 sm:px-8 md:px-12"
        >
          <div className="rounded-2xl border-2 border-burnt-orange/30 bg-ivory-light p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-warm-sand-border/70 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-burnt-orange text-white shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-burnt-orange">
                  {"// IN SIMPLE WORDS"}
                </span>
              </div>
              <span className="text-[11px] font-mono text-charcoal-muted">
                Written for everyone • Plain English
              </span>
            </div>

            <p className="text-sm sm:text-base font-sans text-charcoal leading-relaxed font-medium mb-4">
              {data.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {data.analogies.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-warm-sand-border bg-ivory p-3 text-left flex flex-col gap-1"
                >
                  <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                    {item.label}
                  </span>
                  <p className="text-xs font-sans text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
