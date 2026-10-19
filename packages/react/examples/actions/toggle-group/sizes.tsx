import { ToggleGroup } from "@pisagor/react";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup defaultValue={["bold"]} items={items} multiple size="sm" />
      <ToggleGroup defaultValue={["bold"]} items={items} multiple size="lg" />
    </div>
  );
}
