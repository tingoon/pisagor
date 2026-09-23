import { Toggle } from "..";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="ghost">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  );
}
