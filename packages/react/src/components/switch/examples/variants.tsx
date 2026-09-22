import { Switch } from "..";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Switch variant="primary" />
      <Switch variant="secondary" />
    </div>
  );
}
