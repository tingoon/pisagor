import { Combobox } from "@pisagor/solid";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Combobox items={items} placeholder={`Size ${size}`} size={size} />
      ))}
    </div>
  );
}
