import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const footerNavigation = [{ label: "Home", href: "/" }, ...siteConfig.navigation];

  return (
    <footer className="mt-6 border-t border-[color-mix(in_srgb,var(--nexra-border)_78%,var(--nexra-accent))] bg-[color-mix(in_srgb,var(--nexra-bg-base)_62%,transparent)]">
      <div className="nexra-container py-10 md:py-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--nexra-accent)_52%,var(--nexra-border))] bg-[color-mix(in_srgb,var(--nexra-accent)_15%,var(--nexra-bg-elevated))] text-xs font-semibold text-[var(--nexra-accent)]">
                NX
              </span>
              <div className="leading-tight">
                <span className="block text-base font-semibold tracking-tight text-[var(--nexra-text)]">
                  {siteConfig.name}
                </span>
                <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-[var(--nexra-text-muted)]">
                  Build to production
                </span>
              </div>
            </Link>
            <p className="max-w-2xl text-sm">{siteConfig.shortDescription}</p>
            <p className="max-w-2xl text-sm">{siteConfig.seoFooterText}</p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.14em] text-[var(--nexra-text-muted)]">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--nexra-text-muted)] transition-colors hover:text-[var(--nexra-text)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.14em] text-[var(--nexra-text-muted)]">
              Legal & Support
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--nexra-text-muted)]">
              <li>
                <Link href="/security" className="transition-colors hover:text-[var(--nexra-text)]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[var(--nexra-text)]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[var(--nexra-text)]">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--nexra-border)]/70 pt-4 text-xs text-[var(--nexra-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{year} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--nexra-accent)_72%,var(--nexra-text-muted))]">
            System status: Operational
          </p>
        </div>
      </div>
    </footer>
  );
}
