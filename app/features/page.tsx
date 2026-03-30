import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features | OpenCodie",
  description:
    "Everything you need to run apps without DevOps. Deployments, AI workflow, secrets, databases, logs, and safe updates.",
};

const featureSections = [
  {
    title: "Deployments",
    copy: "Deploy from your local workflow in minutes.",
    outcome: "Ship faster without touching CI/CD pipelines.",
  },
  {
    title: "AI workflow",
    copy: "Keep coding in VS Code with Codex, Gemini, Claude, or your preferred model.",
    outcome: "Use AI naturally without changing how you build.",
  },
  {
    title: "Secrets",
    copy: "Manage environment variables and sensitive config safely.",
    outcome: "Protect production settings without manual server edits.",
  },
  {
    title: "Databases",
    copy: "Provision and connect databases without extra setup work.",
    outcome: "Get backend-ready faster with fewer operational tasks.",
  },
  {
    title: "Logs",
    copy: "See runtime logs and deployment output in one place.",
    outcome: "Debug issues quickly and release with confidence.",
  },
  {
    title: "Updates",
    copy: "Roll out changes and redeploy safely when your app evolves.",
    outcome: "Keep production stable while shipping continuously.",
  },
] as const;

export default function FeaturesPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Features
          </p>
          <h1 className="opencodie-page-h1">
            Everything you need to run apps without DevOps
          </h1>
          <p className="opencodie-page-intro">
            You code locally with VS Code, terminal, and AI. OpenCodie handles
            the operational layer.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "w-full sm:w-auto")}
            >
              Get started
            </Link>
            <Link
              href="/product"
              className={buttonClasses("secondary", "w-full sm:w-auto")}
            >
              View product
            </Link>
          </div>
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 md:grid-cols-2">
          {featureSections.map((feature, index) => (
            <Panel
              key={feature.title}
              className={`opencodie-interactive-card opencodie-reveal space-y-3 p-5 md:p-6 ${index % 2 === 1 ? "opencodie-reveal-delay-1" : ""}`}
            >
              <h2 className="text-2xl">{feature.title}</h2>
              <p className="text-sm md:text-base">{feature.copy}</p>
              <p className="text-sm font-medium text-[var(--opencodie-text)]">
                Outcome: {feature.outcome}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
