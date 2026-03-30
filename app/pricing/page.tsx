import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing | OpenCodie",
  description:
    "Simple pricing with full control. You own the infrastructure, OpenCodie handles the operational layer.",
};

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    copy: "For individual developers validating ideas.",
    points: [
      "Core deployment workflow",
      "Basic logs and redeploys",
      "Community support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    copy: "For active products that ship frequently.",
    points: [
      "Advanced deployment controls",
      "Database and secrets management",
      "Priority support",
    ],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "Custom",
    period: "",
    copy: "For teams managing multiple production apps.",
    points: [
      "Multi-project workflows",
      "Team access controls",
      "Dedicated support",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Pricing
          </p>
          <h1 className="opencodie-page-h1">Simple pricing. Full control.</h1>
          <p className="opencodie-page-intro">
            You own the infrastructure. We handle everything else.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Panel
              key={plan.name}
              className={index === 1 ? "opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-1 flex h-full flex-col gap-4 border-[color-mix(in_srgb,var(--opencodie-primary)_52%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_10%,var(--opencodie-bg-panel))] p-5" : index === 2 ? "opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-2 flex h-full flex-col gap-4 p-5" : "opencodie-interactive-card opencodie-reveal flex h-full flex-col gap-4 p-5"}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl">{plan.name}</h2>
                {plan.highlight ? (
                  <span className="rounded-full border border-[color-mix(in_srgb,var(--opencodie-primary)_55%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_22%,var(--opencodie-bg-elevated))] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--opencodie-text)]">
                    Popular
                  </span>
                ) : null}
              </div>

              <p className="text-4xl font-semibold tracking-tight text-[var(--opencodie-text)]">
                {plan.price}
                <span className="ml-1 text-sm font-medium text-[var(--opencodie-text-muted)]">
                  {plan.period}
                </span>
              </p>

              <p className="text-sm">{plan.copy}</p>

              <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === "Team" ? siteConfig.portal.loginUrl : siteConfig.portal.getStartedUrl}
                className={buttonClasses(plan.highlight ? "primary" : "secondary", "mt-auto w-full")}
              >
                {plan.cta}
              </Link>
            </Panel>
          ))}
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 2xl:grid-cols-[1fr_1fr]">
          <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
            <h2 className="opencodie-page-h2">No vendor lock-in</h2>
            <p className="text-sm md:text-base">
              Your application runs on your own server. You can move or leave
              whenever you want.
            </p>
            <p className="text-sm md:text-base">
              OpenCodie is the platform layer, not the owner of your infrastructure.
            </p>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
            <h2 className="opencodie-page-h2">Honest cost model</h2>
            <p className="text-sm md:text-base">
              OpenCodie pricing covers the platform experience.
            </p>
            <p className="text-sm md:text-base">
              Infrastructure costs (server, storage, bandwidth) depend on your own
              hosting setup and usage.
            </p>
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              Any estimate is an estimate. Your real cost depends on real traffic.
            </p>
          </Panel>
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
