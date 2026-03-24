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
  name: "Nexra",
  shortDescription:
    "Nexra is a modern development platform that combines coding, live preview, backend hosting, database integration, and deployment into one system.",
  seoFooterText:
    "Build full-stack applications directly from the browser without installing tools or managing infrastructure. From SaaS products to backend systems, Nexra provides a complete environment to develop, test, and deploy quickly.",
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
