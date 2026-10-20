<script lang="ts">
  import { Command, Kbd } from "@pisagor/svelte";
  import {
    ArrowBendDownLeftIcon,
    ArrowDownIcon,
    ArrowUpIcon,
  } from "phosphor-svelte";

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
</script>

<Command items={initialItems} placeholder="Search...">
  {#snippet footer()}
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
  {/snippet}
</Command>
