import { RadioGroup } from "@pisagor/react";

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
