/** @jsxImportSource solid-js */
import { Status } from "@pisagor/solid/status";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Status size="sm" variant="info" />
      <Status size="md" variant="info" />
      <Status size="lg" variant="info" />
    </div>
  );
}
