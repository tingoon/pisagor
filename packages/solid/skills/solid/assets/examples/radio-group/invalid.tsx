/** @jsxImportSource solid-js */
import { RadioGroup } from "@pisagor/solid/radio-group";

export function Invalid() {
  return (
    <RadioGroup
      invalid
      items={[
        { label: "Default", value: "default" },
        { label: "Comfortable", value: "comfortable" },
        { label: "Compact", value: "compact" },
      ]}
    />
  );
}
