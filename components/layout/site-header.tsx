"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { buttonClasses } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = useId();
  const primaryNavigation = [{ label: "Home", href: "/" }, ...siteConfig.navigation];
  const isActiveLink = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 md:px-6 xl:px-8">
      <div className="opencodie-nav-shell mx-auto w-full max-w-[1380px] rounded-2xl">
        <div className="flex min-h-12 items-center justify-between gap-3 px-3 py-2 md:min-h-20 md:gap-4 md:px-5">
          <Link href="/" className="flex items-center gap-3 rounded-xl px-2 py-1">
            <Image
              src={siteConfig.logoPath}
              alt="OpenCodie logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <div className="leading-tight">
              <span className="block text-base font-semibold tracking-tight text-[var(--opencodie-text)] md:text-lg">
                {siteConfig.name}
              </span>
              <span className="hidden text-[0.62rem] uppercase tracking-[0.18em] text-[var(--opencodie-text-muted)] sm:block">
                Engineering platform
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {primaryNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
                className={cn(
                  "opencodie-nav-link text-sm font-medium",
                  isActiveLink(item.href) ? "opencodie-nav-link-active" : "",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex md:gap-3">
            <Link
              href={siteConfig.portal.loginUrl}
              className={buttonClasses(
                "secondary",
                "rounded-xl px-3 py-2 text-xs sm:text-sm md:px-4 md:py-2.5",
              )}
            >
              Log in
            </Link>
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses(
                "primary",
                "rounded-xl px-3 py-2 text-xs sm:text-sm md:px-4 md:py-2.5",
              )}
            >
              Get started
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={siteConfig.portal.getStartedUrl}
              className={buttonClasses("primary", "rounded-xl px-3 py-2 text-xs")}
            >
              Get started
            </Link>

            <button
              type="button"
              aria-controls={mobileMenuId}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_75%,transparent)] text-[var(--opencodie-text)] transition-colors duration-[180ms] hover:border-[color-mix(in_srgb,var(--opencodie-accent)_30%,var(--opencodie-border))]"
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
              className="mx-3 mb-3 mt-2 space-y-2 rounded-2xl border border-[var(--opencodie-border)] bg-[color-mix(in_srgb,var(--opencodie-bg-elevated)_78%,transparent)] p-3"
              aria-label="Mobile primary"
            >
              {primaryNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-xl border border-transparent px-3 py-2 text-sm font-medium transition-colors duration-[180ms]",
                    isActiveLink(item.href)
                      ? "border-[color-mix(in_srgb,var(--opencodie-accent)_38%,var(--opencodie-border))] bg-[color-mix(in_srgb,var(--opencodie-accent)_12%,var(--opencodie-bg-elevated))] text-[var(--opencodie-text)]"
                      : "text-[var(--opencodie-text-muted)] hover:border-[var(--opencodie-border)] hover:text-[var(--opencodie-text)]",
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex items-center gap-2 border-t border-[var(--opencodie-border)] pt-3">
                <Link
                  href={siteConfig.portal.loginUrl}
                  onClick={() => setIsMenuOpen(false)}
                  className={buttonClasses("secondary", "flex-1 rounded-xl px-3 py-2 text-xs")}
                >
                  Log in
                </Link>
                <Link
                  href={siteConfig.portal.getStartedUrl}
                  onClick={() => setIsMenuOpen(false)}
                  className={buttonClasses("primary", "flex-1 rounded-xl px-3 py-2 text-xs")}
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
