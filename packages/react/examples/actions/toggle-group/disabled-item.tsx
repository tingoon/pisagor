import { ToggleGroup } from "@pisagor/react";

export function DisabledItem() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      items={[
        { content: "Bold", value: "bold" },
        { content: "Italic", disabled: true, value: "italic" },
        { content: "Underline", value: "underline" },
      ]}
      multiple
    />
  );
}
