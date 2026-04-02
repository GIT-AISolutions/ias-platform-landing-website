import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { FeatureIcon } from "@/components/home/features/feature-icon";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "OpenCodie Features | Everything You Need To Run Apps Without DevOps",
  description:
    "Explore OpenCodie features for local development with AI, instant deployment, logs, databases, secrets, and safe updates on your own server.",
  keywords: [
    "OpenCodie features",
    "deploy without devops",
    "local development with AI",
    "VS Code deployment platform",
    "deployments logs databases",
  ],
  openGraph: {
    title: "OpenCodie Features | Run Apps Without DevOps",
    description:
      "Deployments, AI workflow, secrets, databases, logs, and updates in one workflow while your app runs on infrastructure you own.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCodie Features",
    description:
      "Everything you need to run real apps without DevOps complexity.",
  },
};

type FeatureSurface = {
  label: string;
  icon: "workspace" | "preview" | "ai" | "database" | "deploy" | "terminal";
  title: string;
  explanation: string;
  points: string[];
  benefit: string;
  tone: "indigo" | "cyan" | "green" | "default";
  bars: number[];
};

const featureSurfaces: FeatureSurface[] = [
  {
    label: "Deployments",
    icon: "deploy",
    title: "Fast deployments without pipeline setup",
    explanation:
      "Push your code and deploy in minutes. OpenCodie handles build and runtime steps so you do not have to manage delivery infrastructure.",
    points: [
      "Simple deploy flow from your local workflow",
      "Production rollout with clear status",
      "No CI/CD setup overhead",
      "Built for real project shipping",
    ],
    benefit: "Ship faster without adding DevOps tasks to every release.",
    tone: "green",
    bars: [84, 96, 72, 90],
  },
  {
    label: "AI workflow",
    icon: "ai",
    title: "Works with Codex, Gemini, Claude, and your workflow",
    explanation:
      "Keep your own AI setup while coding in VS Code and terminal. OpenCodie fits the workflow you already use instead of replacing it.",
    points: [
      "Bring your own AI API keys or local models",
      "Keep your preferred CLI tools",
      "No duplicate AI subscription requirements",
      "Built for modern AI-assisted development",
    ],
    benefit: "Move faster with AI while keeping full tooling freedom.",
    tone: "cyan",
    bars: [80, 94, 68, 88],
  },
  {
    label: "Secrets",
    icon: "workspace",
    title: "Secure environment and secret management",
    explanation:
      "Manage environment variables per app and environment in one place. Keep production settings consistent without manual server edits.",
    points: [
      "Centralized env management",
      "Safer production configuration",
      "Clear environment separation",
      "Less manual risk during deploys",
    ],
    benefit: "Protect sensitive config without slowing the team.",
    tone: "indigo",
    bars: [74, 89, 63, 85],
  },
  {
    label: "Databases",
    icon: "database",
    title: "Provision databases quickly for real workloads",
    explanation:
      "Set up and connect databases as part of your deployment workflow. Keep backend services aligned with each release.",
    points: [
      "Database provisioning in minutes",
      "Easy app connection and updates",
      "One workflow for app and data layer",
      "Fewer moving parts across tools",
    ],
    benefit: "Get backend-ready faster with less setup friction.",
    tone: "default",
    bars: [70, 86, 61, 79],
  },
  {
    label: "Logs",
    icon: "preview",
    title: "Debug with clear deployment and runtime visibility",
    explanation:
      "See logs and deployment output in one place so issues are easier to trace and fixes move to production faster.",
    points: [
      "Centralized log access",
      "Deployment and runtime context together",
      "Faster issue triage",
      "Clearer path from bug to fix",
    ],
    benefit: "Spend less time searching and more time resolving.",
    tone: "default",
    bars: [72, 88, 64, 82],
  },
  {
    label: "Updates",
    icon: "terminal",
    title: "Safe updates and redeploys as your app evolves",
    explanation:
      "Roll out fixes and new features with a predictable release flow. Keep production stable while shipping continuously.",
    points: [
      "Reliable redeploy workflow",
      "Clear release progress",
      "Less risk during production updates",
      "Designed for ongoing iteration",
    ],
    benefit: "Ship often without unstable deployment operations.",
    tone: "green",
    bars: [78, 92, 66, 87],
  },
];

const connectedFlow = [
  "Code locally",
  "Connect project",
  "Deploy",
  "Monitor",
  "Redeploy",
] as const;

