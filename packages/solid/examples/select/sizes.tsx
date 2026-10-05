import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid";

export function Sizes() {
  const collection = createListCollection({
    items: [
      { label: "Next.js", value: "next" },
      { label: "Vite", value: "vite" },
      { label: "ESBuild", value: "esbuild" },
    ],
  });

  return (
    <div class="flex flex-col gap-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Select.Root collection={collection}>
          <Select.Trigger size={size}>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item}>{item.label}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      ))}
    </div>
  );
}
