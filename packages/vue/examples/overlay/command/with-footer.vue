<script lang="ts" setup>
import {
  PhArrowBendDownLeft,
  PhArrowDown,
  PhArrowUp,
} from "@phosphor-icons/vue";
import { Command, Kbd } from "@pisagor/vue";

const items = [
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

<template>
  <Command :items="items" placeholder="Search...">
    <template #footer>
      <div class="flex items-center gap-2">
        <Kbd variant="outline">
          <PhArrowBendDownLeft class="size-3" />
        </Kbd>
        <span>Select</span>
      </div>
      <div class="flex items-center gap-2">
        <Kbd variant="outline">
          <PhArrowUp class="size-3" />
        </Kbd>
        <Kbd variant="outline">
          <PhArrowDown class="size-3" />
        </Kbd>
        <span>Navigate</span>
      </div>
    </template>
  </Command>
</template>
