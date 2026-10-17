import { Format } from "@pisagor/react";

export function Default() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-sm">File size</span>
      <span className="text-foreground text-2xl font-semibold tracking-tight tabular-nums">
        <Format.Byte value={120_000} />
      </span>
    </div>
  );
}
