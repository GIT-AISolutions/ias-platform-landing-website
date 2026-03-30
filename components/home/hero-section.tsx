import Link from "next/link";
import { HeroControlCenter } from "@/components/home/hero-control-center";
import { buttonClasses } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { siteConfig } from "@/lib/site-config";

const heroPillars = [
  "No setup.",
  "No switching tools.",
  "No unnecessary complexity.",
];

const heroSignals = [
  { label: "Workspace boot", value: "14s" },
  { label: "Deploy regions", value: "12" },
  { label: "Avg. release loop", value: "<2m" },
] as const;

export function HeroSection() {
  return (
    <section className="nexra-section relative isolate overflow-hidden pt-14 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(8,16,30,0.18),transparent_52%,rgba(3,8,16,0.62))]" />
      <div className="nexra-ambient-drift absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(52,209,191,0.18)_0%,transparent_42%),radial-gradient(circle_at_84%_8%,rgba(255,122,24,0.16)_0%,transparent_44%)]" />
      <div className="pointer-events-none absolute -right-20 top-8 -z-10 h-56 w-56 rounded-full border border-[color-mix(in_srgb,var(--nexra-accent)_40%,var(--nexra-border))] bg-[radial-gradient(circle,rgba(52,209,191,0.18)_0%,rgba(52,209,191,0)_72%)] blur-2xl" />

      <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="space-y-8 nexra-reveal">
          <StatusBadge status="info">Nexra Development Platform</StatusBadge>

          <div className="space-y-6">
            <h1 className="nexra-heading-display max-w-3xl text-4xl sm:text-5xl md:text-7xl">
              Build, run, and deploy software from one unified control layer
            </h1>
            <p className="max-w-xl text-base md:text-lg">
              Nexra is a complete development environment where you can write
              code, run applications, connect databases, and deploy instantly -
              all from your browser, without setup or complex infrastructure.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {heroSignals.map((item, index) => (
              <div
                key={item.label}
                className={`nexra-metric-card nexra-reveal ${index === 1 ? "nexra-reveal-delay-1" : ""} ${index === 2 ? "nexra-reveal-delay-2" : ""}`}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--nexra-text-muted)]">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-semibold tracking-tight text-[var(--nexra-text)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "w-full sm:w-auto")}
            >
              Start building
            </Link>
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("secondary", "w-full sm:w-auto")}
            >
              Launch your first app
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--nexra-border)] bg-[color-mix(in_srgb,var(--nexra-bg-elevated)_74%,transparent)] p-4">
            <p className="text-sm font-medium text-[var(--nexra-text)]">
              No setup. No switching tools. No unnecessary complexity.
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-[var(--nexra-text-muted)] sm:grid-cols-3">
              {heroPillars.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--nexra-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nexra-reveal nexra-reveal-delay-2">
          <HeroControlCenter />
        </div>
      </div>
    </section>
  );
}
