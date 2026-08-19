import { createListCollection } from "@ark-ui/react";
import { createGridCollection, useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpDownIcon,
  PencilSimpleIcon,
  PlusSquareIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { Field } from "@pisagor/react/field";
import { Input } from "@pisagor/react/input";
import { Item } from "@pisagor/react/item";
import { Kbd } from "@pisagor/react/kbd";
import { Listbox } from "@pisagor/react/listbox";
import { Popover } from "@pisagor/react/popover";
import { Separator } from "@pisagor/react/separator";
import type { CSSProperties } from "react";
import { useCallback, useState } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Listbox,
  parameters: {
    docs: {
      aliases: ["list-box"],
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
          "Lets users choose one or more options from a scrollable list with clear selection states.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Listbox.Content,
    Empty: Listbox.Empty,
    Item: Listbox.Item,
    ItemGroup: Listbox.ItemGroup,
    ItemGroupLabel: Listbox.ItemGroupLabel,
    ItemIndicator: Listbox.ItemIndicator,
    ItemText: Listbox.ItemText,
    Root: Listbox.Root,
    Shortcut: Listbox.Shortcut,
    ValueText: Listbox.ValueText,
  },
  title: "Components/Forms/Listbox",
});

export const Default = meta.story({
  args: {
    defaultValue: ["br"],
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  },
});

export const DisabledItem = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Free", value: "free" },
        { label: "Pro", value: "pro" },
        {
          disabled: true,
          label: "Enterprise",
          value: "enterprise",
        },
        { label: "Custom", value: "custom" },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const Grid = meta.story({
  render: () => {
    const collection = createGridCollection({
      columnCount: 5,
      items: [
        { label: "😀", value: "grinning" },
        { label: "😍", value: "heart-eyes" },
        { label: "🥳", value: "partying" },
        { label: "😎", value: "sunglasses" },
        { label: "🤩", value: "star-struck" },
        { label: "😂", value: "joy" },
        { label: "🥰", value: "smiling-hearts" },
        { label: "😊", value: "blush" },
        { label: "🤗", value: "hugging" },
        { label: "😇", value: "innocent" },
        { label: "🔥", value: "fire" },
        { label: "✨", value: "sparkles" },
        { label: "💯", value: "hundred" },
        { label: "🎉", value: "tada" },
        { label: "❤️", value: "heart" },
        { label: "👍", value: "thumbs-up" },
        { label: "👏", value: "clap" },
        { label: "🚀", value: "rocket" },
        { label: "⭐", value: "star" },
        { label: "🌈", value: "rainbow" },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection}>
          <Listbox.Content
            className="grid grid-cols-[repeat(var(--column-count),1fr)] gap-1"
            style={{ "--column-count": collection.columnCount } as CSSProperties}
          >
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText className="text-center text-xl">{item.label}</Listbox.ItemText>
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const Grouping = meta.story({
  render: () => {
    const collection = createListCollection({
      groupBy: (item) => (item as { region: string }).region,
      items: [
        { label: "Brazil", region: "South America", value: "br" },
        { label: "Colombia", region: "South America", value: "co" },
        { label: "Mexico", region: "North America", value: "mx" },
        { label: "Canada", region: "North America", value: "ca" },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.group().map(([region, items]) => (
              <Listbox.ItemGroup key={region}>
                <Listbox.ItemGroupLabel>{region}</Listbox.ItemGroupLabel>
                {items.map((item) => (
                  <Listbox.Item item={item} key={item.value}>
                    <Listbox.ItemText>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.ItemGroup>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const Horizontal = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { artist: "O Rappa", title: "Rappa Mundi" },
        { artist: "The Night Owls", title: "Acústico MTV" },
        { artist: "Neon Pulse", title: "Thriller" },
        { artist: "Eminem", title: "The Eminem Show" },
      ],
      itemToString: (item) => item.title,
      itemToValue: (item) => item.title,
    });
    return (
      <Field>
        <Field.Label>Favorite album</Field.Label>
        <Listbox.Root collection={collection} orientation="horizontal">
          <Listbox.Content className="overflow-x-auto">
            {collection.items.map((item) => (
              <Listbox.Item className="w-full flex-col items-start" item={item} key={item.title}>
                <div className="aspect-square size-20 w-full rounded-lg bg-foreground" />
                <div>
                  <Listbox.ItemText>{item.title}</Listbox.ItemText>
                  <p className="text-muted-foreground text-xs">{item.artist}</p>
                </div>
                <Listbox.ItemIndicator className="absolute top-4 right-4 shrink-0 rounded-xs bg-background [&_svg]:text-foreground!" />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Field>
    );
  },
});

export const Disabled = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection} disabled>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const ImageExplorer = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        {
          alt: "Scenic mountain view",
          label: "Mountain Landscape",
          value: "mountain",
        },
        {
          alt: "Ocean waves",
          label: "Ocean Waves",
          value: "ocean",
        },
        {
          alt: "Forest path",
          label: "Forest Path",
          value: "forest",
        },
        {
          alt: "City skyline",
          label: "City Skyline",
          value: "city",
        },
        {
          alt: "Desert dunes",
          label: "Desert Dunes",
          value: "desert",
        },
      ],
    });
    const [value, setValue] = useState(["mountain"]);

    const selectedImage = collection.items.find((item) => item.value === value.at(0));

    return (
      <div className="flex flex-col gap-2 sm:flex-row">
        <Listbox.Root
          className="w-full"
          collection={collection}
          onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
          value={value}
        >
          <Listbox.Content className="overflow-auto max-sm:flex-row">
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
        <div className="flex w-full items-end rounded-xl border bg-muted p-4">
          <div className="mt-auto">
            <h3 className="font-medium text-sm">{selectedImage?.label}</h3>
            <p className="text-muted-foreground text-xs">{selectedImage?.alt}</p>
          </div>
        </div>
      </div>
    );
  },
});

export const SelectionExtended = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ],
    });
    return (
      <div className="flex flex-col gap-2">
        <p className="text-center text-muted-foreground text-sm">
          Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
        </p>
        <Item className="w-full p-1" variant="outline">
          <Listbox.Root collection={collection} selectionMode="extended">
            <Listbox.Content>
              {collection.items.map((item) => (
                <Listbox.Item item={item} key={item.value}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              ))}
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </div>
    );
  },
});

