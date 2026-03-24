import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PanelProps = HTMLAttributes<HTMLDivElement>;

export function Panel({ className, ...props }: PanelProps) {
  return <div className={cn("nexra-panel", className)} {...props} />;
}
