import { createListCollection } from "@ark-ui/react";
import { Select } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: Select,
  parameters: {
    docs: {
      api: "compound-shorthand",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Lets users choose one option from a dropdown list when screen space for all choices is limited.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: Select.ClearTrigger,
    Content: Select.Content,
    Context: Select.Context,
    Empty: Select.Empty,
    Group: Select.Group,
    GroupLabel: Select.GroupLabel,
    Item: Select.Item,
    Root: Select.Root,
    Separator: Select.Separator,
    Trigger: Select.Trigger,
    Value: Select.Value,
  },
  title: "Components/Forms/Select",
});

export const Default = meta.story({
  args: {
    items: ["Banana", "Apple", "Orange", "Pineapple"],
    placeholder: "Select a fruit",
  },
});

export const Sizes = meta.story({
  render: () => {
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
              <Select.Value placeholder="Select framework" />
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
  },
});

export const Variants = meta.story({
  render: () => {
    const collection = createListCollection({
      items: ["Apple", "Banana", "Orange"],
    });

    return (
      <div className="flex flex-col gap-2">
        <Select.Root collection={collection} variant="primary">
          <Select.Trigger>
            <Select.Value placeholder="Primary" />
          </Select.Trigger>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Select.Root collection={collection} variant="secondary">
          <Select.Trigger>
            <Select.Value placeholder="Secondary" />
          </Select.Trigger>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    );
  },
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Empty = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [] as Array<{ label: string; value: string }>,
    });
    return (
      <Select.Root collection={collection}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Empty>No items to display. Add an item to get started.</Select.Empty>
        </Select.Content>
      </Select.Root>
    );
  },
});

export const Grouping = meta.story({
  render: () => {
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
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content>
          {collection.group().map(([category, items]) => (
            <Select.Group heading={category} key={category}>
              {items.map((item) => (
                <Select.Item item={item} key={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Group>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const MaxSelection = meta.story({
  render: () => {
    const MAX_SELECTION = 3;
    const renderValue = (value: string[]) => {
      if (value.length === 0) {
        return "Select 3 frameworks";
      }

      const firstValue = value?.at(0) ?? "";
      const additionalValues = value.length > 1 ? ` (+${value.length - 1} more)` : "";

      return firstValue + additionalValues;
    };

    const collection = createListCollection({
      items: [
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "Python", value: "python" },
        { label: "Rust", value: "rust" },
      ],
    });
    const [value, setValue] = useState<string[]>([]);

    const handleValueChange = (newValue: string | string[]) => {
      const values = Array.isArray(newValue) ? newValue : [newValue];
      setValue(values.slice(0, MAX_SELECTION));
    };

    return (
      <Select.Root collection={collection} multiple onValueChange={handleValueChange} value={value}>
        <Select.Trigger>
          <Select.Value className="capitalize">
            <Select.Context>{({ value }) => renderValue(value)}</Select.Context>
          </Select.Value>
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const Multiple = meta.story({
  render: () => {
    const renderValue = (value: string[]) => {
      if (value.length === 0) {
        return "Select languages…";
      }

      const firstValue = value?.at(0) ?? "";
      const additionalValues = value.length > 1 ? ` (+${value.length - 1} more)` : "";

      return firstValue + additionalValues;
    };

    const collection = createListCollection({
      items: [
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "Python", value: "python" },
        { label: "Rust", value: "rust" },
      ],
    });
    return (
      <Select.Root collection={collection} defaultValue={["javascript", "typescript"]} multiple>
        <Select.Trigger>
          <Select.Value className="capitalize">
            <Select.Context>{({ value }) => renderValue(value)}</Select.Context>
          </Select.Value>
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const Disabled = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Next.js", value: "next" },
        { label: "Vite", value: "vite" },
        { label: "Astro", value: "astro" },
      ],
    });
    return (
      <Select.Root collection={collection} disabled>
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const Invalid = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Next.js", value: "next" },
        { label: "Vite", value: "vite" },
        { label: "Astro", value: "astro" },
      ],
    });
    return (
      <Select.Root collection={collection} invalid>
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const WithScroll = meta.story({
  render: () => {
    const collection = createListCollection({
      items: Array.from({ length: 20 }, (_, i) => ({
        label: `Framework ${i + 1}`,
        value: `framework-${i + 1}`,
      })),
    });
    return (
      <Select.Root collection={collection} positioning={{ fitViewport: true }}>
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content className="max-h-56">
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Svelte", value: "svelte" },
      ],
    });
    const [value, setValue] = useState<string[]>(["react"]);

    return (
      <Select.Root
        collection={collection}
        onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
        value={value}
      >
        <Select.Trigger>
          <Select.Value placeholder="Select a framework" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Select.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => {
    const collection = createListCollection({
      items: ["Banana", "Apple", "Orange", "Pineapple"],
    });
    return (
      <Select.Root collection={collection}>
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group heading="Fruits">
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    );
  },
});
