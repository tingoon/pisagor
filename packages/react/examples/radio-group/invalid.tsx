import source from "./invalid.tsx?raw";
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

export { source as InvalidSource };
