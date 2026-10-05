<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Command } from "@pisagor/svelte";

const initialItems = [
  { label: "New file", shortcut: "⌘N", value: "new" },
  { label: "Save", shortcut: "⌘S", value: "save" },
  { label: "Copy", shortcut: "⌘C", value: "copy" },
  { label: "Paste", shortcut: "⌘V", value: "paste" },
  { label: "Undo", shortcut: "⌘Z", value: "undo" },
  { label: "Find", shortcut: "⌘F", value: "find" },
];
const filters = useFilter({ sensitivity: "base" });

const { collection, filter } = useListCollection({
  filter(itemString, filterText) {
    return filters().contains(itemString, filterText);
  },
  initialItems,
});
</script>

<Command
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Command.Input placeholder="Search..." />
  <Command.Content>
    <Command.Empty />
    <Command.List>
      {#each collection().items as item}
        <Command.Item {item}>
          {item.label}
          <Command.Shortcut>{item.shortcut}</Command.Shortcut>
        </Command.Item>
      {/each}
    </Command.List>
  </Command.Content>
</Command>
