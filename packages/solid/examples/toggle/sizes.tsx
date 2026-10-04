/** @jsxImportSource solid-js */
import { Toggle } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
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
