import { useFilter, useListCollection } from "@ark-ui/react";
import { ArrowBendDownLeftIcon } from "@phosphor-icons/react";
import { Button, Kbd } from "@pisagor/react";
import { useState } from "react";
import { Command } from "..";
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
    <Command.Dialog onOpenChange={({ open: o }) => setOpen(o)} open={open}>
      <Command.DialogTrigger asChild>
        <Button variant="outline">Open Command Palette</Button>
      </Command.DialogTrigger>
      <Command.DialogContent>
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={() => setOpen(false)}
        >
          <Command.Input placeholder="Search commands..." />
          <Command.Content>
            <Command.Empty>No results found. Try a different search.</Command.Empty>
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
              <span className="text-muted-foreground">To select</span>
            </div>
          </Command.Footer>
        </Command>
      </Command.DialogContent>
    </Command.Dialog>
  );
}
