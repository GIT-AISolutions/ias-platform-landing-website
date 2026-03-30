import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Status = "info" | "success" | "warning" | "danger";

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status?: Status;
};

const statusClasses: Record<Status, string> = {
  info: "opencodie-badge-info",
  success: "opencodie-badge-success",
  warning: "opencodie-badge-warning",
  danger: "opencodie-badge-danger",
};

export function StatusBadge({
  status = "info",
  className,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn("opencodie-badge", statusClasses[status], className)}
      {...props}
    />
  );
}
