import { useFilter, useListCollection } from "@ark-ui/react";
import { AppleLogoIcon } from "@phosphor-icons/react";
import { Autocomplete, InputGroup } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component:
          "Helps users pick one option from a long list by typing to filter suggestions as they go.",
      },
    },
    metadata: {
      aliases: ["typeahead"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: Autocomplete.ClearTrigger,
    Collection: Autocomplete.Collection,
    Content: Autocomplete.Content,
    Control: Autocomplete.Control,
    Empty: Autocomplete.Empty,
    Input: Autocomplete.Input,
    Item: Autocomplete.Item,
    ItemGroup: Autocomplete.ItemGroup,
    ItemGroupLabel: Autocomplete.ItemGroupLabel,
    List: Autocomplete.List,
    Root: Autocomplete.Root,
    Separator: Autocomplete.Separator,
    Trigger: Autocomplete.Trigger,
  },
  title: "Components/Forms/Autocomplete",
});

export const Default = meta.story({
  args: {
    clearable: true,
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
      <AutocompleteSize size="sm" />
      <AutocompleteSize size="md" />
      <AutocompleteSize size="lg" />
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
        <Autocomplete.Root
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
        >
          <Autocomplete.Input placeholder="Primary" variant="primary" />
          <Autocomplete.Content>
            <Autocomplete.List>
              {collection.items.map((item) => (
                <Autocomplete.Item item={item} key={item.value}>
                  {item.label}
                </Autocomplete.Item>
              ))}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <Autocomplete.Root
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
        >
          <Autocomplete.Input placeholder="Secondary" variant="secondary" />
          <Autocomplete.Content>
            <Autocomplete.List>
              {collection.items.map((item) => (
                <Autocomplete.Item item={item} key={item.value}>
                  {item.label}
                </Autocomplete.Item>
              ))}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    );
  },
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

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
      <Autocomplete.Root
        collection={collection}
        disabled
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty>No items found.</Autocomplete.Empty>
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item} key={item.value}>
                {item.label}
              </Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
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
      <Autocomplete.Root
        collection={collection}
        invalid
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item} key={item.value}>
                {item.label}
              </Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    );
  },
});

const autocompleteSizeItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

function AutocompleteSize({ size }: { size: "sm" | "md" | "lg" }) {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: autocompleteSizeItems,
  });

  return (
    <Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input clearable showTrigger size={size} />
      <Autocomplete.Content>
        <Autocomplete.Empty>No items found.</Autocomplete.Empty>
        <Autocomplete.List>
          {collection.items.map((item) => (
            <Autocomplete.Item item={item} key={item.value}>
              {item.label}
            </Autocomplete.Item>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}

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
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Select a timezone" />
        <Autocomplete.Content className="w-60">
          <Autocomplete.Empty />
          <Autocomplete.List>
            {collection.group().map(([continent, group]) => (
              <Autocomplete.ItemGroup heading={continent} key={continent}>
                {group.map((item) => (
                  <Autocomplete.Item item={item} key={item.value}>
                    {item.label}
                  </Autocomplete.Item>
                ))}
              </Autocomplete.ItemGroup>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
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
      <Autocomplete.Root
        collection={collection}
        defaultValue={["apple"]}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input clearable placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty>No items found.</Autocomplete.Empty>
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item} key={item.value}>
                {item.label}
              </Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
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
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Search fruits...">
          <InputGroup.Addon align="inline-start">
            <AppleLogoIcon />
          </InputGroup.Addon>
        </Autocomplete.Input>
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item} key={item.value}>
                {item.label}
              </Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    );
  },
});

export const WithTrigger = meta.story({
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
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Select a fruit..." showTrigger />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item} key={item.value}>
                {item.label}
              </Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
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
        <Autocomplete.Root
          className="w-full"
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={(value) => setValue(value.at(0))}
          value={value ? [value] : []}
        >
          <Autocomplete.Input placeholder="Select a fruit..." />
          <Autocomplete.Content>
            <Autocomplete.Empty />
            <Autocomplete.List>
              {collection.items.map((item) => (
                <Autocomplete.Item item={item} key={item.value}>
                  {item.label}
                </Autocomplete.Item>
              ))}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
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
          "Manual composition with `Autocomplete.Root` when shorthand props are not enough — for example, custom filtering.",
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
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input clearable placeholder="for example, Apple" />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item} key={item.value}>
                {item.label}
              </Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    );
  },
});
