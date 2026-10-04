import { ToggleGroup } from "@pisagor/react";

export function Default() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      items={[
        { children: "Bold", value: "bold" },
        { children: "Italic", value: "italic" },
        { children: "Underline", value: "underline" },
      ]}
      multiple
    />
  );
}
