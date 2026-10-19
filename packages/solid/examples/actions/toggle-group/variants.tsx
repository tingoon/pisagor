import { ToggleGroup } from "@pisagor/solid";

const items = [
  { content: "Bold", value: "bold" },
  { content: "Italic", value: "italic" },
  { content: "Underline", value: "underline" },
];

export function Variants() {
  return (
    <div class="flex flex-wrap items-center gap-2">
      <ToggleGroup
        defaultValue={["bold"]}
        items={items}
        multiple
        variant="ghost"
      />
      <ToggleGroup defaultValue={["bold"]} items={items} multiple />
      <ToggleGroup
        defaultValue={["bold"]}
        items={items}
        multiple
        variant="outline"
      />
    </div>
  );
}
