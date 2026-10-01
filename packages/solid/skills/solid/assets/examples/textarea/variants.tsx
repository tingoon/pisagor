/** @jsxImportSource solid-js */
import { Textarea } from "@pisagor/solid/textarea";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Textarea placeholder="Primary" variant="primary" />
      <Textarea placeholder="Secondary" variant="secondary" />
    </div>
  );
}
