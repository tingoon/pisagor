import { Format } from "..";

export function RelativeTimeShort() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Long: </span>
        <Format.RelativeTime style="long" value={new Date("2025-05-05")} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Short: </span>
        <Format.RelativeTime style="short" value={new Date("2025-05-05")} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Narrow: </span>
        <Format.RelativeTime style="narrow" value={new Date("2025-05-05")} />
      </div>
    </div>
  );
}
