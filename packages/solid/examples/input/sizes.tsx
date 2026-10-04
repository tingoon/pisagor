/** @jsxImportSource solid-js */
import { Input } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  );
}
