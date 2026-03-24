import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollRevealProvider } from "@/components/ui/scroll-reveal-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexra",
  description: "Foundational landing page design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col overflow-x-hidden antialiased bg-[radial-gradient(circle_at_top_left,_#1e293b_0%,_#0f172a_42%,_#020617_100%)]">
        <ScrollRevealProvider />
        <PageShell>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </PageShell>
      </body>
    </html>
  );
}
