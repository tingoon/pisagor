/** @jsxImportSource solid-js */
import { Checkbox } from "@pisagor/solid/checkbox";

export function Variants() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Checkbox variant="primary" />
      <Checkbox variant="secondary" />
    </div>
  );
}
