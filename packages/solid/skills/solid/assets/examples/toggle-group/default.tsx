/** @jsxImportSource solid-js */
import { ToggleGroup } from "@pisagor/solid/toggle-group";

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
