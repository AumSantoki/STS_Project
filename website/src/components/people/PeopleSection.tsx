"use client";

import { useState, useEffect } from "react";
import { PEOPLE_ROLES } from "@/data/peopleRoles";
import { RoleCardSelector } from "./RoleCardSelector";
import { RoleDossierView } from "./RoleDossierView";
import { IncidentTimelineSimulator } from "./IncidentTimelineSimulator";
import { Users, AlertTriangle, ShieldCheck } from "lucide-react";

export function PeopleSection() {
  const [activeRoleId, setActiveRoleId] = useState<string>(PEOPLE_ROLES[0].id);
  const [activeMode, setActiveMode] = useState<"roles" | "incidents">("roles");

  useEffect(() => {
    const handleSelectRole = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && PEOPLE_ROLES.some((r) => r.id === customEvent.detail)) {
        setActiveRoleId(customEvent.detail);
        setActiveMode("roles");
      }
    };
    window.addEventListener("select-role", handleSelectRole);
    return () => window.removeEventListener("select-role", handleSelectRole);
  }, []);

  const currentRole =
    PEOPLE_ROLES.find((r) => r.id === activeRoleId) || PEOPLE_ROLES[0];

  return (
    <section
      id="people-behind"
      aria-label="The People Behind the Internet"
      className="relative z-20 py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-ivory border-b border-warm-sand-border"
    >
      {/* Anchor for backward compatibility and direct jump */}
      <div id="keeping-running" className="scroll-mt-28" />
      <div id="human-workforce" className="scroll-mt-28" />

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
              ASSIGNED TOPIC {"//"} THE PEOPLE BEHIND THE INTERNET
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            The Invisible Workforce:{" "}
            <span className="text-burnt-orange">Human Hands on the Physical Machine</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans">
            The Internet is often imagined as an automated, celestial cloud. In reality, its survival relies on thousands of skilled professionals: technicians walking loud cold-aisle server bays, cable ship sailors battling gales on the Pacific, and NOC engineers rerouting terabits of global traffic on night shifts.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl border border-warm-sand-border bg-ivory-light self-start shadow-2xs">
          <button
            onClick={() => setActiveMode("roles")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === "roles"
                ? "bg-burnt-orange text-white shadow-xs"
                : "text-charcoal hover:bg-warm-sand/40"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>EXPLORE THE 7 SPECIALIZED ROLES</span>
          </button>

          <button
            onClick={() => setActiveMode("incidents")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeMode === "incidents"
                ? "bg-burnt-orange text-white shadow-xs"
                : "text-charcoal hover:bg-warm-sand/40"
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            <span>INCIDENT SIMULATOR: HOW TEAMS COORDINATE</span>
          </button>
        </div>

        {/* Content Mode 1: Role Exploration */}
        {activeMode === "roles" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Horizontal Role Selector */}
            <RoleCardSelector
              roles={PEOPLE_ROLES}
              activeRoleId={activeRoleId}
              onSelectRole={setActiveRoleId}
            />

            {/* Deep-Dive Role Dossier View */}
            <RoleDossierView role={currentRole} />
          </div>
        )}

        {/* Content Mode 2: Incident Response Simulator */}
        {activeMode === "incidents" && (
          <div className="animate-fadeIn">
            <IncidentTimelineSimulator />
          </div>
        )}

        {/* Educational STS Footnote */}
        <div className="flex items-start gap-3 rounded-xl border border-warm-sand-border bg-ivory-light p-4 text-xs font-sans text-charcoal-muted">
          <ShieldCheck className="h-4 w-4 text-burnt-orange shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <strong className="text-charcoal font-semibold">
              STS Pedagogical Finding on Infrastructure Labor:
            </strong>
            <span>
              Modern digital convenience obscures infrastructure labor. When services work without friction, society forgets the technicians operating in hazardous physical spaces. Recognizing the human work behind the screen is essential for understanding technological vulnerability and labor rights in the digital age.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
