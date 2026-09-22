import { Format } from "..";

export function NumberCompact() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">1.2M: </span>
        <Format.Number notation="compact" value={1_200_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">120K: </span>
        <Format.Number notation="compact" value={120_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Downloads: </span>
        <Format.Number notation="compact" value={1_234_567} />
        <span className="text-muted-foreground text-sm"> per month</span>
      </div>
    </div>
  );
}
