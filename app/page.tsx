import { CoreCapabilitiesSection } from "@/components/home/features/core-capabilities-section";
import { InfrastructureSection } from "@/components/home/features/infrastructure-section";
import { WorkflowSection } from "@/components/home/features/workflow-section";
import { HeroSection } from "@/components/home/hero-section";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { ProductPreviewSection } from "@/components/home/product-preview-section";
import { Panel } from "@/components/ui/panel";

const trustItems = [
  "No DevOps required",
  "Runs on your own server",
  "Works with VS Code + AI",
  "No vendor lock-in",
];

const whatYouGet = [
  "Deployments",
  "Databases",
  "Environment variables",
  "Logs & debugging",
  "Updates & redeploys",
];

const controlPillars = [
  "Your code runs on your server",
  "Your data stays yours",
  "Leave anytime without migration traps",
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="opencodie-band-dark">
        <div className="opencodie-page-section pt-0 md:pt-0">
          <Panel className="opencodie-reveal p-4 md:p-5">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] px-3 py-2.5 text-sm font-medium text-[var(--opencodie-text)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>

      <section className="opencodie-band-dark">
        <div className="opencodie-page-section">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl">Deploying apps shouldn&apos;t be this hard</h2>
            <p className="max-w-3xl text-base md:text-lg">
              Setting up infrastructure, configuring deployments, and managing
              environments slows teams down.
            </p>
            <p className="text-base font-medium text-[var(--opencodie-text)] md:text-lg">
              You just want to build and ship.
            </p>
          </div>
        </div>
      </section>

      <CoreCapabilitiesSection />
      <InfrastructureSection />
      <WorkflowSection />

      <section className="opencodie-band-dark">
        <div className="opencodie-section relative overflow-hidden pb-12 pt-2 md:pb-14">
          <div className="pointer-events-none absolute inset-x-[6%] top-1 -z-10 h-36 bg-[radial-gradient(ellipse_at_center,rgba(52,209,191,0.12)_0%,rgba(52,209,191,0)_72%)]" />
          <div className="pointer-events-none absolute -bottom-8 left-[16%] -z-10 h-28 w-[34%] bg-[radial-gradient(ellipse_at_center,rgba(255,122,24,0.14)_0%,rgba(255,122,24,0)_72%)]" />

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Panel className="opencodie-interactive-card opencodie-reveal space-y-5 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl">OpenCodie removes the DevOps layer</h2>
              <p className="text-sm md:text-base">
                Keep coding in VS Code with AI. OpenCodie handles deployment,
                infrastructure, and everything in between.
              </p>
              <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-[color-mix(in_srgb,var(--opencodie-accent)_30%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_78%,transparent)] px-3 py-2.5 text-xs uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
                You build. We run it.
              </div>
            </Panel>

            <Panel className="opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-1 flex h-full flex-col gap-5 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                Control
              </p>
              <h3 className="text-2xl md:text-3xl">You stay in control</h3>
              <p className="text-sm md:text-base">
                OpenCodie gives you a Vercel-like deployment experience while your
                application runs on infrastructure you own.
              </p>

              <div className="grid gap-2">
                {controlPillars.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl border border-[var(--opencodie-border)] px-3 py-2 text-sm ${index === 1 ? "bg-[color-mix(in_srgb,var(--opencodie-accent)_9%,var(--opencodie-bg-elevated))] text-[var(--opencodie-text)]" : "bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] text-[var(--opencodie-text-muted)]"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </section>

      <ProductPreviewSection />

      <MainCtaSection />
    </>
  );
}
