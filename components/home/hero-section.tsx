import Link from "next/link";
import { HeroControlCenter } from "@/components/home/hero-control-center";
import { buttonClasses } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { siteConfig } from "@/lib/site-config";

const heroPillars = [
  "No DevOps required",
  "Runs on your own server",
  "No vendor lock-in",
];

const heroSignals = [
  { label: "Deploy speed", value: "<2m to prod" },
  { label: "AI workflow", value: "Codex + Gemini + Claude" },
  { label: "Ownership", value: "100% your infra" },
] as const;

export function HeroSection() {
  return (
    <section className="opencodie-page-hero">
      <div className="grid items-center gap-6 min-[1400px]:grid-cols-[1.02fr_0.98fr] min-[1400px]:gap-10">
        <div className="order-1 mx-auto w-full max-w-[58rem] opencodie-reveal opencodie-reveal-delay-2 min-[1400px]:order-2 min-[1400px]:max-w-none">
          <HeroControlCenter />
        </div>

        <div className="order-2 mx-auto w-full max-w-3xl space-y-7 text-center opencodie-reveal min-[1400px]:order-1 min-[1400px]:mx-0 min-[1400px]:max-w-none min-[1400px]:space-y-8 min-[1400px]:text-left">
          <div className="flex justify-center min-[1400px]:justify-start">
            <StatusBadge status="info" className="shadow-[0_10px_22px_rgba(0,8,20,0.28)]">
              OpenCodie Development Platform
            </StatusBadge>
          </div>

          <div className="space-y-5 min-[1400px]:space-y-6">
            <h1 className="opencodie-heading-display opencodie-heading-accent mx-auto max-w-3xl text-[clamp(2rem,5.3vw,3.6rem)] min-[1400px]:mx-0 min-[1400px]:text-7xl">
              Deploy apps like Vercel.
              <br />
              Own everything like Coolify.
            </h1>
            <p className="max-w-xl text-base md:text-lg">
              Keep coding in VS Code with AI. OpenCodie handles deployment,
              infrastructure, and everything in between.
            </p>
            <p className="text-base font-medium text-[var(--opencodie-text)] md:text-lg">
              You build. We run it.
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

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center min-[1400px]:justify-start">
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "w-full sm:w-auto")}
            >
              Get started
            </Link>
            <Link
              href="/product"
              className={buttonClasses("secondary", "w-full sm:w-auto")}
            >
              View product
            </Link>
          </div>

          <div className="opencodie-interactive-card rounded-2xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_74%,transparent)] p-4 shadow-[inset_0_1px_0_rgba(241,248,255,0.08)]">
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              Local development + AI + instant deployment + full ownership.
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
      </div>
    </section>
  );
}
