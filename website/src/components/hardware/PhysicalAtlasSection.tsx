"use client";

import { useState, useEffect } from "react";
import { HARDWARE_COMPONENTS } from "@/data/hardwareAtlas";
import { HardwareSchematicSvg } from "./HardwareSchematicSvg";
import { HardwareDetailPanel } from "./HardwareDetailPanel";
import {
  Server,
  Network,
  Cable,
  Waves,
  Cpu,
  Thermometer,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function PhysicalAtlasSection() {
  const [activeComponentId, setActiveComponentId] = useState<string>(
    HARDWARE_COMPONENTS[0].id
  );
  const [activePartId, setActivePartId] = useState<string | null>(
    HARDWARE_COMPONENTS[0].anatomicalParts[0].id
  );

  const activeComponent =
    HARDWARE_COMPONENTS.find((c) => c.id === activeComponentId) ||
    HARDWARE_COMPONENTS[0];

  const handleSelectComponent = (id: string) => {
    setActiveComponentId(id);
    const targetComp = HARDWARE_COMPONENTS.find((c) => c.id === id);
    if (targetComp && targetComp.anatomicalParts.length > 0) {
      setActivePartId(targetComp.anatomicalParts[0].id);
    } else {
      setActivePartId(null);
    }
  };

  useEffect(() => {
    const handleSelectHardware = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (
        customEvent.detail &&
        HARDWARE_COMPONENTS.some((c) => c.id === customEvent.detail)
      ) {
        handleSelectComponent(customEvent.detail);
      }
    };
    window.addEventListener("select-hardware", handleSelectHardware);
    return () =>
      window.removeEventListener("select-hardware", handleSelectHardware);
  }, []);

  const handleNextComponent = () => {
    const currentIndex = HARDWARE_COMPONENTS.findIndex(
      (c) => c.id === activeComponentId
    );
    const nextIndex = (currentIndex + 1) % HARDWARE_COMPONENTS.length;
    handleSelectComponent(HARDWARE_COMPONENTS[nextIndex].id);
  };

  const handlePrevComponent = () => {
    const currentIndex = HARDWARE_COMPONENTS.findIndex(
      (c) => c.id === activeComponentId
    );
    const prevIndex =
      (currentIndex - 1 + HARDWARE_COMPONENTS.length) %
      HARDWARE_COMPONENTS.length;
    handleSelectComponent(HARDWARE_COMPONENTS[prevIndex].id);
  };

  const getComponentIcon = (id: string) => {
    switch (id) {
      case "servers-and-blades":
        return Server;
      case "routers-and-switches":
        return Network;
      case "fibre-optic-cables":
        return Cable;
      case "undersea-cables-repeaters":
        return Waves;
      case "optical-transceivers":
        return Cpu;
      case "power-and-cooling":
        return Thermometer;
      default:
        return Layers;
    }
  };

  return (
    <section
      id="physical-internet"
      aria-label="The Physical Internet Interactive Hardware Atlas"
      className="relative z-20 py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-ivory border-b border-warm-sand-border scroll-mt-20"
    >
      {/* Anchor targets for deep links */}
      <div id="hardware-atlas" className="scroll-mt-28" />
      <div id="physical-infrastructure" className="scroll-mt-28" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-burnt-orange uppercase">
              ASSIGNED DOMAIN {"//"} THE PHYSICAL INTERNET ATLAS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            The Anvil of the Internet:{" "}
            <span className="text-burnt-orange">
              Physical Hardware Schematics
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-charcoal-muted leading-relaxed font-sans">
            The Internet is not virtual software floating in the ether. It is
            millions of tons of steel, silicon, purified glass, lasers, and copper
            conductors. Explore the six foundational hardware categories that
            physically store, switch, modulate, and cool the world{"'"}s
            telecommunications.
          </p>
        </div>

        {/* Component Selector Rail */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase text-charcoal-muted tracking-wider">
              SELECT HARDWARE CATEGORY (1 OF 6):
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevComponent}
                aria-label="Previous hardware category"
                className="p-1.5 rounded-lg border border-warm-sand-border bg-ivory-light hover:bg-warm-sand/30 text-charcoal transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextComponent}
                aria-label="Next hardware category"
                className="p-1.5 rounded-lg border border-warm-sand-border bg-ivory-light hover:bg-warm-sand/30 text-charcoal transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {HARDWARE_COMPONENTS.map((comp) => {
              const isSelected = comp.id === activeComponentId;
              const Icon = getComponentIcon(comp.id);

              return (
                <button
                  key={comp.id}
                  onClick={() => handleSelectComponent(comp.id)}
                  className={`flex flex-col items-start gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-charcoal text-ivory border-charcoal shadow-md scale-[1.02]"
                      : "bg-ivory-light text-charcoal border-warm-sand-border hover:border-burnt-orange/50 hover:bg-warm-sand/20"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-burnt-orange text-ivory"
                          : "bg-warm-sand/50 text-charcoal-muted"
                      }`}
                    >
                      0{comp.componentNumber}
                    </span>
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isSelected ? "text-burnt-orange" : "text-charcoal-muted"
                      }`}
                    />
                  </div>

                  <span className="text-[11px] sm:text-xs font-bold leading-snug line-clamp-2">
                    {comp.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Explorer Workspace (Schematic SVG + Detail Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Exploded Schematic SVG Canvas */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4">
            <HardwareSchematicSvg
              componentId={activeComponent.id}
              activePartId={activePartId}
              onSelectPart={(partId) => setActivePartId(partId)}
            />

            {/* Schematic Explanatory Legend */}
            <div className="p-4 rounded-xl border border-warm-sand-border bg-ivory-light flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-burnt-orange/15 border border-burnt-orange/30 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-burnt-orange" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal">
                    Click any element in the diagram above
                  </span>
                  <span className="text-[11px] text-charcoal-muted font-sans">
                    Parts pulse and reveal material engineering details in the panel.
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-charcoal-muted shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-burnt-orange" />
                <span>ACTIVE HOTSPOT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Engineering Inspector Panel */}
          <div className="lg:col-span-6 xl:col-span-5">
            <HardwareDetailPanel
              component={activeComponent}
              activePartId={activePartId}
              onSelectPart={(partId) => setActivePartId(partId)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
