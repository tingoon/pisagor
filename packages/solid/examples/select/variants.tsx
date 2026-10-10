import { Select } from "@pisagor/solid";

const items = ["Apple", "Banana", "Orange"];

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Select items={items} placeholder="Primary" variant="primary" />
      <Select items={items} placeholder="Secondary" variant="secondary" />
    </div>
  );
}
