<script lang="ts" setup>
import { Command } from "@pisagor/vue";

const items = [
  { label: "New file", shortcut: "⌘N", value: "new" },
  { label: "Save", shortcut: "⌘S", value: "save" },
  { label: "Copy", shortcut: "⌘C", value: "copy" },
  { label: "Paste", shortcut: "⌘V", value: "paste" },
  { label: "Undo", shortcut: "⌘Z", value: "undo" },
  { label: "Find", shortcut: "⌘F", value: "find" },
];
</script>

<template>
  <Command :items="items" placeholder="Search..." />
</template>
