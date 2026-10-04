/** @jsxImportSource solid-js */
import { Toggle } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Toggle variant="ghost">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  );
}