export const SelectionMultiple = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection} selectionMode="multiple">
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const SelectionNone = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "New file", section: "actions", value: "new-file" },
        { label: "Edit file", section: "actions", value: "edit-file" },
        {
          label: "Delete file",
          section: "danger",
          value: "delete-file",
        },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root
          aria-label="File actions"
          className="w-full"
          collection={collection}
          selectionMode="none"
        >
          <Listbox.Content>
            <Listbox.ItemGroup heading="Actions">
              <Listbox.Item item={collection.items[0]}>
                <div className="flex h-8 items-start justify-start">
                  <PlusSquareIcon />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>New file</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">Create a new file</span>
                </div>
                <Listbox.Shortcut>⌘N</Listbox.Shortcut>
              </Listbox.Item>
              <Listbox.Item item={collection.items[1]}>
                <div className="flex h-8 items-start justify-start">
                  <PencilSimpleIcon />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>Edit file</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">Make changes</span>
                </div>
                <Listbox.Shortcut>⌘E</Listbox.Shortcut>
              </Listbox.Item>
            </Listbox.ItemGroup>
            <Separator />
            <Listbox.ItemGroup heading="Danger zone">
              <Listbox.Item item={collection.items[2]} variant="destructive">
                <div className="flex h-8 items-start justify-start">
                  <TrashIcon />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>Delete file</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">Move to trash</span>
                </div>
                <Listbox.Shortcut>⌘D</Listbox.Shortcut>
              </Listbox.Item>
            </Listbox.ItemGroup>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const TransferList = meta.story({
  render: () => {
    const [available, setAvailable] = useState(["Brazil", "Ireland"]);
    const [selected, setSelected] = useState<string[]>(["Mexico"]);
    const [availableValue, setAvailableValue] = useState<string[]>([]);
    const [selectedValue, setSelectedValue] = useState<string[]>([]);

    const availableCollection = createListCollection({
      items: available.map((label) => ({ label, value: label })),
    });

    const selectedCollection = createListCollection({
      items: selected.map((label) => ({ label, value: label })),
    });

    const moveToSelected = useCallback(() => {
      setAvailable((prev) => prev.filter((item) => !availableValue.includes(item)));
      setSelected((prev) => [...prev, ...availableValue]);
      setAvailableValue([]);
    }, [availableValue]);

    const moveToAvailable = useCallback(() => {
      setSelected((prev) => prev.filter((item) => !selectedValue.includes(item)));
      setAvailable((prev) => [...prev, ...selectedValue]);
      setSelectedValue([]);
    }, [selectedValue]);

    return (
      <div className="flex gap-2 max-sm:flex-col">
        <Item className="w-full p-1" variant="outline">
          <Listbox.Root
            className="min-h-40"
            collection={availableCollection}
            onValueChange={(value) => setAvailableValue(Array.isArray(value) ? value : [value])}
            selectionMode="multiple"
            value={availableValue}
          >
            <Listbox.Content>
              <Listbox.ItemGroup heading="Available">
                {availableCollection.items.map((item) => (
                  <Listbox.Item item={item} key={item.value}>
                    <Listbox.ItemText>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        <div className="flex flex-row-reverse justify-center gap-2 sm:flex-col">
          <Button
            disabled={availableValue.length === 0}
            onClick={moveToSelected}
            size="icon-md"
            variant="outline"
          >
            <CaretRightIcon />
          </Button>
          <Button
            disabled={selectedValue.length === 0}
            onClick={moveToAvailable}
            size="icon-md"
            variant="outline"
          >
            <CaretLeftIcon />
          </Button>
        </div>
        <Item className="w-full p-1" variant="outline">
          <Listbox.Root
            className="min-h-40"
            collection={selectedCollection}
            onValueChange={(value) => setSelectedValue(Array.isArray(value) ? value : [value])}
            selectionMode="multiple"
            value={selectedValue}
          >
            <Listbox.Content className="max-h-48 min-h-40">
              <Listbox.ItemGroup heading="Selected">
                {selectedCollection.items.map((item) => (
                  <Listbox.Item item={item} key={item.value}>
                    <Listbox.ItemText>{item.label}</Listbox.ItemText>
                    <Listbox.ItemIndicator />
                  </Listbox.Item>
                ))}
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </div>
    );
  },
});

export const WithDescription = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        {
          description: "South America's country, Portuguese speaking.",
          label: "Brazil",
          value: "br",
        },
        {
          description: "North America's country, Spanish speaking.",
          label: "Mexico",
          value: "mx",
        },
        {
          description: "Europe's country, Irish/English speaking.",
          label: "Ireland",
          value: "ie",
        },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">{item.description}</span>
                </div>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const WithFilter = meta.story({
  render: () => {
    const [search, setSearch] = useState("");

    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ],
    });

    const isEmpty = collection.items.length === 0 && search;

    return (
      <Item className="flex flex-col gap-2 p-1" variant="outline">
        <Input
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            filter(value);
          }}
          placeholder="Search..."
          value={search}
        />
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}

            {isEmpty && <Listbox.Empty>No results found. Try a different search.</Listbox.Empty>}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const WithIcon = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { icon: "🇧🇷", label: "Brazil", value: "brazil" },
        { icon: "🇲🇽", label: "Mexico", value: "mexico" },
        { icon: "🇮🇪", label: "Ireland", value: "ireland" },
      ],
    });
    return (
      <Item className="p-1" variant="outline">
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                {item.icon}
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    );
  },
});

