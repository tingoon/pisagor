<script lang="ts" setup>
import { h } from "vue";
import { Timeline } from "..";

function _items() {
  return [
    {
      description: "Kickoff and initial planning.",
      id: "started",
      indicator: h("span", { class: "text-primary" }, "✓"),
      title: "Project started",
    },
    {
      description: "Screens and component system locked in.",
      id: "design",
      indicator: h("span", { class: "text-primary" }, "✦"),
      title: "Design complete",
    },
    {
      description: "Engineering work in progress.",
      id: "build",
      indicator: h("span", { class: "text-primary" }, "→"),
      title: "Implementation",
    },
  ];
}
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
