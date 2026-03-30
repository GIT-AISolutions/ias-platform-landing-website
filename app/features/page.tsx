import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { FeatureIcon } from "@/components/home/features/feature-icon";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "OpenCodie Features | Everything You Need To Build And Deploy Modern Apps",
  description:
    "OpenCodie is an all-in-one development platform for building, running, and deploying full-stack applications with browser-based development, live preview, database management, and instant deployment.",
  keywords: [
    "development platform",
    "build and deploy apps",
    "full-stack development",
    "browser-based IDE",
    "deploy instantly",
    "SaaS development platform",
    "cloud development environment",
    "AI development tools",
  ],
  openGraph: {
    title: "OpenCodie Features | Build And Deploy Modern Apps In One Workflow",
    description:
      "Explore browser-based development, live preview, AI development, built-in databases, and one-click deployment in OpenCodie.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCodie Features",
    description:
      "Everything teams need to build, run, and deploy applications in one connected system.",
  },
};

type FeatureSurface = {
  label: string;
  icon: "workspace" | "preview" | "ai" | "database" | "deploy";
  title: string;
  explanation: string;
  points: string[];
  benefit: string;
  tone: "indigo" | "cyan" | "green" | "default";
  bars: number[];
};

const featureSurfaces: FeatureSurface[] = [
  {
    label: "Development",
    icon: "workspace",
    title: "Build faster with a complete development environment",
    explanation:
      "OpenCodie gives you a browser-based development environment that feels like a local setup, without the complexity of installing or managing anything.",
    points: [
      "Full VS Code workspace in your browser",
      "Integrated terminal and runtime",
      "Instant environment setup (no installation required)",
      "Built for full-stack development",
    ],
    benefit: "Start coding immediately, without configuring infrastructure.",
    tone: "indigo",
    bars: [74, 90, 56, 88],
  },
  {
    label: "Live Preview",
    icon: "preview",
    title: "See your app in real-time",
    explanation:
      "OpenCodie keeps your code and preview environment in sync, so you always see changes instantly while you build.",
    points: [
      "Live preview while coding",
      "No manual reloads required",
      "Works with modern frameworks",
      "Built-in preview environments",
    ],
    benefit: "Make decisions faster with instant visual feedback.",
    tone: "default",
    bars: [68, 84, 61, 79],
  },
  {
    label: "AI Development",
    icon: "ai",
    title: "AI integrated into your workflow",
    explanation:
      "Use AI directly inside your development environment to write code, debug issues, and accelerate your workflow, without switching tools.",
    points: [
      "Works with OpenAI, Claude, and Meta AI",
      "Generate and edit code in your workspace",
      "Fix bugs and iterate faster",
      "Build features with AI assistance",
    ],
    benefit: "Everything stays inside your workflow, no external tools needed.",
    tone: "cyan",
    bars: [78, 94, 63, 87],
  },
  {
    label: "Databases",
    icon: "database",
    title: "Built-in database management",
    explanation:
      "Provision and manage databases directly inside OpenCodie. Connect your backend instantly and manage everything from one place.",
    points: [
      "Create databases in seconds",
      "Connect directly to your application",
      "Manage lifecycle in one interface",
      "No external setup required",
    ],
    benefit: "Your backend and database live in the same system.",
    tone: "default",
    bars: [64, 82, 57, 76],
  },
  {
    label: "Deployment",
    icon: "deploy",
    title: "Go live in seconds",
    explanation:
      "Move from development to production in a single step. OpenCodie handles infrastructure, deployment, and scaling for you.",
    points: [
      "One-click deployment",
      "Live production environments",
      "Real-time deployment status",
      "Custom domains supported",
    ],
    benefit: "Go from idea to live app in minutes.",
    tone: "green",
    bars: [72, 96, 67, 91],
  },
];

const connectedFlow = ["Code", "Preview", "Backend", "Database", "Deployment"];

const infrastructureCapabilities = [
  "Container-based environments",
  "Managed runtime",
  "Automated deployment pipelines",
  "Built-in scaling foundation",
];

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
              Everything you need to build and deploy modern apps
            </h1>
            <p className="opencodie-page-intro">
              OpenCodie is a complete development platform where teams can build,
              run, and deploy applications in one connected workflow, from
              browser-based development to production infrastructure.
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={siteConfig.portal.getStartedUrl}
                className={buttonClasses("primary", "w-full sm:w-auto")}
              >
                Start building
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
                  ["Core surfaces", "5 essential building blocks"],
                  ["Integrated tools", "Everything in one system"],
                  ["Time to first build", "Minutes, not hours"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_70%,transparent)] p-3"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--opencodie-text)]">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--opencodie-text-muted)]">
                Built for speed, clarity, and full-stack development from day one.
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
                  "opencodie-interactive-card opencodie-reveal overflow-hidden p-0 hover:-translate-y-1 transition-all duration-200 hover:border-indigo-500/40",
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

                    <p className="text-sm font-medium text-[var(--opencodie-text)]">{section.benefit}</p>
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
                          ["Status", "Live"],
                          ["Latency", "42s"],
                          ["Sync", "Healthy"],
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
                            <p className="mt-1 text-xs font-medium text-[var(--opencodie-text)]">{value}</p>
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
              Everything in OpenCodie works as one connected flow, from writing code
              to deploying your application.
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
                      <p className="mt-1 text-sm font-medium text-[var(--opencodie-text)]">{item}</p>
                    </div>
                    {index < connectedFlow.length - 1 ? (
                      <span className="hidden text-sm text-[var(--opencodie-accent)]/80 xl:inline">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              No switching tools. No broken workflows.
            </p>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Infrastructure
            </p>
            <h2 className="opencodie-page-h2">Infrastructure handled for you</h2>
            <p className="text-sm md:text-base">
              OpenCodie manages the infrastructure layer, so you can focus on
              building your product instead of configuring servers.
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
              Focus on building, not managing infrastructure.
            </p>
          </Panel>
        </div>

        <p className="mt-8 max-w-4xl text-sm text-[var(--opencodie-text-muted)] opencodie-reveal">
          OpenCodie is an all-in-one development platform for building, running, and
          deploying full-stack applications. It combines browser-based coding,
          live preview environments, database management, and instant deployment
          into a single workflow, helping developers and teams build faster and
          more efficiently.
        </p>

        <p className="mt-4 text-sm opencodie-reveal opencodie-reveal-delay-1">
          Continue to the{" "}
          <Link href="/product" className="text-[var(--opencodie-accent)] hover:text-[var(--opencodie-text)]">
            Product page
          </Link>{" "}
          for the full platform overview, or review{" "}
          <Link href="/pricing" className="text-[var(--opencodie-accent)] hover:text-[var(--opencodie-text)]">
            Pricing
          </Link>{" "}
          to compare plans.
        </p>
      </section>

      <MainCtaSection className="pt-8 md:pt-10" />
    </>
  );
}
