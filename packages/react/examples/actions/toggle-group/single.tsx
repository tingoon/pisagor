import { ToggleGroup } from "@pisagor/react";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Single() {
  return <ToggleGroup defaultValue={["bold"]} items={items} multiple={false} />;
}
