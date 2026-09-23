import { RadioGroup } from "..";

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
