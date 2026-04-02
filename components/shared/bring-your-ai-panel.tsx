import Link from "next/link";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

type BringYourAiPanelProps = {
  className?: string;
};

export function BringYourAiPanel({ className = "" }: BringYourAiPanelProps) {
  return (
    <Panel className={`opencodie-light-sweep opencodie-reveal space-y-4 p-5 md:p-6 ${className}`}>
      <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
        Bring your own AI
      </p>
      <h2 className="text-2xl md:text-3xl">Use your own AI. Start from €9/month.</h2>
      <p className="text-sm md:text-base">
        Already paying for OpenAI, Claude, or another AI model? Perfect. Plug it in
        and start building.
      </p>
      <p className="text-sm font-medium text-[var(--opencodie-text)] md:text-base">
        No need to pay for AI twice.
      </p>

      <div className="grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_76%,transparent)] p-3">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--opencodie-accent)]">
            How it works
          </p>
          <ul className="mt-2 space-y-2 text-sm text-[var(--opencodie-text-muted)]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
              Connect your own API keys or local models
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
              Use your favorite CLI and workflow
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
              Deploy and run your SaaS on our infrastructure
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_76%,transparent)] p-3">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--opencodie-accent)]">
            Simple pricing
          </p>
          <p className="mt-2 text-sm text-[var(--opencodie-text-muted)]">Start from €9/month.</p>
          <p className="mt-2 text-sm text-[var(--opencodie-text-muted)]">
            Only pay extra when your usage grows.
          </p>
        </div>

        <div className="rounded-xl border border-[color-mix(in_srgb,var(--opencodie-accent)_40%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-accent)_11%,var(--opencodie-bg-elevated))] p-3">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--opencodie-accent)]">
            No lock-in
          </p>
          <p className="mt-2 text-sm text-[var(--opencodie-text)]">
            No lock-in. No hidden costs.
          </p>
          <p className="mt-2 text-sm text-[var(--opencodie-text)]">
            Your AI. Your setup. Your rules.
          </p>
          <Link
            href={siteConfig.portal.getStartedUrl}
            className="mt-3 inline-block text-sm font-medium text-[var(--opencodie-accent)] hover:text-[var(--opencodie-text)]"
          >
            Start building →
          </Link>
        </div>
      </div>
    </Panel>
  );
}
