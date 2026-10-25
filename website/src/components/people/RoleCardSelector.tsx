"use client";

import { ProfessionalRole } from "@/types/people";
import { Server, Wrench, Activity, Cable, Shield, Database, Cpu } from "lucide-react";

interface RoleCardSelectorProps {
  roles: ProfessionalRole[];
  activeRoleId: string;
  onSelectRole: (roleId: string) => void;
}

export function RoleCardSelector({
  roles,
  activeRoleId,
  onSelectRole,
}: RoleCardSelectorProps) {
  const getRoleIcon = (id: string) => {
    switch (id) {
      case "data-centre-technician":
        return Server;
      case "critical-facilities-engineer":
        return Wrench;
      case "network-operations-engineer":
        return Activity;
      case "fiber-optic-technician":
        return Cable;
      case "cybersecurity-specialist":
        return Shield;
      case "database-administrator":
        return Database;
      case "site-reliability-engineer":
        return Cpu;
      default:
        return Server;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Selectable professional roles"
      className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth"
    >
      {roles.map((role) => {
        const isSelected = role.id === activeRoleId;
        const Icon = getRoleIcon(role.id);

        return (
          <button
            key={role.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectRole(role.id)}
            className={`group shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs font-mono font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange cursor-pointer ${
              isSelected
                ? "bg-charcoal text-white border-charcoal shadow-sm scale-102"
                : "bg-ivory border-warm-sand-border text-charcoal hover:border-burnt-orange/50 hover:bg-white"
            }`}
          >
            <div
              className={`p-1.5 rounded-lg transition-colors ${
                isSelected
                  ? "bg-burnt-orange text-white"
                  : "bg-warm-sand/40 text-charcoal group-hover:bg-burnt-orange/20 group-hover:text-burnt-orange"
              }`}
            >
              <Icon className="h-4 w-4" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-burnt-orange uppercase">
                0{role.roleNumber}
              </span>
              <span className="font-sans font-semibold text-xs sm:text-sm whitespace-nowrap">
                {role.shortLabel}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
