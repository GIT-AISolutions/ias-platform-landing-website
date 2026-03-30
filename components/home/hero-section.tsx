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
    <section className="opencodie-page-hero">
      <div className="grid items-center gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:gap-10">
        <div className="space-y-8 opencodie-reveal">
          <StatusBadge status="info" className="shadow-[0_10px_22px_rgba(0,8,20,0.28)]">
            OpenCodie Development Platform
          </StatusBadge>

          <div className="space-y-6">
            <h1 className="opencodie-heading-display opencodie-heading-accent max-w-3xl text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
              Build, run, and deploy software from one unified control layer
            </h1>
            <p className="max-w-xl text-base md:text-lg">
              OpenCodie is a complete development environment where you can write
              code, run applications, connect databases, and deploy instantly -
              all from your browser, without setup or complex infrastructure.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {heroSignals.map((item, index) => (
              <div
                key={item.label}
                className={`opencodie-metric-card opencodie-interactive-card opencodie-reveal ${index === 1 ? "opencodie-reveal-delay-1" : ""} ${index === 2 ? "opencodie-reveal-delay-2" : ""}`}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--opencodie-text-muted)]">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-semibold tracking-tight text-[var(--opencodie-text)]">
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

          <div className="opencodie-interactive-card rounded-2xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_74%,transparent)] p-4 shadow-[inset_0_1px_0_rgba(241,248,255,0.08)]">
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              No setup. No switching tools. No unnecessary complexity.
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-[var(--opencodie-text-muted)] sm:grid-cols-3">
              {heroPillars.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="opencodie-reveal opencodie-reveal-delay-2">
          <HeroControlCenter />
        </div>
      </div>
    </section>
  );
}
