import { MainCtaSection } from "@/components/home/main-cta-section";
import { Panel } from "@/components/ui/panel";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    topic: "Platform",
    question: "What is OpenCodie?",
    answer:
      "OpenCodie is a development platform that lets you build, run, and deploy applications in one place.",
  },
  {
    topic: "Setup",
    question: "Do I need to install anything?",
    answer: "No. OpenCodie runs entirely in your browser.",
  },
  {
    topic: "Deployments",
    question: "Can I deploy apps directly?",
    answer: "Yes. You can deploy your app instantly with one click.",
  },
  {
    topic: "Databases",
    question: "Does OpenCodie support databases?",
    answer:
      "Yes. You can create and connect databases directly within the platform.",
  },
  {
    topic: "AI",
    question: "What AI tools are supported?",
    answer: "OpenCodie supports OpenAI, Claude, and Meta AI integrations.",
  },
  {
    topic: "Production",
    question: "Is OpenCodie suitable for production apps?",
    answer:
      "Yes. OpenCodie is designed for building real, production-ready applications.",
  },
  {
    topic: "Positioning",
    question: "How is this different from other platforms?",
    answer:
      "OpenCodie combines development, infrastructure, and deployment into one connected system, reducing complexity and cost.",
  },
  {
    topic: "Full-stack",
    question: "Can I build full-stack apps?",
    answer: "Yes. OpenCodie supports both frontend and backend development.",
  },
  {
    topic: "Pricing",
    question: "Is OpenCodie free?",
    answer: "You can start for free, with paid plans available for advanced usage.",
  },
  {
    topic: "Audience",
    question: "Who is OpenCodie for?",
    answer:
      "OpenCodie is built for developers, startups, and teams building modern applications.",
  },
];

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
            Find clear answers about product capabilities, platform workflows, and
            operating OpenCodie in production.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => (
            <Panel
              key={item.question}
              className={cn(
                "opencodie-interactive-card opencodie-reveal p-4 sm:p-5",
                index % 3 === 1 ? "opencodie-reveal-delay-1" : "",
                index % 3 === 2 ? "opencodie-reveal-delay-2" : "",
              )}
            >
              <details
                open={index === 0}
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--opencodie-border)] bg-[var(--opencodie-bg-elevated)] text-[0.65rem] font-semibold tracking-[0.1em] text-[var(--opencodie-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--opencodie-text-muted)]">
                      {item.topic}
                    </p>
                    <h2 className="text-lg sm:text-xl">{item.question}</h2>
                  </div>
                  <span className="mt-1 text-sm font-semibold text-[var(--opencodie-accent)] transition-transform duration-[180ms] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:pl-10">{item.answer}</p>
              </details>
            </Panel>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm text-[var(--opencodie-text-muted)] opencodie-reveal">
          OpenCodie is a modern development platform designed for building, running,
          and deploying applications in a single environment.
        </p>
      </section>

      <MainCtaSection className="pt-8 md:pt-10" />
    </>
  );
}
