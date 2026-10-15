<script lang="ts" setup>
import { PhCalendar, PhGear, PhUser } from "@phosphor-icons/vue";
import { Command } from "@pisagor/vue";
import { h } from "vue";

const items = [
  {
    group: "Suggestions",
    icon: h(PhCalendar),
    label: "Calendar",
    value: "calendar",
  },
  {
    group: "Settings",
    icon: h(PhUser),
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Settings",
    icon: h(PhGear),
    label: "Settings",
    shortcut: "⌘S",
    value: "settings",
  },
];
</script>

<template>
  <Command.Shorthand placeholder="Search…" :items="items" />
</template>
