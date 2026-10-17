import source from "./single.tsx?raw";
import { ToggleGroup } from "@pisagor/react";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];

export function Single() {
  return <ToggleGroup defaultValue={["bold"]} items={items} multiple={false} />;
}

export { source as SingleSource };
