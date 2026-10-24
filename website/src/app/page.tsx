import { Header } from "@/components/common/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { IntroSection } from "@/components/intro/IntroSection";

export default function Home() {
  return (
    <>
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#hidden-network"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-cyan-accent focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-bold focus:text-background"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex flex-col min-h-screen">
        <HeroSection />
        <IntroSection />
      </main>
    </>
  );
}
