import { useFilter, useListCollection } from "@ark-ui/react";
import { Command } from "..";

export function Shortcuts() {
  const initialItems = [
    { label: "New file", shortcut: "⌘N", value: "new" },
    { label: "Save", shortcut: "⌘S", value: "save" },
    { label: "Copy", shortcut: "⌘C", value: "copy" },
    { label: "Paste", shortcut: "⌘V", value: "paste" },
    { label: "Undo", shortcut: "⌘Z", value: "undo" },
    { label: "Find", shortcut: "⌘F", value: "find" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Command collection={collection} onInputValueChange={({ inputValue }) => filter(inputValue)}>
      <Command.Input placeholder="Search..." />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          {collection.items.map((item) => (
            <Command.Item item={item} key={item.value}>
              {item.label}
              <Command.Shortcut>{item.shortcut}</Command.Shortcut>
            </Command.Item>
          ))}
        </Command.List>
      </Command.Content>
    </Command>
  );
}
