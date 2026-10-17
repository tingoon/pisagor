import source from "./disabled-item.tsx?raw";
import { ToggleGroup } from "@pisagor/react";

export function DisabledItem() {
  return (
    <ToggleGroup
      defaultValue={["bold"]}
      items={[
        { children: "Bold", value: "bold" },
        { children: "Italic", disabled: true, value: "italic" },
        { children: "Underline", value: "underline" },
      ]}
      multiple
    />
  );
}

export { source as DisabledItemSource };
