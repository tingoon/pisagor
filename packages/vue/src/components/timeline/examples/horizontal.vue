<script lang="ts" setup >
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
const items = [{ title: "Planned" }, { title: "In progress" }, { title: "Shipped" }];
</script>

<template>
        <div class="w-full">
          <Timeline orientation="horizontal" :items="items" />
        </div>
  
</template>
