import { FeatureIcon } from "@/components/home/features/feature-icon";
import { Panel } from "@/components/ui/panel";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Browser-based development environment",
    description:
      "Work in a full VS Code environment directly in your browser. No installation, no setup - just open and start building.",
    systemLink: "Coding environment online with full project context.",
    icon: "workspace" as const,
    badge: "Browser IDE",
  },
  {
    title: "Live preview while you build",
    description:
      "See your application update instantly as you code. No manual refresh or complex configuration required.",
    systemLink: "Instant feedback while building and iterating.",
    icon: "preview" as const,
    badge: "Live",
  },
  {
    title: "AI-powered development",
    description:
      "Use OpenAI, Claude, or Meta AI directly inside your workflow. Generate code, fix bugs, and build faster without switching tools.",
    systemLink: "AI development tools integrated in the workspace.",
    icon: "ai" as const,
    badge: "AI",
  },
  {
    title: "Built-in database integration",
    description:
      "Create and connect databases with a few clicks. No external setup or complicated configuration.",
    systemLink: "Backend and database connected in one platform.",
    icon: "database" as const,
    badge: "Database",
  },
  {
    title: "One-click deployment",
    description:
      "Deploy your application instantly. From development to production in one flow.",
    systemLink: "Build and deploy apps without separate tools.",
    icon: "deploy" as const,
    badge: "Deploy",
  },
  {
    title: "Integrated terminal and runtime",
    description:
      "Run commands, manage your environment, and control your app directly in your workspace.",
    systemLink: "Runtime control stays inside the same development loop.",
    icon: "terminal" as const,
    badge: "Runtime",
  },
];

export function CoreCapabilitiesSection() {
  return (
    <section id="features" className="opencodie-section">
      <div className="opencodie-section-heading opencodie-reveal">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
          Core Capabilities
        </p>
        <h2 className="opencodie-heading-accent text-3xl md:text-5xl">
          Everything you need to build modern applications
        </h2>
        <p className="max-w-2xl text-base md:text-lg">
          OpenCodie combines browser-based development, AI tooling, backend services,
          database integration, and deployment into one connected workflow.
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
