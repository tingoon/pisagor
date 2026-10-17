import source from "./vertical.tsx?raw";
import { ToggleGroup } from "@pisagor/react";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
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

export { source as VerticalSource };
