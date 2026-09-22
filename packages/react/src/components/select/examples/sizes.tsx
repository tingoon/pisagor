import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

export function Sizes() {
  const collection = createListCollection({
    items: [
      { label: "Next.js", value: "next" },
      { label: "Vite", value: "vite" },
      { label: "ESBuild", value: "esbuild" },
    ],
  });

  return (
    <div className="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select.Root collection={collection} key={size}>
          <Select.Trigger size={size}>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      ))}
    </div>
  );
}
