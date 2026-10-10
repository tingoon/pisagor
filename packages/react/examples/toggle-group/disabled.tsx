import { ToggleGroup } from "@pisagor/react";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];

export function Disabled() {
  return (
    <ToggleGroup defaultValue={["bold"]} disabled items={items} multiple />
  );
}
