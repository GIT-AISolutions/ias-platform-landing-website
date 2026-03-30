import { CoreCapabilitiesSection } from "@/components/home/features/core-capabilities-section";
import { InfrastructureSection } from "@/components/home/features/infrastructure-section";
import { WorkflowSection } from "@/components/home/features/workflow-section";
import { HeroSection } from "@/components/home/hero-section";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { ProductPreviewSection } from "@/components/home/product-preview-section";
import { Panel } from "@/components/ui/panel";

const whyPoints = [
  "Full-stack support",
  "Production deployments",
  "Scalable architecture",
  "Built for SaaS development",
];

const costItems = [
  "separate hosting platforms",
  "external deployment tools",
  "complex cloud configurations",
  "multiple subscriptions",
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="opencodie-band-dark">
        <div className="opencodie-page-section">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Value Proposition
            </p>
            <h2 className="text-3xl md:text-5xl">From idea to live app in minutes</h2>
            <p className="max-w-3xl text-base md:text-lg">
              Build your application from start to finish in one connected workflow.
              Write code, see changes instantly, connect your backend, and deploy
              without leaving the platform.
            </p>
          </div>
        </div>
      </section>

      <CoreCapabilitiesSection />
      <InfrastructureSection />

      <section className="opencodie-band-dark">
        <div className="opencodie-section pb-10 pt-8 md:pb-12 md:pt-10">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                Why OpenCodie
              </p>
              <h2 className="text-3xl md:text-4xl">
                Built for real applications - not just experiments
              </h2>
              <p className="text-sm md:text-base">
                Unlike traditional development tools, OpenCodie is designed for complete,
                production-ready applications. You are not just writing code; you are
                building real products.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {whyPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] px-3 py-2.5 text-sm text-[var(--opencodie-text-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>

            <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                Development Platform
              </p>
              <h3 className="text-2xl md:text-3xl">Build and deploy apps in one flow</h3>
              <p className="text-sm md:text-base">
                OpenCodie gives you a browser-based development platform for full-stack
                development, SaaS development, and instant deployment workflows.
              </p>
              <p className="text-sm md:text-base">
                From coding environment online to backend and database integration,
                everything stays connected.
              </p>
            </Panel>
          </div>
        </div>
      </section>

      <WorkflowSection />

      <section className="opencodie-band-dark">
        <div className="opencodie-section pb-10 pt-0 md:pb-12">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                Less Tools. Lower Costs.
              </p>
              <h2 className="text-3xl md:text-4xl">Everything is built in.</h2>
              <p className="text-sm md:text-base">
                Stop paying for multiple services and managing complex infrastructure.
                With OpenCodie, your development and deployment workflow runs in one system.
              </p>
              <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
                {costItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                Team Collaboration
              </p>
              <h3 className="text-2xl md:text-3xl">Built for developers and teams</h3>
              <p className="text-sm md:text-base">
                Collaborate on projects, manage environments, and build together in
                one shared platform.
              </p>
              <p className="text-sm md:text-base">
                Keep coding, runtime, backend, and deployment in one workspace model
                for faster alignment across product and engineering teams.
              </p>
            </Panel>
          </div>
        </div>
      </section>

      <ProductPreviewSection />

      <MainCtaSection />
    </>
  );
}
