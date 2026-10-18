import { ToggleGroup } from "@pisagor/react";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];

export function Horizontal() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      items={items}
      orientation="horizontal"
      variant="outline"
    />
  );
}
