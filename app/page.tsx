import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  "No DevOps required",
  "Runs on your own server",
  "Works with VS Code + AI",
  "No vendor lock-in",
];

const solutionItems = [
  "Deployments",
  "Infrastructure",
  "Logs",
  "Databases",
  "Environment setup",
];

const workflowSteps = [
  {
    step: "1",
    title: "Code locally",
    copy: "Use VS Code, your terminal, and any AI model (Codex, Gemini, Claude).",
  },
  {
    step: "2",
    title: "Connect your project",
    copy: "Link your repo or project to OpenCodie.",
  },
  {
    step: "3",
    title: "Deploy instantly",
    copy: "OpenCodie builds and runs your app on your server.",
  },
];

const whyItems = [
  {
    title: "No vendor lock-in",
    copy: "Your app runs on your own infrastructure.",
  },
  {
    title: "No DevOps needed",
    copy: "No configs, no pipelines, no setup.",
  },
  {
    title: "Works with your tools",
    copy: "VS Code, Git, terminal, and AI tools.",
  },
  {
    title: "Built for AI development",
    copy: "Fits modern coding workflows from day one.",
  },
];

const includes = [
  "Deployments",
  "Databases",
  "Environment variables",
  "Logs & debugging",
  "Updates & redeploys",
];

export default function Home() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="grid gap-6 2xl:grid-cols-[1.05fr_0.95fr] 2xl:items-end">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              OpenCodie Developer Platform
            </p>
            <h1 className="opencodie-page-h1">
              Deploy apps like Vercel.
              <br />
              Own everything like Coolify.
            </h1>
            <p className="opencodie-page-intro">
              Keep coding in VS Code with AI. OpenCodie handles deployment,
              infrastructure, and everything in between.
            </p>
            <p className="text-base font-medium text-[var(--opencodie-text)] md:text-lg">
              You build. We run it.
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

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
              Core Positioning
            </p>
            <h2 className="text-2xl md:text-3xl">
              Local development + AI + instant deployment + full ownership
            </h2>
            <p className="text-sm md:text-base">
              You keep your local workflow. OpenCodie removes the operational layer
              and runs your app on infrastructure you control.
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                "You work locally",
                "OpenCodie handles DevOps",
                "You own infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_74%,transparent)] px-3 py-2 text-xs font-medium text-[var(--opencodie-text)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel className="opencodie-reveal opencodie-reveal-delay-2 mt-8 p-4 md:p-5">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_72%,transparent)] px-3 py-2.5 text-sm font-medium text-[var(--opencodie-text)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="opencodie-band-dark">
        <div className="opencodie-section">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl">Deploying apps shouldn’t be this hard</h2>
            <p className="max-w-3xl text-base md:text-lg">
              Setting up infrastructure, configuring deployments, managing environments
              - it slows you down.
            </p>
            <p className="text-base font-medium text-[var(--opencodie-text)] md:text-lg">
              You just want to build and ship.
            </p>
          </div>
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 2xl:grid-cols-[1.08fr_0.92fr]">
          <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              The Solution
            </p>
            <h2 className="text-3xl md:text-4xl">OpenCodie removes the DevOps layer</h2>
            <p className="text-sm md:text-base">
              You keep your workflow. VS Code, terminal, AI tools - nothing changes.
            </p>
            <p className="text-sm md:text-base">
              OpenCodie takes care of the operational work so you can ship faster.
            </p>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 p-5 md:p-6">
            <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
              {solutionItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      <section className="opencodie-band-dark">
        <div className="opencodie-section">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl">From code to production in minutes</h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {workflowSteps.map((item, index) => (
              <Panel
                key={item.step}
                className={`opencodie-interactive-card opencodie-reveal space-y-3 p-5 ${index === 1 ? "opencodie-reveal-delay-1" : ""} ${index === 2 ? "opencodie-reveal-delay-2" : ""}`}
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
                  Step {item.step}
                </p>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-sm">{item.copy}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Why OpenCodie
          </p>
          <h2 className="text-3xl md:text-5xl">Why developers choose OpenCodie</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {whyItems.map((item, index) => (
            <Panel
              key={item.title}
              className={`opencodie-interactive-card opencodie-reveal space-y-2 p-5 ${index % 2 === 1 ? "opencodie-reveal-delay-1" : ""}`}
            >
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-sm">{item.copy}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="opencodie-band-dark">
        <div className="opencodie-section">
          <div className="opencodie-section-heading opencodie-reveal">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              What You Get
            </p>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item, index) => (
              <div
                key={item}
                className={`opencodie-interactive-card opencodie-reveal rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_74%,transparent)] px-3 py-2.5 text-sm text-[var(--opencodie-text)] ${index === 1 || index === 4 ? "opencodie-reveal-delay-1" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="opencodie-page-section">
        <Panel className="opencodie-reveal space-y-3 p-5 md:p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Control
          </p>
          <h2 className="text-3xl md:text-4xl">You stay in control</h2>
          <p className="text-sm md:text-base">Your code runs on your server.</p>
          <p className="text-sm md:text-base">Your data stays yours.</p>
          <p className="text-sm md:text-base">You can leave anytime.</p>
        </Panel>
      </section>

      <MainCtaSection />
    </>
  );
}
