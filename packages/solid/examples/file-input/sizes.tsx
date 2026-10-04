/** @jsxImportSource solid-js */
import { FileInput } from "@pisagor/solid/file-input";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </div>
  );
}
