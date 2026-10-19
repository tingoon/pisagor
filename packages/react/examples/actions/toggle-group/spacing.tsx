import { ToggleGroup } from "@pisagor/react";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Spacing() {
  return (
    <ToggleGroup
      defaultValue={["italic"]}
      items={items}
      multiple
      spacing={2}
      variant="outline"
    />
  );
}
