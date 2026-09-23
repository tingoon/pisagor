import { Stat } from "..";

export function Variants() {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      <Stat label="Default" value="2,404" variant="default" />
      <Stat label="Muted" value="2,404" variant="muted" />
      <Stat label="Outline" value="2,404" variant="outline" />
    </div>
  );
}
