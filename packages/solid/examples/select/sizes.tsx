import { Select } from "@pisagor/solid";

const items = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "ESBuild", value: "esbuild" },
];

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select items={items} placeholder="Select framework" size={size} />
      ))}
    </div>
  );
}
