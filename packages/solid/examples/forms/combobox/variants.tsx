import { Combobox } from "@pisagor/solid";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Combobox items={items} placeholder="Primary" variant="primary" />
      <Combobox items={items} placeholder="Secondary" variant="secondary" />
    </div>
  );
}
