<script lang="ts">
  import { useFilter, useListCollection } from "@ark-ui/svelte";
  import { Button, Command, InputGroup, Kbd } from "@pisagor/svelte";
  import { ArrowBendDownLeftIcon, MagnifyingGlassIcon } from "phosphor-svelte";

  const initialItems = [
    { group: "File", label: "New file", shortcut: "⌘N", value: "new" },
    { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
    { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
    { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
    { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
    { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
    { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
  ];
  let open = $state(false);
  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    groupBy: (item) => item.group,
    initialItems,
  });
</script>

<Command.Dialog onOpenChange={({ open: next }) => (open = next)} {open}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open Command Palette</Button>
  {/snippet}

  <Command.Root
    {collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    onValueChange={() => (open = false)}
  >
    <Command.Control>
      <InputGroup class="bg-input/32 rounded-lg">
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden="true" class="opacity-64" />
        </InputGroup.Addon>
        <Command.Input>
          {#snippet asChild(props)}
            <InputGroup.Input
              {...props({ autofocus: true, placeholder: "Search commands..." })}
            />
          {/snippet}
        </Command.Input>
      </InputGroup>
    </Command.Control>
    <Command.Content>
      <Command.Empty>No results found. Try a different search.</Command.Empty>
      <Command.List>
        {#each collection().group() as [group, items] (group)}
          <Command.ItemGroup>
            <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
            {#each items as item (item.value)}
              <Command.Item {item}>
                {item.label}
                <Command.Shortcut>{item.shortcut}</Command.Shortcut>
              </Command.Item>
            {/each}
          </Command.ItemGroup>
        {/each}
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
