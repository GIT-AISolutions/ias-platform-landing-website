import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { FeatureIcon } from "@/components/home/features/feature-icon";
import { BringYourAiPanel } from "@/components/shared/bring-your-ai-panel";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "OpenCodie Product | From Local Development To Production In Minutes",
  description:
    "Keep coding locally with AI, connect your project, and deploy instantly with OpenCodie. Your app runs on your own server while OpenCodie handles operations.",
  keywords: [
    "OpenCodie product",
    "local development to production",
    "deploy apps on your own server",
    "AI development workflow",
    "no devops platform",
  ],
  openGraph: {
    title: "OpenCodie Product | Local Workflow, Instant Deployment, Full Ownership",
    description:
      "From local VS Code development to production in minutes without DevOps complexity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCodie Product",
    description:
      "Develop locally, deploy instantly, and keep full infrastructure control.",
  },
};

const flowSteps = [
  {
    step: "01",
    title: "Develop locally",
    description: "Write code in VS Code and terminal using your preferred AI tools.",
    icon: "workspace" as const,
  },
  {
    step: "02",
    title: "Connect project",
    description: "Link your repository or project to OpenCodie in a simple setup flow.",
    icon: "flow" as const,
  },
  {
    step: "03",
    title: "Deploy",
    description: "OpenCodie builds and runs your app with logs and runtime visibility.",
    icon: "deploy" as const,
  },
] as const;

const operationalAreas = [
  {
    label: "Deployments",
    detail: "Fast release flow without pipeline overhead.",
    icon: "deploy" as const,
  },
  {
    label: "Infrastructure",
    detail: "Operational layer handled by OpenCodie.",
    icon: "platform" as const,
  },
  {
    label: "Logs",
    detail: "Clear deployment and runtime visibility.",
    icon: "preview" as const,
  },
  {
    label: "Databases",
    detail: "Quick provisioning and connection workflow.",
    icon: "database" as const,
  },
  {
    label: "Environment setup",
    detail: "Safer configuration and secret handling.",
    icon: "terminal" as const,
  },
  {
    label: "Updates",
    detail: "Safe redeploys as your product grows.",
    icon: "ai" as const,
  },
] as const;

const whyTeamsSwitch = [
  "Keep your local workflow in VS Code and terminal",
  "Use your own AI models and API keys",
  "No DevOps setup required for everyday releases",
  "Your app runs on your own server with full ownership",
] as const;

const stackLabels = [
  "Local development",
  "OpenCodie operations",
  "Your server",
] as const;

