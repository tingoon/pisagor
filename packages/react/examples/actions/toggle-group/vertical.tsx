import { ToggleGroup } from "@pisagor/react";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Vertical() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      items={items}
      orientation="vertical"
      variant="outline"
    />
  );
}
