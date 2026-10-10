<script lang="ts" setup>
import { Timeline } from "@pisagor/vue";

const items = [
  {
    description: "Repository scaffolded with shared packages.",
    title: "Project created",
  },
  {
    description: "Primitives and form controls published.",
    title: "Design system shipped",
  },
  {
    description: "Apps consume the library in production.",
    title: "First release",
  },
];
</script>

<template>
  <div class="w-96">
    <Timeline :items="items" />
  </div>
</template>
