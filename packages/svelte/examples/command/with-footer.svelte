<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Command, Kbd } from "@pisagor/svelte";
import ArrowBendDownLeftIcon from "phosphor-svelte/lib/ArrowBendDownLeftIcon";
import ArrowDownIcon from "phosphor-svelte/lib/ArrowDownIcon";
import ArrowUpIcon from "phosphor-svelte/lib/ArrowUpIcon";

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
const filters = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter(itemString, filterText) {
    return filters().contains(itemString, filterText);
  },
  groupBy: (item) => item.group,
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
      {#each collection().group() as [group, items]}
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
