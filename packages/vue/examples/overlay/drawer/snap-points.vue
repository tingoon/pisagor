<script lang="ts" setup>
import { Button, Drawer } from "@pisagor/vue";
</script>

<template>
  <Drawer
    :default-snap-point="0.5"
    :snap-points="[0.25, 0.5, 1]"
    description="Drag to 25%, 50%, or 100% height. Swipe down to close."
    snap-to-sequential-points
    title="Snap points"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <p class="text-muted-foreground text-sm">
      This drawer has multiple snap points. Try dragging the handle to quarter,
      half, or full height.
    </p>
  </Drawer>
</template>
