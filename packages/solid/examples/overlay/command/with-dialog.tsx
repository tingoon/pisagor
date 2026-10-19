import { useFilter, useListCollection } from "@ark-ui/solid";
import {
  ArrowBendDownLeftIcon,
  MagnifyingGlassIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Command, Kbd, InputGroup } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

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
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: (itemText, query) => filterFn().contains(itemText, query),
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command.Dialog
      onOpenChange={({ open: o }) => setOpen(o)}
      open={open()}
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open Command Palette
        </Button>
      )}
    >
      <Command.Root
        collection={collection()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={() => setOpen(false)}
      >
        <Command.Control>
          <InputGroup class="bg-input/32 rounded-lg">
            <InputGroup.Addon>
              <MagnifyingGlassIcon aria-hidden class="opacity-64" />
            </InputGroup.Addon>
            <Command.Input
              asChild={(props) => (
                <InputGroup.Input
                  {...props()}
                  autofocus
                  placeholder="Search commands..."
                />
              )}
            />
          </InputGroup>
        </Command.Control>
        <Command.Content>
          <Command.Empty>
            No results found. Try a different search.
          </Command.Empty>
          <Command.List>
            <For each={collection().group()}>
              {([group, items]) => (
                <Command.ItemGroup>
                  <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
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
            <span class="text-muted-foreground">To select</span>
          </div>
        </Command.Footer>
      </Command.Root>
    </Command.Dialog>
  );
}
