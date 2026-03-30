import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type MainCtaSectionProps = {
  className?: string;
};

export function MainCtaSection({ className }: MainCtaSectionProps) {
  return (
    <section id="pricing" className="opencodie-band-dark">
      <div className={cn("opencodie-section pb-0 pt-10 md:pt-14", className)}>
        <Panel className="opencodie-light-sweep relative overflow-hidden p-0 opencodie-reveal">
          <div className="opencodie-grid-drift opencodie-mesh-float absolute inset-0 bg-[linear-gradient(to_right,rgba(37,50,74,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,50,74,0.32)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="opencodie-ambient-drift absolute -right-24 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.18)_0%,_rgba(99,102,241,0)_70%)]" />
          <div className="opencodie-ambient-drift opencodie-ambient-drift-delay absolute -left-16 -bottom-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.12)_0%,_rgba(34,211,238,0)_70%)]" />

          <div className="relative grid gap-8 px-5 py-9 sm:px-6 md:px-10 md:py-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--opencodie-accent)]">
                Final CTA
              </p>
              <h2 className="opencodie-heading-accent max-w-2xl text-3xl sm:text-4xl md:text-5xl">
                Build faster. Ship earlier. Stay in flow.
              </h2>
              <p className="max-w-2xl text-base md:text-lg">
                Build, run, and deploy full-stack applications without setup,
                tool switching, or infrastructure complexity.
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={siteConfig.portal.getStartedUrl}
                className={buttonClasses("primary", "w-full sm:w-auto")}
              >
                Start building
              </Link>
              <Link
                href={siteConfig.portal.getStartedUrl}
                className={buttonClasses("secondary", "w-full sm:w-auto")}
              >
                Get started
              </Link>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
