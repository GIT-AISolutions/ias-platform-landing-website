import { FeatureIcon } from "@/components/home/features/feature-icon";
import { Panel } from "@/components/ui/panel";
import { cn } from "@/lib/utils";

const workflow = [
  {
    step: "01",
    title: "Code locally",
    summary: "Use VS Code, your terminal, and AI models like Codex, Gemini, and Claude.",
  },
  {
    step: "02",
    title: "Connect project",
    summary: "Link your project or repository to OpenCodie with minimal setup.",
  },
  {
    step: "03",
    title: "Configure runtime",
    summary: "Set environment variables and attach databases without manual DevOps work.",
  },
  {
    step: "04",
    title: "Deploy instantly",
    summary: "OpenCodie builds and runs your app on your own server infrastructure.",
  },
  {
    step: "05",
    title: "Monitor and update",
    summary: "Use logs and safe redeploys to keep production stable as you ship.",
  },
];

export function WorkflowSection() {
  return (
    <section
      id="product"
      className="border-y border-[var(--opencodie-border)]/90 bg-[color-mix(in_srgb,var(--opencodie-bg-panel)_78%,transparent)]"
    >
      <div className="opencodie-section">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            How It Works
          </p>
        <h2 className="opencodie-heading-accent text-3xl md:text-5xl">
          From code to production in minutes
        </h2>
        <p className="max-w-2xl text-base md:text-lg">
          Keep your local workflow and ship faster without operating deployment
          pipelines or infrastructure manually.
        </p>
        </div>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--opencodie-accent)]/60 to-transparent 2xl:block" />
          {workflow.map((item, index) => (
            <Panel
              key={item.step}
              className={cn(
                "opencodie-interactive-card opencodie-reveal relative flex h-full flex-col gap-3",
                index % 5 === 1 ? "opencodie-reveal-delay-1" : "",
                index % 5 === 2 ? "opencodie-reveal-delay-2" : "",
                index % 5 === 3 ? "opencodie-reveal-delay-3" : "",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
                  Step {item.step}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] text-[var(--opencodie-accent)]">
                  <FeatureIcon name="flow" className="h-4 w-4" />
                </span>
              </div>
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-sm">{item.summary}</p>
            </Panel>
          ))}
        </div>

        <Panel className="mt-6 p-0 opencodie-reveal opencodie-reveal-delay-2">
          <div className="grid gap-0 md:grid-cols-3">
            {[
              ["Workflow model", "Local code -> Connect -> Deploy -> Observe"],
              ["Setup overhead", "No DevOps required"],
              ["Core principle", "Own infra + instant deploy"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-[var(--opencodie-border)] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
