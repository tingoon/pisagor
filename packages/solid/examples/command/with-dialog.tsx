/** @jsxImportSource solid-js */

import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Button, Command, Kbd } from "@pisagor/solid";
import { ArrowBendDownLeftIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
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
  const [open, setOpen] = createSignal(false);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command.Dialog onOpenChange={({ open: o }) => setOpen(o)} open={open()}>
      <Command.DialogTrigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open Command Palette
          </Button>
        )}
      />
      <Command.DialogContent>
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={() => setOpen(false)}
        >
          <Command.Input placeholder="Search commands..." />
          <Command.Content>
            <Command.Empty>
              No results found. Try a different search.
            </Command.Empty>
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
              <span class="text-muted-foreground">To select</span>
            </div>
          </Command.Footer>
        </Command>
      </Command.DialogContent>
    </Command.Dialog>
  );
}
