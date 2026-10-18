import { ToggleGroup } from "@pisagor/react";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
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
