import { Header } from "@/components/common/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { PhysicalAtlasSection } from "@/components/hardware/PhysicalAtlasSection";
import { PeopleSection } from "@/components/people/PeopleSection";
import { IntroSection } from "@/components/intro/IntroSection";
import { SimpleWordsCard } from "@/components/common/SimpleWordsCard";
import { UnderseaCableMap } from "@/components/visuals/UnderseaCableMap";
import { LatencyCalculator } from "@/components/visuals/LatencyCalculator";
import { CutCableSimulator } from "@/components/visuals/CutCableSimulator";
import { InternetInNumbersSection } from "@/components/visuals/InternetInNumbersSection";
import { PhysicalInternetTimeline } from "@/components/visuals/PhysicalInternetTimeline";
import { MiniQuizSection } from "@/components/visuals/MiniQuizSection";

export default function Home() {
  return (
    <>
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#journey-section"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-burnt-orange focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-bold focus:text-white shadow-lg"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex flex-col min-h-screen">
        <HeroSection />

        {/* 1. Journey Section + Simple Words card */}
        <JourneySection />
        <SimpleWordsCard sectionKey="journey" />

        {/* Feature C: Interactive world map of undersea cables */}
        <UnderseaCableMap />

        {/* 2. Hardware Atlas Section + Simple Words card */}
        <PhysicalAtlasSection />
        <SimpleWordsCard sectionKey="hardware" />

        {/* Feature D: "How fast is a click?" latency calculator */}
        <LatencyCalculator />

        {/* Feature E: "Cut the cable" simulator */}
        <CutCableSimulator />

        {/* 3. People Section + Simple Words card */}
        <PeopleSection />
        <SimpleWordsCard sectionKey="people" />

        {/* Feature F: Charts section "The Internet in Numbers" */}
        <InternetInNumbersSection />

        {/* Feature G: Timeline "How the physical internet was built" */}
        <PhysicalInternetTimeline />

        {/* 4. Research / Pedagogical Context Section + Simple Words card */}
        <IntroSection />
        <SimpleWordsCard sectionKey="research" />

        {/* Feature H: "Test yourself" mini quiz */}
        <MiniQuizSection />
      </main>
    </>
  );
}
