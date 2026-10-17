import source from "./relative-time.tsx?raw";
import { Format } from "@pisagor/solid";

export function RelativeTime() {
  return (
    <div class="inline-flex items-baseline gap-1">
      <span class="text-muted-foreground text-sm">Last updated</span>
      <span class="text-foreground font-medium tracking-tight tabular-nums">
        <Format.RelativeTime value={new Date("2025-05-05")} />
      </span>
    </div>
  );
}

export { source as RelativeTimeSource };
