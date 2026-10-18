import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Command } from "@pisagor/solid";
import { For } from "solid-js";

export function Shortcuts() {
  const initialItems = [
    { label: "New file", shortcut: "⌘N", value: "new" },
    { label: "Save", shortcut: "⌘S", value: "save" },
    { label: "Copy", shortcut: "⌘C", value: "copy" },
    { label: "Paste", shortcut: "⌘V", value: "paste" },
    { label: "Undo", shortcut: "⌘Z", value: "undo" },
    { label: "Find", shortcut: "⌘F", value: "find" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Command
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Command.Input placeholder="Search..." />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          <For each={collection().items}>
            {(item) => (
              <Command.Item item={item}>
                {item.label}
                <Command.Shortcut>{item.shortcut}</Command.Shortcut>
              </Command.Item>
            )}
          </For>
        </Command.List>
      </Command.Content>
    </Command>
  );
}
