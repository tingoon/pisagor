import { useFilter, useListCollection } from "@ark-ui/react";
import { AppleLogoIcon } from "@phosphor-icons/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { Combobox, InputGroup } from "..";

const meta = preview.meta({
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component:
          "Internal selection engine that combines search with a filterable list. Prefer Select, Autocomplete, or Listbox in application code.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: Combobox.ClearTrigger,
    Content: Combobox.Content,
    Context: Combobox.Context,
    Control: Combobox.Control,
    Empty: Combobox.Empty,
    FieldInput: Combobox.FieldInput,
    Input: Combobox.Input,
    Item: Combobox.Item,
    ItemGroup: Combobox.ItemGroup,
    ItemGroupLabel: Combobox.ItemGroupLabel,
    List: Combobox.List,
    Positioner: Combobox.Positioner,
    Root: Combobox.Root,
    Trigger: Combobox.Trigger,
  },
  title: "Components/Forms/Combobox",
});

export const Default = meta.story({
  args: {
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
    ],
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <ComboboxSize size="sm" />
      <ComboboxSize size="md" />
      <ComboboxSize size="lg" />
    </div>
  ),
});

export const Variants = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });
    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <div className="flex flex-col gap-2">
        <Combobox.Root
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          variant="primary"
        >
          <Combobox.Input placeholder="Primary" />
          <Combobox.Content>
            <Combobox.List>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Combobox.Root
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          variant="secondary"
        >
          <Combobox.Input placeholder="Secondary" />
          <Combobox.Content>
            <Combobox.List>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    );
  },
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Autohighlight = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
      { label: "Elderberry", value: "elderberry" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        inputBehavior="autohighlight"
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Type to highlight..." />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const Multiple = meta.story({
  render: () => {
    const initialItems = [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
      { label: "Solid", value: "solid" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        multiple
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Select frameworks..." />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

const sizeItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

function ComboboxSize({ size }: { size: "sm" | "md" | "lg" }) {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: sizeItems,
  });

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input size={size} />
      <Combobox.Content>
        <Combobox.List>
          {collection.items.map((item) => (
            <Combobox.Item item={item} key={item.value}>
              {item.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}

export const Disabled = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        disabled
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Select a fruit..." />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const Invalid = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        invalid
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Select a fruit..." />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const Group = meta.story({
  render: () => {
    const initialItems = [
      { continent: "North America", label: "Canada", value: "ca" },
      { continent: "North America", label: "United States", value: "us" },
      { continent: "North America", label: "Mexico", value: "mx" },
      { continent: "Europe", label: "United Kingdom", value: "uk" },
      { continent: "Europe", label: "Germany", value: "de" },
      { continent: "Europe", label: "France", value: "fr" },
      { continent: "Asia", label: "Japan", value: "jp" },
      { continent: "Asia", label: "South Korea", value: "kr" },
      { continent: "Asia", label: "China", value: "cn" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.continent,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Select a timezone" />
        <Combobox.Content className="w-60">
          <Combobox.List>
            {collection.group().map(([continent, group]) => (
              <Combobox.ItemGroup heading={continent} key={continent}>
                {group.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const WithClearButton = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input clearable placeholder="Select a fruit..." />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const WithScroll = meta.story({
  render: () => {
    const initialItems = Array.from({ length: 30 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option-${i + 1}`,
    }));
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Search..." />
        <Combobox.Content className="max-h-60">
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const WithStartIcon = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Search fruits...">
          <InputGroup.Addon align="inline-start">
            <AppleLogoIcon />
          </InputGroup.Addon>
        </Combobox.Input>
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
    ];
    const [value, setValue] = useState<string | undefined>("banana");

    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <div className="flex flex-col gap-2">
        <Combobox.Root
          className="w-full"
          collection={collection}
          inputValue={value}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={(value) => setValue(value[0])}
        >
          <Combobox.Input placeholder="Select a fruit..." />
          <Combobox.Content>
            <Combobox.List>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <p className="text-center text-muted-foreground text-sm">Selected: {value ?? "(none)"}</p>
      </div>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Manual composition with `Combobox.Root` when shorthand props are not enough — for example, custom filtering.",
      },
    },
  },
  render: () => {
    const initialItems = [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
    ];
    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return (
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input placeholder="Select an option" />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    );
  },
});
