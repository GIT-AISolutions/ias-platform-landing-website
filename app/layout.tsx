import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { PageShell } from "@/components/layout/page-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollRevealProvider } from "@/components/ui/scroll-reveal-provider";
import "./globals.css";

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "OpenCodie | Deploy apps like Vercel. Own everything like Coolify.",
  description:
    "Keep coding in VS Code with AI. OpenCodie handles deployment, infrastructure, logs, databases, and updates on your own server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden antialiased">
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
