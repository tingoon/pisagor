import { ToggleGroup } from "@pisagor/react";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup defaultValue={["bold"]} items={items} multiple size="sm" />
      <ToggleGroup defaultValue={["bold"]} items={items} multiple size="lg" />
    </div>
  );
}
