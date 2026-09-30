/** @jsxImportSource solid-js */
import { Select } from "@pisagor/solid/select";

export function Default() {
  return (
    <Select
      items={["React", "Solid", "Vue", "Svelte"]}
      placeholder="Select a framework"
    />
  );
}
