import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { FeatureIcon } from "@/components/home/features/feature-icon";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nexra Product | Build And Deploy Modern Apps Without Complexity",
  description:
    "Nexra is a complete development platform for building, running, and deploying full-stack applications with browser-based development, database integration, and instant deployment.",
  keywords: [
    "development platform",
    "build and deploy apps",
    "full-stack applications",
    "browser-based development",
    "deploy instantly",
    "SaaS platform development",
    "coding environment online",
    "backend database deployment",
  ],
  openGraph: {
    title: "Nexra Product | One Connected Platform From Idea To Production",
    description:
      "Build, run, and deploy apps in one connected system without fragmented tooling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexra Product",
    description:
      "A complete development platform for modern app development and deployment.",
  },
};

const stackLabels = ["Unified workflow", "Zero setup", "Instant deployment"];

const capabilityCards = [
  { label: "Write code", icon: "workspace" as const },
  { label: "Run your app instantly", icon: "terminal" as const },
  { label: "Connect databases", icon: "database" as const },
  { label: "Go live in seconds", icon: "deploy" as const },
];

const problemPoints = [
  "local environments",
  "cloud platforms",
  "deployment services",
  "database providers",
];

const solutionAreas = ["Development", "Infrastructure", "Deployment"];

const workflowSteps = [
  "Create your project",
  "Start your workspace",
  "Build your application",
  "Connect your database",
  "Deploy instantly",
];

const realAppPoints = [
  "Production-ready deployments",
  "Full-stack development support",
  "Scalable infrastructure",
  "Built for SaaS platforms",
];

const audienceTags = ["Developers", "Startups", "SaaS founders", "Teams"];

