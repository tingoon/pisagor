import { useFilter, useListCollection } from "@ark-ui/react";
import {
  ArrowBendDownLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@phosphor-icons/react";
import { Kbd } from "@pisagor/react";
import { Command } from "..";
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
            <Command.ItemGroup heading={group} key={group}>
              {items.map((item) => (
                <Command.Item item={item} key={item.value}>
                  {item.label}
                  <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                </Command.Item>
              ))}
            </Command.ItemGroup>
          ))}
        </Command.List>
      </Command.Content>
      <Command.Footer>
        <div className="flex items-center gap-2">
          <Kbd variant="outline">
            <ArrowBendDownLeftIcon className="size-3" />
          </Kbd>
          <span>Select</span>
        </div>
        <div className="flex items-center gap-2">
          <Kbd variant="outline">
            <ArrowUpIcon className="size-3" />
          </Kbd>
          <Kbd variant="outline">
            <ArrowDownIcon className="size-3" />
          </Kbd>
          <span>Navigate</span>
        </div>
      </Command.Footer>
    </Command>
  );
}
