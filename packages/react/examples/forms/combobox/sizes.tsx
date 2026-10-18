import { Combobox } from "@pisagor/react";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Combobox
          items={items}
          key={size}
          placeholder={`Size ${size}`}
          size={size}
        />
      ))}
    </div>
  );
}