const infrastructureCapabilities = [
  "OpenCodie manages deployment operations",
  "Environment setup stays consistent",
  "Logs and runtime state stay visible",
  "Your app runs on infrastructure you own",
] as const;

function toneClasses(tone: FeatureSurface["tone"]) {
  if (tone === "indigo") {
    return {
      label: "text-[var(--opencodie-primary)]",
      icon: "text-[var(--opencodie-primary)] border-[color-mix(in_srgb,var(--opencodie-primary)_38%,var(--opencodie-border))]",
      bullet: "bg-[var(--opencodie-primary)]",
      activeBar: "bg-[color-mix(in_srgb,var(--opencodie-primary)_62%,var(--opencodie-accent))]",
      idleBar: "bg-[color-mix(in_srgb,var(--opencodie-primary)_28%,var(--opencodie-bg-elevated))]",
      panel: "border-[color-mix(in_srgb,var(--opencodie-primary)_28%,var(--opencodie-border))]",
    };
  }

  if (tone === "cyan") {
    return {
      label: "text-[var(--opencodie-accent)]",
      icon: "text-[var(--opencodie-accent)] border-[color-mix(in_srgb,var(--opencodie-accent)_38%,var(--opencodie-border))]",
      bullet: "bg-[var(--opencodie-accent)]",
      activeBar: "bg-[color-mix(in_srgb,var(--opencodie-accent)_58%,var(--opencodie-primary))]",
      idleBar: "bg-[color-mix(in_srgb,var(--opencodie-accent)_28%,var(--opencodie-bg-elevated))]",
      panel: "border-[color-mix(in_srgb,var(--opencodie-accent)_28%,var(--opencodie-border))]",
    };
  }

  if (tone === "green") {
    return {
      label: "text-[var(--opencodie-success)]",
      icon: "text-[var(--opencodie-success)] border-[color-mix(in_srgb,var(--opencodie-success)_38%,var(--opencodie-border))]",
      bullet: "bg-[var(--opencodie-success)]",
      activeBar: "bg-[color-mix(in_srgb,var(--opencodie-success)_56%,var(--opencodie-accent))]",
      idleBar: "bg-[color-mix(in_srgb,var(--opencodie-success)_24%,var(--opencodie-bg-elevated))]",
      panel: "border-[color-mix(in_srgb,var(--opencodie-success)_30%,var(--opencodie-border))]",
    };
  }

  return {
    label: "text-[var(--opencodie-accent)]",
    icon: "text-[var(--opencodie-accent)] border-[var(--opencodie-border)]",
    bullet: "bg-[var(--opencodie-accent)]",
    activeBar: "bg-[color-mix(in_srgb,var(--opencodie-accent)_34%,var(--opencodie-primary))]",
    idleBar: "bg-[color-mix(in_srgb,var(--opencodie-primary)_25%,var(--opencodie-bg-elevated))]",
    panel: "border-[var(--opencodie-border)]",
  };
}

