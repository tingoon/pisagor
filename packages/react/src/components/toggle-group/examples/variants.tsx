import { ToggleGroup } from "..";

const items = [
  { children: "Bold", value: "bold" },
  { children: "Italic", value: "italic" },
  { children: "Underline", value: "underline" },
];

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup defaultValue={["bold"]} items={items} multiple variant="ghost" />
      <ToggleGroup defaultValue={["bold"]} items={items} multiple />
      <ToggleGroup defaultValue={["bold"]} items={items} multiple variant="outline" />
    </div>
  );
}
