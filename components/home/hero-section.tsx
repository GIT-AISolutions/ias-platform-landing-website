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

export function HeroSection() {
  return (
    <section className="nexra-section relative pt-14 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.08),transparent_50%,rgba(2,6,23,0.32))]" />
      <div className="nexra-ambient-drift absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_16%,rgba(34,211,238,0.12)_0%,transparent_46%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.14)_0%,transparent_52%)]" />

      <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="space-y-8 nexra-reveal">
          <StatusBadge status="info">Nexra Development Platform</StatusBadge>

          <div className="space-y-6">
            <h1 className="max-w-2xl text-3xl leading-tight sm:text-4xl md:text-6xl">
              Build, run and deploy apps - all in one platform
            </h1>
            <p className="max-w-xl text-base md:text-lg">
              Nexra is a complete development environment where you can write
              code, run applications, connect databases, and deploy instantly -
              all from your browser, without setup or complex infrastructure.
            </p>
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

          <p className="text-sm font-medium text-[var(--nexra-text)]">
            No setup. No switching tools. No unnecessary complexity.
          </p>

          <ul className="grid gap-2 text-sm text-[var(--nexra-text-muted)] sm:grid-cols-3">
            {heroPillars.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--nexra-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="nexra-reveal nexra-reveal-delay-2">
          <HeroControlCenter />
        </div>
      </div>
    </section>
  );
}
