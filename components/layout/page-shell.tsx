import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(140deg,rgba(10,22,37,0.76)_0%,rgba(8,17,30,0.4)_38%,rgba(7,14,27,0.84)_100%)]" />
      <div className="opencodie-ambient-drift opencodie-mesh-float pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_14%,rgba(52,209,191,0.10)_0%,transparent_34%),radial-gradient(circle_at_88%_8%,rgba(255,122,24,0.14)_0%,transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[22rem] bg-[radial-gradient(ellipse_at_top,rgba(52,209,191,0.09)_0%,rgba(4,9,16,0)_70%)]" />
      <div className="opencodie-ambient-drift opencodie-ambient-drift-delay pointer-events-none absolute -top-72 left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(24,52,85,0.45)_0%,rgba(24,52,85,0)_70%)]" />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}
