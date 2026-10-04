/** @jsxImportSource solid-js */
import { Format } from "@pisagor/solid/format";

export function RelativeTime() {
  return (
    <div class="inline-flex items-baseline gap-1">
      <span class="text-muted-foreground text-sm">Last updated</span>
      <span class="font-medium text-foreground tabular-nums tracking-tight">
        <Format.RelativeTime value={new Date("2025-05-05")} />
      </span>
    </div>
  );
}
