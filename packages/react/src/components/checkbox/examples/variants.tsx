import { Checkbox } from "..";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Checkbox variant="primary" />
      <Checkbox variant="secondary" />
    </div>
  );
}
