import type { Metadata } from "next";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "FAQ | OpenCodie",
  description:
    "Frequently asked questions about OpenCodie, local development, AI workflow, and deployment on your own server.",
};

const faqItems = [
  {
    question: "What is OpenCodie?",
    answer:
      "OpenCodie is a developer platform that lets you keep coding locally while it handles deployment, infrastructure, and runtime operations.",
  },
  {
    question: "Do I need DevOps?",
    answer:
      "No. OpenCodie is built for developers who want to ship without managing DevOps complexity.",
  },
  {
    question: "Where does my app run?",
    answer:
      "Your app runs on your own server. You keep full infrastructure ownership.",
  },
  {
    question: "Can I use AI tools?",
    answer:
      "Yes. OpenCodie fits AI-first workflows with tools like Codex, Gemini, and Claude.",
  },
  {
    question: "Do I code in the browser?",
    answer:
      "No. You work locally in VS Code and terminal, then deploy through OpenCodie.",
  },
  {
    question: "Is this like Vercel?",
    answer:
      "OpenCodie gives a Vercel-like deployment experience, but with infrastructure ownership similar to Coolify.",
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            FAQ
          </p>
          <h1 className="opencodie-page-h1">Frequently asked questions</h1>
          <p className="opencodie-page-intro">
            Short answers to the most common questions before you start.
          </p>
        </div>

        <div className="opencodie-stack-md space-y-3">
          {faqItems.map((item, index) => (
            <Panel
              key={item.question}
              className={index === 1 || index === 3 || index === 5 ? "opencodie-interactive-card opencodie-reveal opencodie-reveal-delay-1 p-4 sm:p-5" : "opencodie-interactive-card opencodie-reveal p-4 sm:p-5"}
            >
              <details open={index === 0} className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] text-[0.65rem] font-semibold tracking-[0.1em] text-[var(--opencodie-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="min-w-0 flex-1 text-lg sm:text-xl">{item.question}</h2>
                  <span className="mt-1 text-sm font-semibold text-[var(--opencodie-accent)] transition-transform duration-[180ms] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:pl-10">{item.answer}</p>
              </details>
            </Panel>
          ))}
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
