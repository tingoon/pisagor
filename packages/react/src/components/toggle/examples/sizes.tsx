import { Toggle } from "..";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" variant="outline">
        Small
      </Toggle>
      <Toggle size="md" variant="outline">
        Medium
      </Toggle>
      <Toggle size="lg" variant="outline">
        Large
      </Toggle>
    </div>
  );
}