export default function FeaturesPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr] xl:items-end">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Features
            </p>
            <h1 className="opencodie-page-h1">
              Everything you need to run apps without DevOps
            </h1>
            <p className="opencodie-page-intro">
              You keep coding locally in VS Code and terminal with AI. OpenCodie
              handles deployments, infrastructure, logs, databases, and updates.
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
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
          </div>

          <Panel className="opencodie-light-sweep opencodie-reveal opencodie-reveal-delay-1 relative overflow-hidden p-5 md:p-6">
            <div className="opencodie-grid-drift absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.3)_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
                Snapshot
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  ["Workflow", "Local code + AI + instant deploy"],
                  ["Operations", "Handled by OpenCodie"],
                  ["Ownership", "Runs on your own server"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_70%,transparent)] p-3"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--opencodie-text)]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--opencodie-text-muted)]">
                Clear outcomes, no DevOps burden, no lock-in.
              </p>
            </div>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="space-y-4">
          {featureSurfaces.map((section, index) => {
            const tone = toneClasses(section.tone);

            return (
              <Panel
                key={section.title}
                className={cn(
                  "opencodie-interactive-card opencodie-reveal overflow-hidden p-0",
                  index % 3 === 1 ? "opencodie-reveal-delay-1" : "",
                  index % 3 === 2 ? "opencodie-reveal-delay-2" : "",
                  tone.panel,
                )}
              >
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4 p-5 md:p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-[var(--opencodie-bg-elevated)]",
                          tone.icon,
                        )}
                      >
                        <FeatureIcon name={section.icon} className="h-4 w-4" />
                      </span>
                      <p className={cn("text-xs uppercase tracking-[0.14em]", tone.label)}>
                        {section.label}
                      </p>
                    </div>

                    <h2 className="text-2xl md:text-3xl">{section.title}</h2>
                    <p className="text-sm md:text-base">{section.explanation}</p>

                    <ul className="grid gap-2 text-sm text-[var(--opencodie-text-muted)] sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className={cn("mt-1 h-1.5 w-1.5 rounded-full", tone.bullet)} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm font-medium text-[var(--opencodie-text)]">
                      {section.benefit}
                    </p>
                  </div>

                  <div className="overflow-hidden border-t border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] p-5 md:p-6 lg:border-l lg:border-t-0">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                        {section.label} surface
                      </p>

                      <div className="space-y-2">
                        {section.bars.map((width, visualIndex) => (
                          <div
                            key={`${section.label}-${width}`}
                            className="overflow-hidden rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-panel)] p-2"
                          >
                            <div
                              className={cn(
                                "h-2 origin-left rounded-full transition-all duration-200",
                                visualIndex === 1 || visualIndex === 3
                                  ? cn(tone.activeBar, "opencodie-glow-pulse opencodie-bar-active")
                                  : tone.idleBar,
                              )}
                              style={{ width: `${width}%` }}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[
                          ["Status", "Ready"],
                          ["Sync", "Healthy"],
                          ["Ops", "Managed"],
                        ].map(([label, value], statIndex) => (
                          <div
                            key={`${section.label}-${label}`}
                            className={cn(
                              "rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-panel)] p-2",
                              statIndex === 0 ? tone.panel : "",
                            )}
                          >
                            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
                              {label}
                            </p>
                            <p className="mt-1 text-xs font-medium text-[var(--opencodie-text)]">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel className="opencodie-reveal opencodie-light-sweep space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              One Workflow
            </p>
            <h2 className="opencodie-page-h2">Code to production in one system</h2>
            <p className="text-sm md:text-base">
              Keep your local setup. OpenCodie connects the operational layer so you
              can ship without stitching tools together.
            </p>

            <div className="rounded-2xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_58%,transparent)] p-3">
              <div className="flex flex-col gap-2 xl:flex-row xl:items-center">
                {connectedFlow.map((item, index) => (
                  <div key={item} className="flex items-center gap-2 xl:flex-1">
                    <div
                      className={cn(
                        "opencodie-interactive-card w-full rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_74%,transparent)] p-3",
                        index === connectedFlow.length - 1
                          ? "border-[color-mix(in_srgb,var(--opencodie-accent)_45%,var(--opencodie-border))]"
                          : "",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
                          Stage {index + 1}
                        </p>
                        {index === connectedFlow.length - 1 ? (
                          <span className="opencodie-status-pulse inline-flex h-2 w-2 rounded-full bg-[var(--opencodie-accent)]" />
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-medium text-[var(--opencodie-text)]">
                        {item}
                      </p>
                    </div>
                    {index < connectedFlow.length - 1 ? (
                      <span className="hidden text-sm text-[var(--opencodie-accent)]/80 xl:inline">
                        {"->"}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              No tool switching. No DevOps detours.
            </p>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Operations
            </p>
            <h2 className="opencodie-page-h2">OpenCodie handles the operational layer</h2>
            <p className="text-sm md:text-base">
              You focus on product work. OpenCodie handles repeatable deployment
              operations and runtime support.
            </p>
            <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
              {infrastructureCapabilities.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              Faster delivery with full infrastructure ownership.
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
                <h2 className="opencodie-page-h2">Simple workflow. Full control.</h2>
                <p className="max-w-4xl text-sm text-[var(--opencodie-text-muted)] md:text-base">
                  OpenCodie keeps local development and AI workflows intact while it
                  handles deployment, logs, databases, and updates. Your app runs on
                  your own server, so you keep control and avoid lock-in.
                </p>
              </div>

              <div className="grid gap-2 self-end">
                <Link
                  href="/product"
                  className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_76%,transparent)] px-3 py-2 text-sm text-[var(--opencodie-text-muted)] transition-colors hover:text-[var(--opencodie-text)]"
                >
                  Continue to Product page
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-xl border border-[color-mix(in_srgb,var(--opencodie-accent)_36%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-accent)_10%,var(--opencodie-bg-elevated))] px-3 py-2 text-sm text-[var(--opencodie-text)] transition-colors hover:border-[color-mix(in_srgb,var(--opencodie-accent)_56%,var(--opencodie-border))]"
                >
                  Compare plans in Pricing
                </Link>
              </div>
            </div>
          </Panel>
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
