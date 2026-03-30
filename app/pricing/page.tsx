import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "Free",
    detail: "Start building for free with core platform access.",
    points: [
      "Limited workspaces",
      "Limited deployments",
      "Basic usage",
      "Community support",
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: "$29/mo",
    detail: "For builders who need more power and performance.",
    points: [
      "More workspaces",
      "More deployments",
      "Priority performance",
      "Advanced features",
      "Email support",
    ],
    highlight: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Team / Scale",
    price: "Custom",
    detail: "For teams scaling collaboration and higher usage limits.",
    points: ["Team features", "Higher limits", "Collaboration tools", "Priority support"],
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Pricing
          </p>
          <h1 className="opencodie-page-h1">Simple, transparent pricing</h1>
          <p className="opencodie-page-intro">
            Start building for free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Panel
              key={plan.name}
              className={cn(
                "opencodie-interactive-card opencodie-reveal flex h-full flex-col gap-4 p-5",
                index === 1 ? "opencodie-reveal-delay-1" : "",
                index === 2 ? "opencodie-reveal-delay-2" : "",
                plan.highlight
                  ? "border-[color-mix(in_srgb,var(--opencodie-primary)_52%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_10%,var(--opencodie-bg-panel))] shadow-[0_20px_34px_rgba(15,23,42,0.5)]"
                  : "",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
                  {plan.name}
                </p>
                {plan.highlight ? (
                  <span className="rounded-full border border-[color-mix(in_srgb,var(--opencodie-primary)_55%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-primary)_22%,var(--opencodie-bg-elevated))] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--opencodie-text)]">
                    Popular
                  </span>
                ) : null}
              </div>
              <h2 className="text-3xl">{plan.price}</h2>
              <p className="text-sm">{plan.detail}</p>
              <ul className="mt-1 space-y-2 text-sm text-[var(--opencodie-text-muted)]">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={
                  plan.name === "Team / Scale"
                    ? siteConfig.portal.loginUrl
                    : siteConfig.portal.getStartedUrl
                }
                className={buttonClasses(plan.highlight ? "primary" : "secondary", "mt-auto w-full")}
              >
                {plan.cta}
              </Link>
            </Panel>
          ))}
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Why Pricing Is Simple
            </p>
            <h2 className="opencodie-page-h2">No hidden complexity</h2>
            <p className="text-sm md:text-base">
              With OpenCodie, you do not pay for separate hosting, multiple services,
              or complex infrastructure management.
            </p>
            <p className="text-sm font-medium text-[var(--opencodie-text)]">Everything is included.</p>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 flex h-full flex-col gap-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Cost Comparison
            </p>
            <h3 className="opencodie-page-h2">Build more for less</h3>
            <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
              {[
                "cheaper than combining multiple tools",
                "no DevOps overhead",
                "no setup costs",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--opencodie-text)]">
              Compared to traditional stacks, OpenCodie keeps total cost and complexity lower.
            </p>
          </Panel>
        </div>
      </section>

      <section className="opencodie-page-section">
        <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Billing
          </p>
          <h2 className="opencodie-page-h2">Flexible billing</h2>
          <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
            {["Upgrade anytime", "Cancel anytime", "Transparent usage"].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                {point}
              </li>
            ))}
          </ul>
        </Panel>

        <p className="mt-8 max-w-4xl text-sm text-[var(--opencodie-text-muted)] opencodie-reveal">
          OpenCodie is a modern development platform designed for building, running,
          and deploying applications in a single environment.
        </p>
      </section>

      <MainCtaSection className="pt-8 md:pt-10" />
    </>
  );
}
