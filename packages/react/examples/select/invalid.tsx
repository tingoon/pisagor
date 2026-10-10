import { Select } from "@pisagor/react";

export function Invalid() {
  return (
    <Select
      invalid
      items={[
        { label: "Next.js", value: "next" },
        { label: "Vite", value: "vite" },
        { label: "Astro", value: "astro" },
      ]}
      placeholder="Select framework"
    />
  );
}
