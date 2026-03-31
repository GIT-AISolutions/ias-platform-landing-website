import { FeatureIcon } from "@/components/home/features/feature-icon";
import { Panel } from "@/components/ui/panel";
import { StatusBadge } from "@/components/ui/status-badge";

const platformLayers = [
  {
    layer: "Your tools",
    detail: "Code locally in VS Code and terminal with AI tools you already use.",
    icon: "platform" as const,
  },
  {
    layer: "OpenCodie operations",
    detail: "Deployments, runtime setup, logs, and database wiring handled for you.",
    icon: "deploy" as const,
  },
  {
    layer: "Your server ownership",
    detail: "Apps run on infrastructure you control, without vendor lock-in.",
    icon: "billing" as const,
  },
];

export function InfrastructureSection() {
  return (
    <section className="opencodie-band-dark">
      <div className="opencodie-section">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-6 opencodie-reveal">
            <StatusBadge status="success">Why OpenCodie</StatusBadge>
            <h2 className="opencodie-heading-accent text-3xl md:text-5xl">
              Why developers choose OpenCodie
            </h2>
            <p className="max-w-lg text-base md:text-lg">
              You keep your workflow while OpenCodie removes infrastructure friction.
              Fast deployment experience with full infrastructure ownership.
            </p>
            <ul className="space-y-3 text-sm text-[var(--opencodie-text-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                No vendor lock-in: your app runs on your own server.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                No DevOps needed: no pipeline maintenance or setup burden.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                Works with your tools: VS Code, Git, terminal, and AI assistants.
              </li>
            </ul>
          </div>

          <Panel className="relative space-y-4 overflow-hidden opencodie-reveal opencodie-reveal-delay-2">
            <div className="opencodie-mesh-float absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.34)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.34)_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle,_rgba(99,102,241,0.2)_0%,transparent_65%)]" />

            <div className="relative space-y-3">
              {platformLayers.map((item) => (
                <Panel key={item.layer} className="opencodie-interactive-card relative flex items-start gap-4 overflow-hidden p-4">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 left-0 top-3 w-px bg-[color-mix(in_srgb,var(--opencodie-accent)_55%,transparent)]"
                  />
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] text-[var(--opencodie-accent)]">
                    <FeatureIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg">{item.layer}</h3>
                    <p className="text-sm">{item.detail}</p>
                  </div>
                </Panel>
              ))}
            </div>

            <div className="relative grid gap-3 sm:grid-cols-2">
              <Panel className="opencodie-interactive-card p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  Infrastructure model
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                  You own it
                </p>
              </Panel>
              <Panel className="opencodie-interactive-card p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  DevOps burden
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                  Removed
                </p>
              </Panel>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
