import { Format } from "@pisagor/react";

export function RelativeTime() {
  return (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-muted-foreground text-sm">Last updated</span>
      <span className="text-foreground font-medium tracking-tight tabular-nums">
        <Format.RelativeTime value={new Date("2025-05-05")} />
      </span>
    </div>
  );
}
