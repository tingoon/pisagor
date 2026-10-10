import { Select } from "@pisagor/react";

export function Disabled() {
  return (
    <Select
      disabled
      items={[
        { label: "Next.js", value: "next" },
        { label: "Vite", value: "vite" },
        { label: "Astro", value: "astro" },
      ]}
      placeholder="Select framework"
    />
  );
}
