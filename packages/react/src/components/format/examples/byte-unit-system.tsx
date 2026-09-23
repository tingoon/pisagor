import { Format } from "..";

export function ByteUnitSystem() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Decimal (1000): </span>
        <Format.Byte unitSystem="decimal" value={1024} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Binary (1024): </span>
        <Format.Byte unitSystem="binary" value={1024} />
      </div>
    </div>
  );
}
