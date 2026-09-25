import { Format } from "..";

export function NumberPercent() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Default: </span>
        <Format.Number style="percent" value={0.75} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">With decimals: </span>
        <Format.Number
          minimumFractionDigits={2}
          style="percent"
          value={0.7567}
        />
      </div>
    </div>
  );
}
