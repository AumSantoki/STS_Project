"use client";

import { useState } from "react";
import { QUIZ_QUESTIONS } from "@/data/quizData";
import { CheckCircle, XCircle, Award, RotateCcw, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function MiniQuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section
      id="quiz-section"
      aria-label="Test Yourself Interactive Mini Quiz"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-ivory-light border-t border-warm-sand-border"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="h-2 w-2 rounded-full bg-burnt-orange" />
            <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
              {"// KNOWLEDGE CHECK"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal">
            &ldquo;Test Yourself&rdquo; Mini Quiz
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">
            Five questions based entirely on the verified physical internet facts explored across this project.
            Immediate feedback and an overall score are provided.
          </p>
        </div>

        {/* Quiz Body */}
        <div className="rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-8 shadow-sm">
          {!isCompleted ? (
            <div className="flex flex-col gap-6">
              {/* Progress counter */}
              <div className="flex items-center justify-between text-xs font-mono text-charcoal-muted border-b border-warm-sand-border pb-3">
                <span className="font-bold text-burnt-orange uppercase">
                  QUESTION {currentIdx + 1} OF {QUIZ_QUESTIONS.length}
                </span>
                <span>Current Score: {score}</span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-extrabold text-charcoal leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  let btnStyle =
                    "border-warm-sand-border bg-ivory hover:border-burnt-orange/50 hover:bg-ivory-light text-charcoal";

                  if (hasAnswered) {
                    if (isCorrect) {
                      btnStyle = "border-sage-green bg-sage-green/15 text-charcoal font-bold";
                    } else if (isSelected) {
                      btnStyle = "border-burnt-orange bg-burnt-orange/15 text-charcoal";
                    } else {
                      btnStyle = "border-warm-sand-border bg-ivory opacity-60 text-charcoal-muted";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelect(idx)}
                      className={`flex items-center justify-between rounded-xl border p-3.5 sm:p-4 text-xs sm:text-sm font-sans font-medium text-left transition-all cursor-pointer ${btnStyle}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-warm-sand-border bg-white text-xs font-mono font-bold text-charcoal shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </span>

                      {hasAnswered && isCorrect && (
                        <CheckCircle className="h-5 w-5 text-sage-green shrink-0" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="h-5 w-5 text-burnt-orange shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              <AnimatePresence>
                {hasAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="flex flex-col gap-3 rounded-xl border border-warm-sand-border bg-ivory-light p-4"
                  >
                    <div className="flex items-center gap-2">
                      {selectedOption === currentQ.correctIndex ? (
                        <span className="text-xs font-mono font-bold text-sage-green uppercase flex items-center gap-1.5">
                          <CheckCircle className="h-4 w-4" /> Correct Answer!
                        </span>
                      ) : (
                        <span className="text-xs font-mono font-bold text-burnt-orange uppercase flex items-center gap-1.5">
                          <XCircle className="h-4 w-4" /> Incorrect
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-sans text-charcoal leading-relaxed font-medium">
                      {currentQ.explanation}
                    </p>
                    <span className="text-[10px] font-mono text-charcoal-muted border-t border-warm-sand-border/70 pt-2">
                      <strong className="text-charcoal font-semibold">Source:</strong> {currentQ.source}
                    </span>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="self-end mt-2 inline-flex items-center gap-2 rounded-xl bg-burnt-orange px-4 py-2 text-xs font-mono font-bold text-white hover:bg-burnt-orange-hover shadow-xs cursor-pointer active:scale-95 transition-all"
                    >
                      {currentIdx < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "View Score"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Completed Screen */
            <div className="flex flex-col items-center justify-center text-center py-6 gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-burnt-orange/10 border border-burnt-orange/30 text-burnt-orange shadow-xs">
                <Award className="h-8 w-8" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                  QUIZ COMPLETED
                </span>
                <h3 className="text-3xl font-extrabold text-charcoal">
                  You Scored {score} out of {QUIZ_QUESTIONS.length}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mt-1">
                  {score === 5
                    ? "Outstanding! You have mastered the physical infrastructure that powers our digital world."
                    : score >= 3
                    ? "Great job! You clearly understand how data travels beneath oceans and through server rooms."
                    : "Good effort! Take another look at the interactive maps and charts to uncover more physical internet realities."}
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-warm-sand-border bg-ivory-light px-5 py-2.5 text-xs font-mono font-bold text-charcoal hover:border-burnt-orange hover:bg-white shadow-2xs cursor-pointer active:scale-95 transition-all"
              >
                <RotateCcw className="h-3.5 w-3.5 text-burnt-orange" />
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
