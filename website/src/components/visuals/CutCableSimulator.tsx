"use client";

import { useState } from "react";
import { NETWORK_NODES, INITIAL_LINKS } from "@/data/cutCableData";
import { Scissors, RotateCcw, AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "motion/react";

export function CutCableSimulator() {
  const [cutLinks, setCutLinks] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  const toggleCut = (linkId: string) => {
    setCutLinks((prev) => ({
      ...prev,
      [linkId]: !prev[linkId],
    }));
  };

  const handleReset = () => {
    setCutLinks({});
  };

  // Graph traversal to find active route from London (lon) to Mumbai (bom)
  const isLinkCut = (id: string) => !!cutLinks[id];

  // Adjacency list
  const adj: Record<string, { neighbor: string; linkId: string }[]> = {};
  NETWORK_NODES.forEach((n) => {
    adj[n.id] = [];
  });

  INITIAL_LINKS.forEach((l) => {
    if (!isLinkCut(l.id)) {
      adj[l.from].push({ neighbor: l.to, linkId: l.id });
      adj[l.to].push({ neighbor: l.from, linkId: l.id });
    }
  });

  // Breadth-First Search to find shortest path
  const queue: { current: string; path: string[]; usedLinks: string[] }[] = [
    { current: "lon", path: ["lon"], usedLinks: [] },
  ];
  const visited = new Set<string>(["lon"]);
  let foundPath: { path: string[]; usedLinks: string[] } | null = null;

  while (queue.length > 0) {
    const { current, path, usedLinks } = queue.shift()!;
    if (current === "bom") {
      foundPath = { path, usedLinks };
      break;
    }
    for (const edge of adj[current]) {
      if (!visited.has(edge.neighbor)) {
        visited.add(edge.neighbor);
        queue.push({
          current: edge.neighbor,
          path: [...path, edge.neighbor],
          usedLinks: [...usedLinks, edge.linkId],
        });
      }
    }
  }

  const isConnected = !!foundPath;
  const activeTrafficLinks = new Set(foundPath ? foundPath.usedLinks : []);
  const cutCount = Object.values(cutLinks).filter(Boolean).length;

  return (
    <section
      id="cut-cable-section"
      aria-label="Cut the Cable Network Resilience Simulator"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-ivory border-t border-warm-sand-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-burnt-orange" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                {"// FAULT RESILIENCE SIMULATOR"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal">
              &ldquo;Cut the Cable&rdquo; Simulator
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">
              Undersea cables break on average 150 to 200 times every year. Click any cable below to cut it
              with virtual shears, and watch how BGP (Border Gateway Protocol) instantly reroutes traffic.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-warm-sand-border bg-ivory-light px-3.5 py-2 text-xs font-mono font-bold text-charcoal hover:border-burnt-orange hover:bg-white shadow-2xs cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="h-3.5 w-3.5 text-burnt-orange" />
            Repair All Cables
          </button>
        </div>

        {/* Diagram & Control Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive Network Diagram (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-warm-sand-border bg-[#131713] p-4 sm:p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Top Bar status */}
            <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3 text-warm-sand">
              <span className="flex items-center gap-2">
                <Scissors className="h-3.5 w-3.5 text-burnt-orange" />
                CLICK ANY CABLE LINE TO CUT OR REPAIR IT
              </span>
              <span className="text-burnt-orange font-bold">
                {cutCount === 0 ? "All lines healthy" : `${cutCount} broken cable(s)`}
              </span>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative w-full aspect-[7/3.8] my-4">
              <svg
                viewBox="0 0 700 320"
                className="w-full h-full select-none"
                role="img"
                aria-label="Interactive mesh network diagram between London and Mumbai"
              >
                <defs>
                  <filter id="cut-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Cable Links */}
                {INITIAL_LINKS.map((link) => {
                  const cut = isLinkCut(link.id);
                  const active = activeTrafficLinks.has(link.id);

                  return (
                    <g
                      key={link.id}
                      onClick={() => toggleCut(link.id)}
                      className="cursor-pointer group"
                    >
                      {/* Generous hit test path */}
                      <path
                        d={link.pathD}
                        fill="none"
                        stroke="transparent"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />

                      {/* Base Cable Line */}
                      <path
                        d={link.pathD}
                        fill="none"
                        stroke={
                          cut
                            ? "#8E9B80"
                            : active
                            ? "#C47745"
                            : "rgba(215, 185, 109, 0.4)"
                        }
                        strokeWidth={active ? "4.5" : cut ? "2" : "2.5"}
                        strokeDasharray={cut ? "4,6" : active ? "none" : "6,4"}
                        strokeOpacity={cut ? "0.35" : "1"}
                        filter={active ? "url(#cut-glow)" : "none"}
                        className="transition-all duration-300"
                      />

                      {/* Animated Flow Packets along Active Traffic Line */}
                      {active && !cut && !shouldReduceMotion && (
                        <path
                          d={link.pathD}
                          fill="none"
                          stroke="#FAF7F2"
                          strokeWidth="2"
                          strokeDasharray="8,16"
                          className="animate-[dash_1.5s_linear_infinite]"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="48;0"
                            dur="1.2s"
                            repeatCount="indefinite"
                          />
                        </path>
                      )}

                      {/* Cable Cut Marker */}
                      {cut && (
                        <circle
                          cx={
                            (NETWORK_NODES.find((n) => n.id === link.from)!.x +
                              NETWORK_NODES.find((n) => n.id === link.to)!.x) /
                            2
                          }
                          cy={
                            (NETWORK_NODES.find((n) => n.id === link.from)!.y +
                              NETWORK_NODES.find((n) => n.id === link.to)!.y) /
                            2
                          }
                          r="9"
                          fill="#C47745"
                          stroke="#FAF7F2"
                          strokeWidth="1.5"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Network Nodes */}
                {NETWORK_NODES.map((node) => {
                  const isOrigin = node.id === "lon";
                  const isDestination = node.id === "bom";
                  const inActivePath = foundPath?.path.includes(node.id);

                  return (
                    <g key={node.id}>
                      {/* Node Circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isOrigin || isDestination ? 14 : 10}
                        fill={
                          isOrigin || isDestination
                            ? "#C47745"
                            : inActivePath
                            ? "#D7B96D"
                            : "#252720"
                        }
                        stroke="#FAF7F2"
                        strokeWidth="2"
                        filter={inActivePath ? "url(#cut-glow)" : "none"}
                      />

                      {/* Node Label */}
                      <text
                        x={node.x}
                        y={node.y + (node.y > 150 ? 25 : -18)}
                        textAnchor="middle"
                        fill="#FAF7F2"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[11px] font-mono text-warm-sand">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-4 bg-burnt-orange rounded-full inline-block" />
                  Active Live Route
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-4 border-b-2 border-dashed border-sage-green inline-block" />
                  Severed Link
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-4 bg-muted-gold/40 rounded-full inline-block" />
                  Standby Redundant Cable
                </span>
              </div>
            </div>
          </div>

          {/* Status & Explanation Dossier (4 Cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-warm-sand-border bg-ivory-light p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase text-charcoal">
                Connection Status (London to Mumbai)
              </span>

              {/* Status Banner */}
              <div
                className={`rounded-xl p-4 border flex items-start gap-3 ${
                  isConnected
                    ? "bg-sage-green/15 border-sage-green text-charcoal"
                    : "bg-burnt-orange/15 border-burnt-orange text-charcoal"
                }`}
              >
                {isConnected ? (
                  <CheckCircle2 className="h-5 w-5 text-sage-green shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-burnt-orange shrink-0 mt-0.5" />
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-mono font-bold uppercase">
                    {isConnected ? "NETWORK OPERATIONAL" : "TOTAL BLACKOUT"}
                  </span>
                  <span className="text-xs font-sans leading-relaxed">
                    {isConnected
                      ? `Packets successfully rerouted across ${foundPath?.path.length} hops.`
                      : "All redundant subsea and overland paths severed! No packet route possible."}
                  </span>
                </div>
              </div>

              {/* Active Route Hops */}
              {isConnected && (
                <div className="flex flex-col gap-1.5 rounded-xl border border-warm-sand-border bg-white p-3">
                  <span className="text-[10px] font-mono font-bold uppercase text-charcoal-muted">
                    BGP Dynamic Route:
                  </span>
                  <div className="text-xs font-mono font-bold text-burnt-orange flex items-center gap-1 flex-wrap">
                    {foundPath?.path.map((nodeId, idx) => (
                      <span key={nodeId} className="flex items-center gap-1">
                        {NETWORK_NODES.find((n) => n.id === nodeId)?.name.split(" ")[0]}
                        {idx < (foundPath?.path.length || 0) - 1 && (
                          <span className="text-charcoal-muted font-normal">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Redundancy Note & Source */}
            <div className="flex flex-col gap-2 pt-4 border-t border-warm-sand-border/80">
              <span className="text-xs font-mono font-bold text-charcoal flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-burnt-orange" />
                Why Redundancy Matters
              </span>
              <p className="text-xs font-sans text-charcoal-muted leading-relaxed">
                Submarine cable operators purchase capacity on multiple geographically separated cables.
                When a ship anchor drags across one line, automated BGP routing switches international traffic
                within milliseconds so users only experience slight latency spikes rather than total outages.
              </p>
              <span className="text-[10px] font-mono text-charcoal-muted/90 pt-1">
                Source: International Cable Protection Committee (ICPC) Fault Statistics 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