export default function ProductPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr] xl:items-end">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Product
            </p>
            <h1 className="opencodie-page-h1">
              From local development to production in minutes
            </h1>
            <p className="opencodie-page-intro">
              Keep coding locally with AI. OpenCodie handles deployment,
              infrastructure, logs, and runtime operations so you can ship without
              DevOps overhead.
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={siteConfig.portal.getStartedUrl}
                className={buttonClasses("primary", "w-full sm:w-auto")}
              >
                Get started
              </Link>
              <Link
                href="/pricing"
                className={buttonClasses("secondary", "w-full sm:w-auto")}
              >
                View pricing
              </Link>
            </div>
          </div>

          <Panel className="opencodie-light-sweep opencodie-reveal opencodie-reveal-delay-1 relative overflow-hidden p-5 md:p-6">
            <div className="opencodie-grid-drift absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="opencodie-ambient-drift absolute -right-20 top-4 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.18)_0%,_rgba(99,102,241,0)_72%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
                Product flow
              </p>

              <div className="grid gap-2 sm:grid-cols-3">
                {stackLabels.map((label, index) => (
                  <div
                    key={label}
                    className={cn(
                      "rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] p-3",
                      index === 1
                        ? "border-[color-mix(in_srgb,var(--opencodie-accent)_42%,var(--opencodie-border))]"
                        : "",
                    )}
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
                      Layer {index + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--opencodie-text)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[var(--opencodie-text-muted)]">
                Vercel-like deployment speed with infrastructure ownership.
              </p>
            </div>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section-compact">
        <BringYourAiPanel />
      </section>

      <section id="how-it-works" className="opencodie-page-section">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="opencodie-reveal opencodie-light-sweep space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              How it works
            </p>
            <h2 className="opencodie-page-h2">Three steps from code to production</h2>

            <div className="space-y-3">
              {flowSteps.map((step, index) => (
                <div key={step.step} className="relative pl-9">
                  {index < flowSteps.length - 1 ? (
                    <span className="absolute left-[0.8rem] top-7 h-8 w-px bg-[color-mix(in_srgb,var(--opencodie-accent)_34%,var(--opencodie-border))]" />
                  ) : null}
                  <span className="absolute left-0 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] text-[0.65rem] text-[var(--opencodie-accent)]">
                    {step.step}
                  </span>
                  <div className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_75%,transparent)] p-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-panel)] text-[var(--opencodie-accent)]">
                        <FeatureIcon name={step.icon} className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="text-lg">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-[var(--opencodie-text-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 opencodie-interactive-card space-y-4 border-[color-mix(in_srgb,var(--opencodie-accent)_34%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-accent)_8%,var(--opencodie-bg-elevated))] p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Control
            </p>
            <h2 className="opencodie-page-h2">You stay in control</h2>
            <p className="text-sm md:text-base">
              Your app runs on your own server - you stay in control.
            </p>
            <div className="grid gap-2">
              {[
                "Your code runs on infrastructure you own",
                "Your data stays yours",
                "Leave anytime without migration traps",
              ].map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-xl border px-3 py-2 text-sm",
                    index === 1
                      ? "border-[color-mix(in_srgb,var(--opencodie-accent)_40%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-accent)_10%,var(--opencodie-bg-panel))] text-[var(--opencodie-text)]"
                      : "border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] text-[var(--opencodie-text-muted)]",
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              Deploy like a managed platform. Own everything like self-hosted.
            </p>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="opencodie-reveal opencodie-interactive-card space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              What OpenCodie handles
            </p>
            <h2 className="opencodie-page-h2">Operational work handled in one place</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {operationalAreas.map((area) => (
                <div
                  key={area.label}
                  className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-panel)] text-[var(--opencodie-accent)]">
                      <FeatureIcon name={area.icon} className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm font-medium text-[var(--opencodie-text)]">{area.label}</p>
                  </div>
                  <p className="mt-2 text-sm text-[var(--opencodie-text-muted)]">{area.detail}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 opencodie-interactive-card space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Why teams choose OpenCodie
            </p>
            <h2 className="opencodie-page-h2">Simple workflow for real delivery</h2>
            <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
              {whyTeamsSwitch.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              OpenCodie removes the DevOps layer without changing how developers
              prefer to build.
            </p>
          </Panel>
        </div>
      </section>

      <section className="opencodie-band-dark">
        <div className="opencodie-section">
          <Panel className="opencodie-light-sweep opencodie-reveal relative overflow-hidden p-0">
            <div className="opencodie-grid-drift absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.28)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="relative grid gap-4 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                  Platform summary
                </p>
                <h2 className="opencodie-page-h2">Local workflow in. Production app out.</h2>
                <p className="max-w-3xl text-sm text-[var(--opencodie-text-muted)] md:text-base">
                  OpenCodie is a developer platform for local development with AI,
                  instant deployment, and infrastructure ownership. You code with your
                  tools, OpenCodie runs operations, and your app stays on your server.
                </p>
              </div>

              <div className="grid gap-2 self-end sm:grid-cols-2 md:grid-cols-1">
                {[
                  "Develop locally",
                  "Connect project",
                  "Deploy instantly",
                  "Own your infrastructure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_76%,transparent)] px-3 py-2 text-sm text-[var(--opencodie-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