export const WithPopover = meta.story({
  render: () => {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const { contains } = useFilter({ sensitivity: "base" });

    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
        { label: "Canada", value: "ca" },
      ],
    });

    const isEmpty = collection.items.length === 0 && search;

    return (
      <Listbox.Root
        collection={collection}
        onSelect={() => {
          setIsOpen(false);
        }}
      >
        <Popover onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
          <Popover.Trigger asChild>
            <Button className="justify-between" variant="outline">
              <Listbox.ValueText placeholder="Select framework" />
              <CaretUpDownIcon className="opacity-64" />
            </Button>
          </Popover.Trigger>
          <Popover.Content className="min-w-64 gap-2 p-1">
            <Input
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                filter(value);
              }}
              placeholder="Search..."
              value={search}
            />
            <Listbox.Content>
              {collection.items.map((item) => (
                <Listbox.Item item={item} key={item.value}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              ))}

              {isEmpty && <Listbox.Empty>No results found. Try a different search.</Listbox.Empty>}
            </Listbox.Content>
          </Popover.Content>
        </Popover>
      </Listbox.Root>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
      ],
    });
    const [value, setValue] = useState(["md"]);

    const isLarge = value.includes("lg");

    return (
      <div className="flex flex-col gap-2">
        <p className="text-center text-muted-foreground text-sm">Selected the Large size</p>
        <Item className="p-1" variant="outline">
          <Listbox.Root
            collection={collection}
            onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
            value={value}
          >
            <Listbox.Content>
              {collection.items.map((item) => (
                <Listbox.Item item={item} key={item.value}>
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              ))}
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        <p className="text-center text-muted-foreground text-sm">{isLarge ? "✅" : "❌"}</p>
      </div>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Listbox.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => {
    const collection = createListCollection({
      items: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ],
    });
    return (
      <Listbox.Root collection={collection} defaultValue={["br"]}>
        <Listbox.Content>
          {collection.items.map((item) => (
            <Listbox.Item item={item} key={item.value}>
              <Listbox.ItemText>{item.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    );
  },
});
