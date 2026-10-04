/** @jsxImportSource solid-js */
import { Surface } from "@pisagor/solid";

export function Padding() {
  return (
    <div class="flex flex-col gap-2">
      <Surface bordered class="text-sm" padding="sm" variant="secondary">
        Small padding
      </Surface>
      <Surface bordered class="text-sm" padding="md" variant="secondary">
        Medium padding
      </Surface>
      <Surface bordered class="text-sm" padding="lg" variant="secondary">
        Large padding
      </Surface>
    </div>
  );
}
