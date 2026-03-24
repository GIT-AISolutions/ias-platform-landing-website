import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Status = "info" | "success" | "warning" | "danger";

type StatusBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status?: Status;
};

const statusClasses: Record<Status, string> = {
  info: "nexra-badge-info",
  success: "nexra-badge-success",
  warning: "nexra-badge-warning",
  danger: "nexra-badge-danger",
};

export function StatusBadge({
  status = "info",
  className,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn("nexra-badge", statusClasses[status], className)}
      {...props}
    />
  );
}
