import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

export function Grouping() {
  const collection = createListCollection({
    groupBy: (item) => (item as { category: string }).category,
    items: [
      { category: "Frontend", label: "Next.js", value: "next" },
      { category: "Frontend", label: "Vite", value: "vite" },
      { category: "Frontend", label: "Astro", value: "astro" },
      { category: "Backend", label: "Express", value: "express" },
      { category: "Backend", label: "Fastify", value: "fastify" },
      { category: "Backend", label: "NestJS", value: "nestjs" },
    ],
  });
  return (
    <Select.Root collection={collection}>
      <Select.Trigger>
        <Select.ValueText placeholder="Select framework" />
      </Select.Trigger>
      <Select.Content>
        {collection.group().map(([category, items]) => (
          <Select.ItemGroup heading={category} key={category}>
            {items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.ItemGroup>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
