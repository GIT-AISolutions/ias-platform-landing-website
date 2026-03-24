"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { buttonClasses } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const primaryNavigation = [{ label: "Home", href: "/" }, ...siteConfig.navigation];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--nexra-border)]/80 bg-[color-mix(in_srgb,var(--nexra-bg-base)_72%,transparent)] backdrop-blur-xl">
      <div className="nexra-container py-3 md:py-0">
        <div className="flex min-h-12 items-center justify-between gap-3 md:h-20 md:gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--nexra-border)] bg-[var(--nexra-bg-elevated)] text-xs font-semibold text-[var(--nexra-accent)]">
              NX
            </span>
            <span className="text-base font-semibold tracking-tight text-[var(--nexra-text)] md:text-lg">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {primaryNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--nexra-text-muted)] transition-colors duration-[180ms] hover:text-[var(--nexra-text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex md:gap-3">
            <Link
              href={siteConfig.portal.loginUrl}
              className={buttonClasses("secondary", "px-3 py-2 text-xs sm:text-sm md:px-4 md:py-2.5")}
            >
              Log in
            </Link>
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "px-3 py-2 text-xs sm:text-sm md:px-4 md:py-2.5")}
            >
              Get started
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "px-3 py-2 text-xs")}
            >
              Get started
            </Link>

            <button
              type="button"
              aria-controls={mobileMenuId}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--nexra-border)] bg-[color-mix(in_srgb,var(--nexra-bg-elevated)_75%,transparent)] text-[var(--nexra-text)] transition-colors duration-[180ms] hover:border-[color-mix(in_srgb,var(--nexra-accent)_30%,var(--nexra-border))]"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[2px] w-4 rounded-full bg-current transition-transform duration-200",
                    isMenuOpen ? "translate-y-[6px] rotate-45" : "",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[6px] h-[2px] w-4 rounded-full bg-current transition-opacity duration-200",
                    isMenuOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[12px] h-[2px] w-4 rounded-full bg-current transition-transform duration-200",
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : "",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id={mobileMenuId}
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 md:hidden",
            isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="min-h-0">
            <nav
              className="mt-3 space-y-2 rounded-2xl border border-[var(--nexra-border)] bg-[color-mix(in_srgb,var(--nexra-bg-elevated)_76%,transparent)] p-3"
              aria-label="Mobile primary"
            >
              {primaryNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-[var(--nexra-text-muted)] transition-colors duration-[180ms] hover:border-[var(--nexra-border)] hover:text-[var(--nexra-text)]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex items-center gap-2 border-t border-[var(--nexra-border)] pt-3">
                <Link
                  href={siteConfig.portal.loginUrl}
                  onClick={() => setIsMenuOpen(false)}
                  className={buttonClasses("secondary", "flex-1 px-3 py-2 text-xs")}
                >
                  Log in
                </Link>
                <Link
                  href={siteConfig.portal.getStartedUrl}
                  onClick={() => setIsMenuOpen(false)}
                  className={buttonClasses("primary", "flex-1 px-3 py-2 text-xs")}
                >
                  Get started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
