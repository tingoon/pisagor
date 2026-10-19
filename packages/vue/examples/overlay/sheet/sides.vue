<script lang="ts" setup>
import { Button, Sheet } from "@pisagor/vue";

const sides = [
  { label: "Right", placement: "right", text: "from the right placement" },
  { label: "Left", placement: "left", text: "from the left placement" },
  { label: "Top", placement: "top", text: "from the top placement" },
  { label: "Bottom", placement: "bottom", text: "from the bottom" },
] as const;
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <Sheet
      v-for="side in sides"
      :key="side.placement"
      :placement="side.placement"
      :title="`${side.label} placement sheet`"
    >
      <template #trigger>
        <Button variant="outline">{{ side.label }}</Button>
      </template>
      <p class="text-muted-foreground text-sm">
        This sheet slides in {{ side.text }}.
      </p>
    </Sheet>
  </div>
</template>
