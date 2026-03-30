import { Panel } from "@/components/ui/panel";
import { StatusBadge } from "@/components/ui/status-badge";

const deploymentFlow = [
  ["Build", "Completed"],
  ["Preview", "Live"],
  ["Canary", "Queued"],
  ["Production", "Pending"],
] as const;

const codeRows = [
  "workspace.initProject(config)",
  "workspace.connectDatabase({ env: 'preview' })",
  "deploy.createPipeline({ branch: 'main' })",
  "billing.syncEntitlements({ orgId })",
  "preview.publishSnapshot({ region: 'eu-west' })",
  "monitor.trackRelease({ version: 'v1.8.0' })",
];

const infrastructurePoints = [
  "Container-based workspaces",
  "Managed runtime environments",
  "Automated deployment pipelines",
  "Integrated database provisioning",
  "Real-time preview environments",
];

export function ProductPreviewSection() {
  return (
    <section className="opencodie-band-dark">
      <div className="opencodie-section pb-8 md:pb-12">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Infrastructure Layer
          </p>
          <h2 className="opencodie-heading-accent text-3xl md:text-5xl">
            Powered by a real infrastructure layer
          </h2>
          <p className="max-w-2xl text-base md:text-lg">
            OpenCodie runs on a modern infrastructure stack that manages development,
            runtime, and deployment workflows automatically. You focus on building;
            OpenCodie handles the rest.
          </p>
        </div>

        <div className="mt-6 grid gap-2 text-sm text-[var(--opencodie-text-muted)] sm:grid-cols-2 lg:grid-cols-3 opencodie-reveal opencodie-reveal-delay-1">
          {infrastructurePoints.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_70%,transparent)] px-3 py-2"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="relative mt-8 md:mt-10">
          <Panel className="opencodie-light-sweep relative overflow-hidden p-0 opencodie-reveal opencodie-reveal-delay-2">
          <div className="opencodie-grid-drift opencodie-mesh-float absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.34)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.34)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="relative border-b border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-panel)_88%,transparent)] px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  Project Hub
                </p>
                <h3 className="text-lg">OpenCodie/platform-control</h3>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge status="info">main</StatusBadge>
                <StatusBadge status="success">Healthy</StatusBadge>
              </div>
            </div>
          </div>

          <div className="relative grid gap-0 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-4 border-b border-[var(--opencodie-border)] p-5 xl:border-b-0 xl:border-r">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--opencodie-text-muted)]">
                <span className="rounded-md border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] px-2 py-1">
                  workspace.tsx
                </span>
                <span className="rounded-md border border-[var(--opencodie-border)] px-2 py-1">
                  deploy.yaml
                </span>
                <span className="rounded-md border border-[var(--opencodie-border)] px-2 py-1">
                  billing.ts
                </span>
              </div>

              <Panel className="opencodie-interactive-card space-y-2 p-4">
                {codeRows.map((line, index) => (
                  <div
                    key={line}
                    className={`grid grid-cols-[1.6rem_1fr] items-center gap-2.5 sm:grid-cols-[1.8rem_1fr] sm:gap-3 ${index > 3 ? "hidden sm:grid" : ""}`}
                  >
                    <span className="text-right text-xs text-[var(--opencodie-text-muted)]">
                      {index + 1}
                    </span>
                    <div className="rounded-md border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] px-3 py-1.5 text-xs text-[var(--opencodie-text)]">
                      {line}
                    </div>
                  </div>
                ))}
              </Panel>

              <Panel className="opencodie-interactive-card space-y-2 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  Terminal
                </p>
                <div className="rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] p-3 text-xs text-[var(--opencodie-text-muted)]">
                  <p>Syncing workspace dependencies...</p>
                  <p>Preview container started in 12.4s</p>
                  <p className="text-[var(--opencodie-success)] opencodie-status-pulse">Deployment checks passed</p>
                </div>
              </Panel>
            </div>

            <div className="space-y-4 p-5">
              <Panel className="opencodie-interactive-card space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                    Live Preview
                  </p>
                  <StatusBadge status="info">Preview Ready</StatusBadge>
                </div>
                <p className="text-xs text-[var(--opencodie-text-muted)]">preview.OpenCodie.run</p>

                <div className="overflow-hidden rounded-xl border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-panel)]">
                  <div className="flex items-center gap-2 border-b border-[var(--opencodie-border)] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--opencodie-danger)]" />
                    <span className="h-2 w-2 rounded-full bg-[var(--opencodie-warning)]" />
                    <span className="opencodie-glow-pulse h-2 w-2 rounded-full bg-[var(--opencodie-success)]" />
                    <span className="ml-2 text-xs text-[var(--opencodie-text-muted)]">Preview Canvas</span>
                  </div>

                  <div className="space-y-3 p-3">
                    <div className="h-10 rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)]" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-lg border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-primary)_14%,var(--opencodie-bg-elevated))]" />
                      <div className="h-14 rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)]" />
                      <div className="h-14 rounded-lg border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-accent)_12%,var(--opencodie-bg-elevated))]" />
                    </div>
                    <div className="h-20 rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)]" />
                  </div>
                </div>
              </Panel>

              <Panel className="opencodie-interactive-card space-y-3 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  Deployment State
                </p>
                <div className="space-y-2">
                  {deploymentFlow.map(([phase, state], index) => (
                    <div key={phase} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] text-[0.65rem] text-[var(--opencodie-text-muted)]">
                        {index + 1}
                      </span>
                      <div className="flex flex-1 items-center justify-between rounded-lg border border-[var(--opencodie-border)] px-3 py-1.5">
                        <span className="text-xs sm:text-sm text-[var(--opencodie-text)]">{phase}</span>
                        <span
                          className={`text-xs ${state === "Live" ? "opencodie-status-pulse text-[var(--opencodie-accent)]" : "text-[var(--opencodie-text-muted)]"}`}
                        >
                          {state}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
          </Panel>

          <Panel className="absolute left-2 top-8 hidden w-52 p-4 xl:block opencodie-reveal opencodie-reveal-delay-2">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
              Active Projects
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--opencodie-text)]">58</p>
            <p className="mt-1 text-xs text-[var(--opencodie-text-muted)]">Across 12 organizations</p>
          </Panel>

          <Panel className="absolute bottom-8 right-2 hidden w-56 p-4 xl:block opencodie-reveal opencodie-reveal-delay-3">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
              Runtime Alerts
            </p>
            <div className="mt-2 space-y-2 text-xs">
              <p className="rounded-md border border-[var(--opencodie-border)] px-2 py-1.5 text-[var(--opencodie-text-muted)]">
                API latency stabilized in eu-west
              </p>
              <p className="rounded-md border border-[var(--opencodie-border)] px-2 py-1.5 text-[var(--opencodie-text-muted)]">
                Billing sync completed for enterprise tier
              </p>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
