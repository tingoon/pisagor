<script lang="ts" setup>
import { Button, Drawer } from "@pisagor/vue";

const drawers = [
  { direction: "down", label: "Bottom", title: "Bottom drawer", word: "down" },
  { direction: "up", label: "Top", title: "Top drawer", word: "up" },
  { direction: "start", label: "Left", title: "Start drawer", word: "left" },
  { direction: "end", label: "Right", title: "End drawer", word: "right" },
] as const;
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <Drawer
      v-for="drawer in drawers"
      :key="drawer.direction"
      :swipe-direction="drawer.direction"
      :title="drawer.title"
    >
      <template #trigger>
        <Button variant="outline">{{ drawer.label }}</Button>
      </template>
      <p class="text-muted-foreground text-sm">
        Swipe {{ drawer.word }} to close this drawer.
      </p>
    </Drawer>
  </div>
</template>
