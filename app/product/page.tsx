import type { Metadata } from "next";
import Link from "next/link";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Product | OpenCodie",
  description:
    "From local development to production in minutes. OpenCodie handles deployment and infrastructure while your app runs on your own server.",
};

const flow = [
  {
    step: "1",
    title: "Develop locally",
    copy: "Write code in VS Code using AI (Codex, Gemini, Claude, and others).",
  },
  {
    step: "2",
    title: "Connect project",
    copy: "Link your project or repository to OpenCodie.",
  },
  {
    step: "3",
    title: "Deploy",
    copy: "OpenCodie builds and runs your app on your server.",
  },
] as const;

const handledByPlatform = [
  "Deployment pipeline",
  "Infrastructure setup",
  "Logs and runtime visibility",
  "Database connections",
  "Updates and redeploys",
];

export default function ProductPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Product
          </p>
          <h1 className="opencodie-page-h1">
            From local development to production in minutes
          </h1>
          <p className="opencodie-page-intro">
            Keep your local workflow. OpenCodie handles the operational layer and
            runs your app where you control the infrastructure.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "w-full sm:w-auto")}
            >
              Get started
            </Link>
            <Link
              href="/pricing"
              className={buttonClasses("secondary", "w-full sm:w-auto")}
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="opencodie-band-dark">
        <div className="opencodie-section">
        <div className="grid gap-4 lg:grid-cols-3">
            {flow.map((item, index) => (
              <Panel
                key={item.step}
                className={index === 1 ? "opencodie-reveal opencodie-reveal-delay-1 space-y-3 p-5 md:p-6" : index === 2 ? "opencodie-reveal opencodie-reveal-delay-2 space-y-3 p-5 md:p-6" : "opencodie-reveal space-y-3 p-5 md:p-6"}
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-accent)]">
                  Step {item.step}
                </p>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-sm md:text-base">{item.copy}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="opencodie-page-section">
        <div className="grid gap-4 2xl:grid-cols-[1fr_1fr]">
          <Panel className="opencodie-reveal space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              Platform Ownership
            </p>
            <h2 className="opencodie-page-h2">
              Your app runs on your own server - you stay in control.
            </h2>
            <p className="text-sm md:text-base">
              OpenCodie does not lock your app into proprietary infrastructure.
              You own where it runs and how you operate it.
            </p>
          </Panel>

          <Panel className="opencodie-reveal opencodie-reveal-delay-1 space-y-4 p-5 md:p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
              OpenCodie Handles
            </p>
            <ul className="space-y-2 text-sm text-[var(--opencodie-text-muted)]">
              {handledByPlatform.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--opencodie-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
