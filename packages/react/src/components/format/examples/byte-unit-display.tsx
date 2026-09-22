import { Format } from "..";

export function ByteUnitDisplay() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-muted-foreground text-sm">Long: </span>
        <Format.Byte unitDisplay="long" value={1_500_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Short: </span>
        <Format.Byte unitDisplay="short" value={1_500_000} />
      </div>
      <div>
        <span className="text-muted-foreground text-sm">Narrow: </span>
        <Format.Byte unitDisplay="narrow" value={1_500_000} />
      </div>
    </div>
  );
}
