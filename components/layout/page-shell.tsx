import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <div className="nexra-ambient-drift pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(34,211,238,0.06),_transparent_30%)]" />
      <div className="nexra-ambient-drift nexra-ambient-drift-delay pointer-events-none absolute -top-64 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.20)_0%,_rgba(99,102,241,0)_70%)]" />
      <div className="relative flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
