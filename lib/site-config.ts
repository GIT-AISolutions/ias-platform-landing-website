type NavItem = {
  label: string;
  href: string;
};

const portalBaseUrl = process.env.NEXT_PUBLIC_NEXRA_PORTAL_URL?.trim();

function resolvePortalUrl(path: string) {
  if (!portalBaseUrl) {
    return "#";
  }

  try {
    return new URL(path, portalBaseUrl).toString();
  } catch {
    return "#";
  }
}

export const siteConfig = {
  name: "OpenCodie",
  shortDescription:
    "Deploy apps like Vercel. Own everything like Coolify. Keep coding locally while OpenCodie handles deployment and infrastructure on your own server.",
  seoFooterText:
    "OpenCodie is a developer platform for local development with AI, instant deployment, and full infrastructure ownership. Build in VS Code and terminal, then deploy to your own server without DevOps overhead.",
  navigation: [
    { label: "Features", href: "/features" },
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ] satisfies NavItem[],
  portal: {
    baseUrl: portalBaseUrl ?? "",
    loginUrl: resolvePortalUrl("/login"),
    getStartedUrl: resolvePortalUrl("/signup"),
  },
} as const;
