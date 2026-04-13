import type { Metadata } from "next";
import { MainCtaSection } from "@/components/home/main-cta-section";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Security | OpenCodie",
  description:
    "Security and governance overview for OpenCodie, including access control, data protection, and operational audit visibility.",
};

const controls = [
  {
    title: "Access Control",
    description:
      "Role-based permissions and organization-level boundaries for teams and shared projects.",
  },
  {
    title: "Data Protection",
    description:
      "Encrypted data paths and environment isolation to keep project boundaries clear.",
  },
  {
    title: "Operational Audit",
    description:
      "Track deployments, environment changes, and key admin actions with clear event history.",
  },
  {
    title: "Compliance Readiness",
    description:
      "Security controls and documentation patterns designed to support vendor and compliance reviews.",
  },
] as const;

export default function SecurityPage() {
  return (
    <>
      <section className="opencodie-page-hero opencodie-overview">
        <div className="opencodie-section-heading opencodie-reveal">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
            Security
          </p>
          <h1 className="opencodie-page-h1">
            Security controls for production workloads
          </h1>
          <p className="opencodie-page-intro">
            OpenCodie is designed for teams that need fast delivery with clear
            operational and governance controls.
          </p>
        </div>

        <div className="opencodie-stack-md grid gap-4 sm:grid-cols-2">
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
