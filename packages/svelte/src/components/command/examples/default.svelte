<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Command } from "../index";

const items = [
  { label: "Calendar", value: "calendar" },
  { label: "Search Emoji", value: "emoji" },
  { label: "Calculator", value: "calculator" },
];
const collection = createListCollection({ items });
</script>

<Command {collection}>
  <Command.Input placeholder="Type a command…" />
  <Command.Content>
    <Command.List>
      <Command.Empty />
      {#each items as item (item.value)}
        <Command.Item {item}>{item.label}</Command.Item>
      {/each}
    </Command.List>
  </Command.Content>
</Command>
