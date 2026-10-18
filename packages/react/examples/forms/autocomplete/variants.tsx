import { Autocomplete } from "@pisagor/react";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Autocomplete items={items} placeholder="Primary" variant="primary" />
      <Autocomplete items={items} placeholder="Secondary" variant="secondary" />
    </div>
  );
}
