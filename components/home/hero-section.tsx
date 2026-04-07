import Link from "next/link";
import { HeroControlCenter } from "@/components/home/hero-control-center";
import { buttonClasses } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { siteConfig } from "@/lib/site-config";

const heroSignals = [
  { label: "Deploy speed", value: "<2m to prod" },
  { label: "AI workflow", value: "Codex + Gemini + Claude" },
  { label: "Ownership", value: "100% your infra" },
] as const;

export function HeroSection() {
  return (
    <section className="opencodie-page-hero">
      <div className="grid items-start gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8 min-[1400px]:gap-10">
        <div className="order-1 mx-auto w-full max-w-[58rem] space-y-2 opencodie-reveal opencodie-reveal-delay-2 xl:order-2 xl:max-w-none">
          <HeroControlCenter />
          <div className="hidden gap-[22px] sm:grid-cols-3 xl:mt-[34px] xl:grid">
            {heroSignals.map((item, index) => (
              <div
                key={`hero-signal-desktop-${item.label}`}
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
        </div>

        <div className="order-2 mx-auto w-full max-w-3xl space-y-7 text-center opencodie-reveal xl:order-1 xl:mx-0 xl:max-w-none xl:space-y-8 xl:text-left">
          <div className="flex justify-center xl:justify-start">
            <StatusBadge status="info" className="shadow-[0_10px_22px_rgba(0,8,20,0.28)]">
              OpenCodie Development Platform
            </StatusBadge>
          </div>

          <div className="space-y-5 min-[1400px]:space-y-6">
            <h1 className="opencodie-heading-display opencodie-heading-accent mx-auto max-w-3xl text-[clamp(1.75rem,4.4vw,3rem)] xl:mx-0 min-[1400px]:text-[4.25rem]">
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

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center xl:justify-start">
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

          <div className="grid gap-2 sm:grid-cols-3 xl:hidden">
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
        </div>
      </div>
    </section>
  );
}
