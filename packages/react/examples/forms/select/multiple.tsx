import { Select } from "@pisagor/react";

export function Multiple() {
  return (
    <Select
      defaultValue={["javascript", "typescript"]}
      items={[
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "Python", value: "python" },
        { label: "Rust", value: "rust" },
      ]}
      multiple
      placeholder="Select languages…"
    />
  );
}
