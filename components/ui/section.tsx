import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement>;

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("nexra-section", className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("nexra-section-heading", className)} {...props}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--nexra-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl md:text-5xl">{title}</h1>
      {description ? <p className="max-w-2xl text-base md:text-lg">{description}</p> : null}
    </div>
  );
}
