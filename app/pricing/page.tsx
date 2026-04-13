import type { Metadata } from "next";
import Link from "next/link";
import { BringYourAiPanel } from "@/components/shared/bring-your-ai-panel";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing | OpenCodie",
  description:
    "Simple, transparent pricing for developers who want instant deploys without DevOps complexity.",
};

const plans = [
  {
    name: "Launch",
    price: "€9",
    period: "/month",
    tagline: "Perfect for getting started",
    points: ["1–2 apps", "deployments", "logs", "basic usage"],
    cta: "Start Launch",
    highlight: false,
  },
  {
    name: "Build",
    price: "€19",
    period: "/month",
    tagline: "Built for real projects",
    points: [
      "unlimited apps",
      "databases",
      "full logs",
      "fast deployments",
      "priority handling",
    ],
    cta: "Choose Build",
    highlight: true,
  },
  {
    name: "Team",
    price: "€49",
    period: "/month",
    tagline: "Built for collaboration and control",
    points: [
      "multiple users",
      "shared environments",
      "team access & permissions",
      "deployment visibility",
      "activity tracking",
      "priority support",
    ],
    cta: "Start Team",
    highlight: false,
  },
] as const;

const trustPoints = [
  "No hidden costs",
  "Simple pricing",
  "Built for developers",
  "Transparent system",
] as const;

const comparisonRows = [
  {
    label: "Ease of use",
    opencodie: "Very simple",
    vercel: "Simple",
    coolify: "Setup-heavy",
  },
  {
    label: "DevOps required",
    opencodie: "No",
    vercel: "Sometimes",
    coolify: "Yes",
  },
  {
    label: "Simplicity",
    opencodie: "Built for speed",
    vercel: "Good, but can grow complex",
    coolify: "Manual workflow",
  },
  {
    label: "Pricing clarity",
    opencodie: "Clear plans",
    vercel: "Can be less predictable",
    coolify: "Self-managed",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <section className="opencodie-page-hero opencodie-overview">
        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr] xl:items-stretch">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Pricing
            </p>
            <h1 className="opencodie-page-h1">
              Instant deploys.
              <br />
              No DevOps complexity.
            </h1>
            <p className="opencodie-page-intro">
              Built for developers who ship fast in VS Code and terminal. OpenCodie
              keeps deployment simple from first app to production.
            </p>
          </div>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 p-5 md:p-6 xl:flex xl:h-full xl:flex-col xl:justify-center">
            <p className="text-sm md:text-base">
              Deploy apps instantly. Everything is managed for you.
            </p>
            <p className="opencodie-stack-tight text-sm md:text-base">
              No infrastructure complexity. Just build and ship.
            </p>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section-compact opencodie-overview">
        <BringYourAiPanel className="opencodie-reveal-delay-2" />
      </section>

      <section className="opencodie-page-section opencodie-overview">
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Panel
              key={plan.name}
              className={
                plan.highlight
                  ? "opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-1 flex h-full flex-col gap-4 border-[color-mix(in_srgb,var(--opencodie-primary)_56%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_11%,var(--opencodie-bg-panel))] p-5"
                  : `opencodie-interactive-card opencodie-reveal flex h-full flex-col gap-4 p-5 ${index === 2 ? "opencodie-reveal-delay-2" : ""}`
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl">{plan.name}</h2>
                {plan.highlight ? (
                  <span className="rounded-full border border-[color-mix(in_srgb,var(--opencodie-primary)_62%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_22%,var(--opencodie-bg-elevated))] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--opencodie-text)]">
                    Most popular
                  </span>
                ) : null}
              </div>

              <p className="text-4xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                {plan.price}
                <span className="ml-1 text-sm font-medium text-[var(--opencodie-text-muted)]">
                  {plan.period}
                </span>
              </p>

              <p className="text-sm font-medium text-[var(--opencodie-text)]">{plan.tagline}</p>

              <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={siteConfig.portal.getStartedUrl}
                className={buttonClasses(plan.highlight ? "primary" : "secondary", "mt-auto w-full")}
              >
                {plan.cta}
              </Link>
            </Panel>
          ))}
        </div>
      </section>

      <section className="opencodie-band-dark opencodie-overview">
        <div className="opencodie-section">
          <Panel className="opencodie-reveal space-y-3 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Fair Usage
            </p>
            <p className="text-sm md:text-base">Fair usage included.</p>
            <p className="text-sm md:text-base">
              Each plan includes everything you need for real projects.
            </p>
            <p className="text-sm md:text-base">
              If your apps exceed normal usage, additional costs may apply.
            </p>
            <p className="text-sm font-medium text-[var(--opencodie-text)] md:text-base">
              We&apos;ll always notify you before any extra charges.
            </p>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section opencodie-overview">
        <Panel className="opencodie-reveal p-5 md:p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Trust
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => (
              <div
                key={point}
                className={`rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] px-3 py-2.5 text-sm font-medium text-[var(--opencodie-text)] ${index === 1 || index === 3 ? "opencodie-reveal-delay-1" : ""}`}
              >
                {point}
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="opencodie-band-dark opencodie-overview">
        <div className="opencodie-section">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Comparison
            </p>
            <h2 className="opencodie-page-h2">OpenCodie vs Vercel vs Coolify</h2>
          </div>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 opencodie-stack-md overflow-x-auto p-0">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--opencodie-border)] text-[var(--opencodie-text)]">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">OpenCodie</th>
                  <th className="px-4 py-3 font-semibold">Vercel</th>
                  <th className="px-4 py-3 font-semibold">Coolify</th>
                </tr>
              </thead>
              <tbody className="text-[var(--opencodie-text-muted)]">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--opencodie-border)]/70 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-[var(--opencodie-text)]">{row.label}</td>
                    <td className="px-4 py-3 text-[var(--opencodie-accent)]">{row.opencodie}</td>
                    <td className="px-4 py-3">{row.vercel}</td>
                    <td className="px-4 py-3">{row.coolify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section opencodie-overview">
        <Panel className="opencodie-light-sweep opencodie-reveal p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Final CTA
          </p>
          <h2 className="opencodie-stack-tight text-3xl md:text-4xl">Start building without DevOps</h2>
          <p className="opencodie-stack-tight text-sm md:text-base">Deploy your first app today with OpenCodie.</p>

          <div className="opencodie-stack-md flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link href={siteConfig.portal.getStartedUrl} className={buttonClasses("primary", "w-full sm:w-auto")}>
              Get started
            </Link>
            <Link href={siteConfig.portal.getStartedUrl} className={buttonClasses("secondary", "w-full sm:w-auto")}>
              Choose Build plan
            </Link>
          </div>
        </Panel>
      </section>
    </>
  );
}
