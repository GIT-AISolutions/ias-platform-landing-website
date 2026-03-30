import { FeatureIcon } from "@/components/home/features/feature-icon";
import { Panel } from "@/components/ui/panel";
import { StatusBadge } from "@/components/ui/status-badge";

const platformLayers = [
  {
    layer: "Code",
    detail: "Write and organize your application logic in a browser-based workspace.",
    icon: "platform" as const,
  },
  {
    layer: "Preview + Backend",
    detail: "See changes instantly and run backend services in the same environment.",
    icon: "deploy" as const,
  },
  {
    layer: "Database + Deployment",
    detail: "Connect data and ship to production without switching tools or setup.",
    icon: "billing" as const,
  },
];

export function InfrastructureSection() {
  return (
    <section className="opencodie-band-dark">
      <div className="opencodie-section">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-6 opencodie-reveal">
            <StatusBadge status="success">Differentiator</StatusBadge>
            <h2 className="opencodie-heading-accent text-3xl md:text-5xl">
              One platform. Fully connected.
            </h2>
            <p className="max-w-lg text-base md:text-lg">
              OpenCodie connects everything in your development process: code, preview,
              backend, database, and deployment. All in one system.
            </p>
            <ul className="space-y-3 text-sm text-[var(--opencodie-text-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                No need for separate tools, services, or complex setups.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                Everything stays in one connected workflow.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                Build and deploy apps with one unified platform model.
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
                  Connected surfaces
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                  5
                </p>
              </Panel>
              <Panel className="opencodie-interactive-card p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  Tool switching
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                  0
                </p>
              </Panel>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
