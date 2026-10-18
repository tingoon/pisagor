import { ToggleGroup } from "@pisagor/react";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Disabled() {
  return (
    <ToggleGroup defaultValue={["bold"]} disabled items={items} multiple />
  );
}
