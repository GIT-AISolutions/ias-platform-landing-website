import { FeatureIcon } from "@/components/home/features/feature-icon";
import { Panel } from "@/components/ui/panel";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Deployments",
    description:
      "Deploy directly from your local workflow without maintaining CI/CD pipelines.",
    systemLink: "Ship faster without DevOps setup overhead.",
    icon: "deploy" as const,
    badge: "Delivery",
  },
  {
    title: "AI workflow",
    description:
      "Keep using Codex, Gemini, Claude, and your existing AI tools in VS Code.",
    systemLink: "No tool switching, no workflow reset.",
    icon: "ai" as const,
    badge: "AI",
  },
  {
    title: "Secrets",
    description:
      "Manage environment variables and sensitive configuration safely per environment.",
    systemLink: "Protect production settings without manual server edits.",
    icon: "workspace" as const,
    badge: "Secure",
  },
  {
    title: "Databases",
    description:
      "Provision databases quickly and keep backend services connected to each deploy.",
    systemLink: "Backend-ready without infrastructure detours.",
    icon: "database" as const,
    badge: "Database",
  },
  {
    title: "Logs & debugging",
    description:
      "See deploy output and runtime logs in one place when issues appear.",
    systemLink: "Debug quickly and ship with confidence.",
    icon: "preview" as const,
    badge: "Logs",
  },
  {
    title: "Updates & redeploys",
    description:
      "Roll out changes safely when your app evolves across environments.",
    systemLink: "Continuous delivery without pipeline maintenance.",
    icon: "terminal" as const,
    badge: "Update",
  },
];

export function CoreCapabilitiesSection() {
  return (
    <section id="features" className="opencodie-section opencodie-overview">
      <div className="opencodie-section-heading opencodie-reveal">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
          The Solution
        </p>
        <h2 className="opencodie-heading-accent text-3xl md:text-5xl">
          OpenCodie removes the DevOps layer
        </h2>
        <p className="max-w-2xl text-base md:text-lg">
          You keep your workflow. VS Code, terminal, and AI tools stay the same while
          OpenCodie handles the operational layer.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item, index) => (
          <Panel
            key={item.title}
            className={cn(
              "opencodie-interactive-card opencodie-reveal flex h-full flex-col gap-4",
              index % 3 === 1 ? "opencodie-reveal-delay-1" : "",
              index % 3 === 2 ? "opencodie-reveal-delay-2" : "",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_80%,transparent)] text-[var(--opencodie-accent)]">
                <FeatureIcon name={item.icon} className="h-4 w-4" />
              </span>
              <StatusBadge status="info">{item.badge}</StatusBadge>
            </div>
            <h3 className="text-xl">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="mt-auto text-xs uppercase tracking-[0.12em] text-[var(--opencodie-text-muted)]">
              {item.systemLink}
            </p>
          </Panel>
        ))}
      </div>
    </section>
  );
}
