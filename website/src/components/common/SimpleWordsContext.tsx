"use client";

import React, { createContext, useContext, useState, useSyncExternalStore } from "react";

interface SimpleWordsContextType {
  isSimpleWords: boolean;
  toggleSimpleWords: () => void;
  setSimpleWords: (enabled: boolean) => void;
}

const SimpleWordsContext = createContext<SimpleWordsContextType>({
  isSimpleWords: false,
  toggleSimpleWords: () => {},
  setSimpleWords: () => {},
});

const STORAGE_KEY = "sts_simple_words_mode";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function SimpleWordsProvider({ children }: { children: React.ReactNode }) {
  const storeState = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [localState, setLocalState] = useState<boolean | null>(null);

  const isSimpleWords = localState !== null ? localState : storeState;

  const toggleSimpleWords = () => {
    const next = !isSimpleWords;
    setLocalState(next);
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Ignore
    }
  };

  const setSimpleWords = (enabled: boolean) => {
    setLocalState(enabled);
    try {
      localStorage.setItem(STORAGE_KEY, String(enabled));
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Ignore
    }
  };

  return (
    <SimpleWordsContext.Provider
      value={{
        isSimpleWords,
        toggleSimpleWords,
        setSimpleWords,
      }}
    >
      {children}
    </SimpleWordsContext.Provider>
  );
}

export function useSimpleWords() {
  return useContext(SimpleWordsContext);
}
