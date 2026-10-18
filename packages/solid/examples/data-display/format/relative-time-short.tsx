import { Format } from "@pisagor/solid";

export function RelativeTimeShort() {
  return (
    <div class="flex flex-col gap-2">
      <div>
        <span class="text-muted-foreground text-sm">Long: </span>
        <Format.RelativeTime style="long" value={new Date("2025-05-05")} />
      </div>
      <div>
        <span class="text-muted-foreground text-sm">Short: </span>
        <Format.RelativeTime style="short" value={new Date("2025-05-05")} />
      </div>
      <div>
        <span class="text-muted-foreground text-sm">Narrow: </span>
        <Format.RelativeTime style="narrow" value={new Date("2025-05-05")} />
      </div>
    </div>
  );
}
