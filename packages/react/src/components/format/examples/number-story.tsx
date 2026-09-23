import { Format } from "..";

export function NumberStory() {
  return (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-muted-foreground text-sm">Downloads</span>
      <span className="font-medium text-foreground tabular-nums tracking-tight">
        <Format.Number value={1_234_567} />
      </span>
      <span className="text-muted-foreground text-sm">per month</span>
    </div>
  );
}