export default function ProductPage() {
  return (
    <>
      <section className="nexra-page-hero">
        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr] xl:items-end">
          <div className="nexra-section-heading nexra-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
              Product
            </p>
            <h1 className="nexra-page-h1">
              Build and deploy modern apps without the complexity
            </h1>
            <p className="nexra-page-intro">
              Nexra is a complete development platform where you can write code,
              run applications, connect databases, and deploy instantly, all in one
              connected system.
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={siteConfig.portal.getStartedUrl}
                className={buttonClasses("primary", "w-full sm:w-auto")}
              >
                Start building
              </Link>
              <Link
                href="#what-nexra-is"
                className={buttonClasses("secondary", "w-full sm:w-auto")}
              >
                View product
              </Link>
            </div>
          </div>

          <Panel className="nexra-light-sweep nexra-reveal nexra-reveal-delay-1 relative overflow-hidden p-5 md:p-6">
            <div className="nexra-grid-drift absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="nexra-ambient-drift absolute -right-20 top-4 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.18)_0%,_rgba(99,102,241,0)_72%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--nexra-accent)]">
                Stack visual
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-[color-mix(in_srgb,var(--nexra-border)_78%,transparent)] bg-[color-mix(in_srgb,var(--nexra-bg-panel)_92%,transparent)] p-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--nexra-text-muted)]">
                    Traditional stack
                  </p>
                  <p className="mt-1 text-sm text-[var(--nexra-text-muted)]">
                    Separate tools. Separate costs. Fragmented workflows.
                  </p>
                </div>

                <div className="rounded-xl border border-[color-mix(in_srgb,var(--nexra-accent)_44%,var(--nexra-border))] bg-[color-mix(in_srgb,var(--nexra-accent)_11%,var(--nexra-bg-elevated))] p-3 shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_0_26px_rgba(34,211,238,0.14)]">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--nexra-accent)]">
                    Nexra platform
                  </p>
                  <p className="mt-1 text-sm text-[var(--nexra-text)]">
                    One connected environment from idea to production.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-3">
                <div className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--nexra-accent)]/65 to-transparent sm:block" />
                {stackLabels.map((label, index) => (
                  <div
                    key={label}
                    className={cn(
                      "nexra-interactive-card relative rounded-lg border border-[var(--nexra-border)] bg-[color-mix(in_srgb,var(--nexra-bg-panel)_90%,transparent)] px-3 py-2 text-center text-xs font-medium text-[var(--nexra-text-muted)]",
                      index === 1 ? "text-[var(--nexra-text)]" : "",
                    )}
                  >
                    <span className="nexra-status-pulse absolute -top-1 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--nexra-accent)] sm:block" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>
      </section>

      <section id="what-nexra-is" className="nexra-page-section">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="nexra-reveal nexra-interactive-card space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
              What Nexra is
            </p>
            <h2 className="nexra-page-h2">All-in-one development platform</h2>
            <p className="text-sm md:text-base">
              Nexra lets you build full-stack applications directly from your
              browser, with everything connected in one environment.
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {capabilityCards.map((item) => (
                <div
                  key={item.label}
                  className="nexra-interactive-card flex items-center gap-2 rounded-xl border border-[color-mix(in_srgb,var(--nexra-border)_82%,transparent)] bg-[color-mix(in_srgb,var(--nexra-bg-elevated)_72%,transparent)] px-3 py-2"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--nexra-border)] bg-[var(--nexra-bg-panel)] text-[var(--nexra-accent)]">
                    <FeatureIcon name={item.icon} className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-[var(--nexra-text-muted)]">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-[var(--nexra-text)]">
              Build, test, and deploy applications faster without managing
              infrastructure.
            </p>
          </Panel>

          <Panel className="nexra-reveal nexra-reveal-delay-1 nexra-interactive-card space-y-4 border-[color-mix(in_srgb,var(--nexra-border)_88%,transparent)] bg-[color-mix(in_srgb,var(--nexra-bg-panel)_97%,transparent)] p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-text-muted)]">
              The problem
            </p>
            <h2 className="nexra-page-h2">Modern development is fragmented</h2>
            <ul className="space-y-2 text-sm text-[var(--nexra-text-muted)]">
              {problemPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--nexra-accent)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--nexra-text)]">
              This leads to complexity, higher costs, and slower development
              cycles.
            </p>
          </Panel>
        </div>
      </section>

      <section className="nexra-page-section">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Panel className="nexra-reveal nexra-interactive-card space-y-4 border-[color-mix(in_srgb,var(--nexra-accent)_35%,var(--nexra-border))] bg-[color-mix(in_srgb,var(--nexra-accent)_8%,var(--nexra-bg-elevated))] p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
              The solution
            </p>
            <h2 className="nexra-page-h2">Nexra simplifies everything</h2>
            <p className="text-sm md:text-base">
              Nexra combines development, infrastructure, and deployment into one
              platform.
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {solutionAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[color-mix(in_srgb,var(--nexra-accent)_35%,var(--nexra-border))] bg-[color-mix(in_srgb,var(--nexra-bg-panel)_88%,transparent)] px-3 py-2 text-center text-xs uppercase tracking-[0.12em] text-[var(--nexra-text)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-[var(--nexra-text)]">
              One platform. One workflow. No unnecessary complexity.
            </p>
          </Panel>

          <Panel className="nexra-reveal nexra-reveal-delay-1 relative overflow-hidden p-5 md:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.24)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
                From idea to production
              </p>
              <h2 className="nexra-page-h2">From idea to production in minutes</h2>

              <div className="relative space-y-2">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="relative pl-8">
                    {index < workflowSteps.length - 1 ? (
                      <span className="absolute left-[0.65rem] top-6 h-6 w-px bg-[color-mix(in_srgb,var(--nexra-accent)_34%,var(--nexra-border))]" />
                    ) : null}
                    <span
                      className={cn(
                        "absolute left-0 top-0 inline-flex h-5 w-5 items-center justify-center rounded-full border bg-[var(--nexra-bg-elevated)] text-[0.65rem]",
                        index === 2
                          ? "nexra-status-pulse border-[color-mix(in_srgb,var(--nexra-accent)_48%,var(--nexra-border))] text-[var(--nexra-accent)]"
                          : "border-[var(--nexra-border)] text-[var(--nexra-accent)]",
                      )}
                    >
                      {index + 1}
                    </span>
                    <p
                      className={cn(
                        "rounded-lg border border-[var(--nexra-border)] bg-[var(--nexra-bg-panel)] px-3 py-2 text-sm text-[var(--nexra-text-muted)]",
                        index === 2
                          ? "border-[color-mix(in_srgb,var(--nexra-accent)_46%,var(--nexra-border))] text-[var(--nexra-text)]"
                          : "",
                      )}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-[var(--nexra-text)]">
                No setup. No switching tools. Just build.
              </p>
            </div>
          </Panel>
        </div>
      </section>

      <section className="nexra-page-section">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="nexra-reveal nexra-interactive-card space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
              Built for real apps
            </p>
            <h2 className="nexra-page-h2">Build real products, not just prototypes</h2>
            <ul className="space-y-2 text-sm text-[var(--nexra-text-muted)]">
              {realAppPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--nexra-accent)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--nexra-text)]">
              Nexra is designed for real applications, not just experiments.
            </p>
          </Panel>

          <Panel className="nexra-reveal nexra-reveal-delay-1 nexra-interactive-card space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
              Who it is for
            </p>
            <h2 className="nexra-page-h2">Built for modern builders</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {audienceTags.map((audience) => (
                <div
                  key={audience}
                  className={cn(
                    "rounded-xl border border-[var(--nexra-border)] px-3 py-2 text-sm",
                    audience === "SaaS founders"
                      ? "bg-[color-mix(in_srgb,var(--nexra-primary)_15%,var(--nexra-bg-elevated))] text-[var(--nexra-text)]"
                      : "bg-[color-mix(in_srgb,var(--nexra-bg-elevated)_72%,transparent)] text-[var(--nexra-text-muted)]",
                  )}
                >
                  {audience}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-[var(--nexra-text)]">
              Anyone building applications faster, smarter, and without
              unnecessary complexity.
            </p>
          </Panel>
        </div>

        <p className="mt-8 max-w-4xl text-sm text-[var(--nexra-text-muted)] nexra-reveal">
          Nexra is a modern development platform for building, running, and
          deploying applications in one environment. It combines coding,
          infrastructure, databases, and deployment into a single workflow,
          making it easier to build full-stack applications without managing
          complex systems.
        </p>
      </section>

      <MainCtaSection className="pt-8 md:pt-10" />
    </>
  );
}
