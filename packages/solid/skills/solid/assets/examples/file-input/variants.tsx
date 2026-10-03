/** @jsxImportSource solid-js */
import { FileInput } from "@pisagor/solid/file-input";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <FileInput variant="primary" />
      <FileInput variant="secondary" />
    </div>
  );
}
