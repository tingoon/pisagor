/** @jsxImportSource solid-js */
import { Clipboard } from "@pisagor/solid/clipboard";

export function Variants() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Clipboard value="https://example.com/docs" variant="input" />
      <Clipboard value="https://example.com/docs" variant="button" />
      <Clipboard value="https://example.com/docs" variant="value" />
    </div>
  );
}
