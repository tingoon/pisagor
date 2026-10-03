/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Kbd } from "@pisagor/solid";
import { Command } from "@pisagor/solid/command";
import {
  ArrowBendDownLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@pisagor/solid/icons";
export function WithFooter() {
  const initialItems = [
    { group: "App", label: "Settings", shortcut: "⌘,", value: "settings" },
    {
      group: "App",
      label: "Keyboard Shortcuts",
      shortcut: "⌘K",
      value: "shortcuts",
    },
    { group: "App", label: "Help", shortcut: "⌘?", value: "help" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Command.Input placeholder="Search..." />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          {collection.group().map(([group, items]) => (
            <Command.ItemGroup heading={group}>
              {items.map((item) => (
                <Command.Item item={item}>
                  {item.label}
                  <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                </Command.Item>
              ))}
            </Command.ItemGroup>
          ))}
        </Command.List>
      </Command.Content>
      <Command.Footer>
        <div class="flex items-center gap-2">
          <Kbd variant="outline">
            <ArrowBendDownLeftIcon class="size-3" />
          </Kbd>
          <span>Select</span>
        </div>
        <div class="flex items-center gap-2">
          <Kbd variant="outline">
            <ArrowUpIcon class="size-3" />
          </Kbd>
          <Kbd variant="outline">
            <ArrowDownIcon class="size-3" />
          </Kbd>
          <span>Navigate</span>
        </div>
      </Command.Footer>
    </Command>
  );
}
