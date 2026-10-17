import source from "./byte.tsx?raw";
import { Format } from "@pisagor/solid";

export function Byte() {
  return (
    <div class="flex flex-col gap-1">
      <span class="text-muted-foreground text-sm">File size</span>
      <span class="text-foreground text-2xl font-semibold tracking-tight tabular-nums">
        <Format.Byte value={120_000} />
      </span>
    </div>
  );
}

export { source as ByteSource };
