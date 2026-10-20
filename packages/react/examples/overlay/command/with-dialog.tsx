import { useFilter, useListCollection } from "@ark-ui/react";
import {
  ArrowBendDownLeftIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { Button, Command, Kbd, InputGroup } from "@pisagor/react";
import { useState } from "react";

export function WithDialog() {
  const initialItems = [
    { group: "File", label: "New file", shortcut: "⌘N", value: "new" },
    { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
    { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
    { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
    { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
    { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
    { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
  ];
  const [open, setOpen] = useState(false);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command.Dialog
      onOpenChange={({ open: o }) => setOpen(o)}
      open={open}
      trigger={<Button variant="outline">Open Command Palette</Button>}
    >
      <Command.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={() => setOpen(false)}
      >
        <Command.Control>
          <InputGroup className="bg-input/32 rounded-lg">
            <InputGroup.Addon>
              <MagnifyingGlassIcon aria-hidden className="opacity-64" />
            </InputGroup.Addon>
            <Command.Input asChild>
              <InputGroup.Input autoFocus placeholder="Search commands..." />
            </Command.Input>
          </InputGroup>
        </Command.Control>
        <Command.Content>
          <Command.Empty>
            No results found. Try a different search.
          </Command.Empty>
          <Command.List>
            {collection.group().map(([group, items]) => (
              <Command.ItemGroup key={group}>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
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
            <span className="text-muted-foreground">To select</span>
          </div>
        </Command.Footer>
      </Command.Root>
    </Command.Dialog>
  );
}
