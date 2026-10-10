import { Select } from "@pisagor/react";
import { useState } from "react";

const MAX_SELECTION = 3;

export function MaxSelection() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select
      items={[
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "Python", value: "python" },
        { label: "Rust", value: "rust" },
      ]}
      multiple
      onValueChange={(next) => {
        const values = Array.isArray(next) ? next : [next];
        setValue(values.slice(0, MAX_SELECTION));
      }}
      placeholder={`Select up to ${MAX_SELECTION} languages`}
      value={value}
    />
  );
}
