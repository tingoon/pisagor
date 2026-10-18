import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Command, Kbd } from "@pisagor/solid";
import {
  ArrowBendDownLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@pisagor/solid/icons";
import { For } from "solid-js";

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
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    groupBy: (item) => item.group,
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
          <For each={collection().group()}>
            {([group, items]) => (
              <Command.ItemGroup heading={group}>
                <For each={items}>
                  {(item) => (
                    <Command.Item item={item}>
                      {item.label}
                      <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                    </Command.Item>
                  )}
                </For>
              </Command.ItemGroup>
            )}
          </For>
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
