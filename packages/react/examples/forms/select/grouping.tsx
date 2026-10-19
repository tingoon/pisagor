import { Portal, createListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Select } from "@pisagor/react";

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
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
          <Select.Indicator>
            <CaretUpDownIcon />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.group().map(([category, items]) => (
              <Select.ItemGroup key={category}>
                <Select.ItemGroupLabel>{category}</Select.ItemGroupLabel>
                {items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator>
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
