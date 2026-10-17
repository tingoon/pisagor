import { Select } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const [value, setValue] = useState<string[]>(["react"]);

  return (
    <Select
      items={[
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Svelte", value: "svelte" },
      ]}
      onValueChange={(value) =>
        setValue(Array.isArray(value) ? value : [value])
      }
      placeholder="Select a framework"
      value={value}
    />
  );
}
