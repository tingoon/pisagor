import { Select } from "@pisagor/react";

const items = ["Apple", "Banana", "Orange"];

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Select items={items} placeholder="Primary" variant="primary" />
      <Select items={items} placeholder="Secondary" variant="secondary" />
    </div>
  );
}
