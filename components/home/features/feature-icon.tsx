type FeatureIconName =
  | "workspace"
  | "preview"
  | "ai"
  | "deploy"
  | "database"
  | "team"
  | "billing"
  | "terminal"
  | "flow"
  | "platform";

type FeatureIconProps = {
  name: FeatureIconName;
  className?: string;
};

export function FeatureIcon({ name, className = "h-4 w-4" }: FeatureIconProps) {
  if (name === "workspace") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="7" cy="6.5" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  if (name === "preview") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "deploy") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" />
        <path d="m7.5 8.5 4.5-4.5 4.5 4.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="4" y="16" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <ellipse cx="12" cy="6.5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 6.5v9c0 1.7 3.1 3 7 3s7-1.3 7-3v-9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 11.5c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "terminal") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8 10 3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 15h3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c.8-2.5 3-4 5.5-4s4.7 1.5 5.5 4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14.5 18.8c.4-1.7 1.8-2.9 3.5-3.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "billing") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 14h4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "flow") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="3" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="9" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 7h6M12 10v4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
