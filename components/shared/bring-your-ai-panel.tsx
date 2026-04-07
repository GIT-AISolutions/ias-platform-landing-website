import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

type BringYourAiPanelProps = {
  className?: string;
};

const supportedLogos = [
  { name: "OpenAI", src: "/ai-logos/openai.png", scale: 1.2, href: "https://openai.com" },
  { name: "Claude", src: "/ai-logos/claude.png", scale: 1.08, href: "https://www.anthropic.com" },
  { name: "Gemini", src: "/ai-logos/gemini.png", scale: 1.12, href: "https://gemini.google.com" },
  { name: "Llama", src: "/ai-logos/llama.png", scale: 1.06, href: "https://www.llama.com" },
  { name: "Mistral", src: "/ai-logos/mistral.png", scale: 1.14, href: "https://mistral.ai" },
  { name: "DeepSeek", src: "/ai-logos/deepseek.png", scale: 1.14, href: "https://www.deepseek.com" },
  { name: "Cohere", src: "/ai-logos/cohere.png", scale: 1.04, href: "https://cohere.com" },
  { name: "xAI", src: "/ai-logos/xai.png", scale: 1.46, href: "https://x.ai" },
  { name: "GitHub", src: "/ai-logos/github.png", scale: 1.2, href: "https://github.com" },
  { name: "Docker", src: "/ai-logos/docker.png", scale: 1.02, href: "https://www.docker.com" },
  { name: "PostgreSQL", src: "/ai-logos/postgresql.png", scale: 1.34, href: "https://www.postgresql.org" },
  { name: "Redis", src: "/ai-logos/redis.png", scale: 1.34, href: "https://redis.io" },
] as const;

export function BringYourAiPanel({ className = "" }: BringYourAiPanelProps) {
  const marqueeLogos = [...supportedLogos, ...supportedLogos];

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

      <div className="space-y-2.5">
        <p className="text-xs uppercase tracking-[0.12em] text-[var(--opencodie-accent)]">
          Works with your existing AI and tools
        </p>
        <div className="opencodie-logo-marquee" aria-label="Supported AI and tooling logos">
          <div className="opencodie-logo-track">
            {marqueeLogos.map((logo, index) => {
              return (
                <div key={`${logo.name}-${index}`} className="opencodie-logo-item">
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="opencodie-logo-link"
                    aria-label={`Visit ${logo.name}`}
                  >
                    <div
                      className="opencodie-logo-chip"
                      style={{ "--logo-scale": `${logo.scale}` } as CSSProperties}
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={128}
                        height={36}
                        className="opencodie-logo-image"
                      />
                    </div>
                    <span className="opencodie-logo-label">
                      {logo.name}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Panel>
  );
}
