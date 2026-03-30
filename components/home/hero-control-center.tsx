import { Panel } from "@/components/ui/panel";
import { cn } from "@/lib/utils";

type ControlNodeProps = {
  label: string;
  meta: string;
  tone: "indigo" | "cyan" | "slate";
  className: string;
  driftClass?: string;
};

const toneStyles: Record<ControlNodeProps["tone"], string> = {
  indigo:
    "border-[color-mix(in_srgb,var(--opencodie-primary)_52%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_12%,var(--opencodie-bg-elevated))]",
  cyan: "border-[color-mix(in_srgb,var(--opencodie-accent)_52%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-accent)_12%,var(--opencodie-bg-elevated))]",
  slate: "border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)]",
};

function ControlNode({ label, meta, tone, className, driftClass }: ControlNodeProps) {
  return (
    <div
      className={cn(
        "absolute w-[8.2rem] rounded-xl border p-2.5 shadow-[0_0_0_1px_rgba(15,23,42,0.5)] md:w-[9.5rem] md:p-3",
        toneStyles[tone],
        driftClass,
        className,
      )}
    >
      <p className="text-[0.56rem] uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)] md:text-[0.62rem]">
        {meta}
      </p>
      <p className="mt-1.5 text-sm font-semibold tracking-tight text-[var(--opencodie-text)]">
        {label}
      </p>
    </div>
  );
}

export function HeroControlCenter() {
  return (
    <Panel className="relative overflow-hidden p-4 md:p-5">
      <div className="opencodie-grid-drift absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.36)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.36)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="opencodie-ambient-drift opencodie-ambient-drift-delay opencodie-mesh-float absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.18)_0%,transparent_38%),radial-gradient(circle_at_78%_12%,rgba(99,102,241,0.22)_0%,transparent_44%)]" />

      <div className="relative space-y-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Panel className="opencodie-interactive-card opencodie-reveal space-y-1 p-3">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
              Build queue
            </p>
            <p className="text-lg font-semibold tracking-tight text-[var(--opencodie-text)]">24</p>
          </Panel>
          <Panel className="opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-1 space-y-1 p-3">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
              Deploy latency
            </p>
            <p className="text-lg font-semibold tracking-tight text-[var(--opencodie-text)]">42s</p>
          </Panel>
          <Panel className="opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-2 space-y-1 p-3">
            <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
              Connected APIs
            </p>
            <p className="text-lg font-semibold tracking-tight text-[var(--opencodie-text)]">17</p>
          </Panel>
        </div>

        <div className="grid gap-3 sm:hidden">
          {[
            ["Code Workspace", "Build software"],
            ["Build Engine", "Compile + test"],
            ["Edge Deploy", "Deploy fast"],
            ["System Connectors", "Connect systems"],
            ["Unified Control", "Manage everything"],
          ].map(([label, meta]) => (
            <Panel key={label} className="opencodie-interactive-card flex items-center justify-between gap-3 p-3">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  {meta}
                </p>
                <p className="mt-1 text-sm font-semibold tracking-tight text-[var(--opencodie-text)]">
                  {label}
                </p>
              </div>
              <span className="opencodie-glow-pulse h-2.5 w-2.5 rounded-full bg-[var(--opencodie-accent)] shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
            </Panel>
          ))}
        </div>

        <div className="opencodie-light-sweep relative hidden h-[22rem] rounded-2xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-panel)_85%,transparent)] sm:block">
          <div className="absolute left-[18%] right-[18%] top-[30%] h-px bg-gradient-to-r from-transparent via-[var(--opencodie-accent)]/70 to-transparent" />
          <div className="absolute left-[18%] right-[18%] top-[66%] h-px bg-gradient-to-r from-transparent via-[var(--opencodie-primary)]/70 to-transparent" />
          <div className="absolute left-1/2 top-[30%] h-[36%] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--opencodie-accent)]/70 to-[var(--opencodie-primary)]/70" />
          <div className="absolute left-[18%] top-[30%] h-[36%] w-px bg-gradient-to-b from-[var(--opencodie-accent)]/55 to-[var(--opencodie-primary)]/55" />
          <div className="absolute right-[18%] top-[30%] h-[36%] w-px bg-gradient-to-b from-[var(--opencodie-accent)]/55 to-[var(--opencodie-primary)]/55" />

          <div className="opencodie-glow-pulse absolute left-1/2 top-[29%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--opencodie-accent)] shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
          <div className="opencodie-glow-pulse opencodie-glow-pulse-delay absolute left-1/2 top-[66%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--opencodie-primary)] shadow-[0_0_16px_rgba(99,102,241,0.7)]" />

          <ControlNode
            label="Code Workspace"
            meta="Build software"
            tone="slate"
            driftClass="opencodie-floating-node"
            className="left-2 top-4 md:left-4 md:top-5"
          />
          <ControlNode
            label="Build Engine"
            meta="Compile + test"
            tone="indigo"
            driftClass="opencodie-floating-node opencodie-floating-node-delay-1"
            className="left-1/2 top-5 -translate-x-1/2"
          />
          <ControlNode
            label="Edge Deploy"
            meta="Deploy fast"
            tone="cyan"
            driftClass="opencodie-floating-node opencodie-floating-node-delay-2"
            className="right-2 top-4 md:right-4 md:top-5"
          />

          <ControlNode
            label="System Connectors"
            meta="Connect systems"
            tone="cyan"
            driftClass="opencodie-floating-node opencodie-floating-node-delay-1"
            className="bottom-4 left-2 md:bottom-5 md:left-4"
          />
          <ControlNode
            label="Unified Control"
            meta="Manage everything"
            tone="indigo"
            driftClass="opencodie-floating-node opencodie-floating-node-delay-2"
            className="left-1/2 bottom-5 -translate-x-1/2"
          />
          <ControlNode
            label="Runtime Fleet"
            meta="Regions + jobs"
            tone="slate"
            driftClass="opencodie-floating-node"
            className="bottom-4 right-2 md:bottom-5 md:right-4"
          />
        </div>
      </div>
    </Panel>
  );
}
