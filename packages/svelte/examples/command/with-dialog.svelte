<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Button, Command, Kbd } from "@pisagor/svelte";
import ArrowBendDownLeftIcon from "phosphor-svelte/lib/ArrowBendDownLeftIcon";

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
const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: contains,
  groupBy: (item) => item.group,
  initialItems,
});
</script>

<Command.Dialog onOpenChange={({ open: next }) => (open = next)} {open}>
  <Command.DialogTrigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open Command Palette</Button>
    {/snippet}
  </Command.DialogTrigger>
  <Command.DialogContent>
    <Command
      {collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
      onValueChange={() => (open = false)}
    >
      <Command.Input placeholder="Search commands..." />
      <Command.Content>
        <Command.Empty>No results found. Try a different search.</Command.Empty>
        <Command.List>
          {#each collection.group() as [group, items]}
            <Command.ItemGroup heading={group}>
              {#each items as item}
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
    </Command>
  </Command.DialogContent>
</Command.Dialog>
