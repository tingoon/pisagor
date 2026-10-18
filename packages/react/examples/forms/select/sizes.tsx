import { Select } from "@pisagor/react";

const items = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "ESBuild", value: "esbuild" },
];

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select
          items={items}
          key={size}
          placeholder="Select framework"
          size={size}
        />
      ))}
    </div>
  );
}
