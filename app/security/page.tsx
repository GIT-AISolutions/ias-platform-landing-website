import { MainCtaSection } from "@/components/home/main-cta-section";
import { Panel } from "@/components/ui/panel";

const controls = [
  {
    title: "Access Governance",
    description: "Role-based permissions, organization scopes, and audit visibility.",
  },
  {
    title: "Data Protection",
    description: "Encrypted data paths with environment-level isolation boundaries.",
  },
  {
    title: "Operational Audit",
    description: "Track release actions, workspace events, and admin operations.",
  },
  {
    title: "Compliance Posture",
    description: "Placeholder controls for SOC 2, GDPR, and enterprise review workflows.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="opencodie-page-hero">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Security
          </p>
          <h1 className="opencodie-page-h1">
            Platform controls for serious production workloads
          </h1>
          <p className="opencodie-page-intro">
            Security and governance placeholders showing how OpenCodie can present
            trust-critical details outside the homepage.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {controls.map((item, index) => (
            <Panel
              key={item.title}
              className={`opencodie-interactive-card opencodie-reveal space-y-3 p-5 ${index % 2 === 1 ? "opencodie-reveal-delay-1" : ""}`}
            >
              <h2 className="text-2xl">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </Panel>
          ))}
        </div>
      </section>

      <MainCtaSection />
    </>
  );
}
