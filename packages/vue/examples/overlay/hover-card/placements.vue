<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <HoverCard
      v-for="placement in placements"
      :key="placement"
      :positioning="{ placement }"
      :class-names="{ content: 'flex flex-col gap-1' }"
    >
      <template #trigger>
        <Button class="capitalize" variant="outline">
          {{ placement }}
        </Button>
      </template>
      <h4 class="font-medium">Hover Card</h4>
      <p class="text-muted-foreground text-sm">
        This hover card appears on the {{ placement }} placement of the trigger.
      </p>
    </HoverCard>
  </div>
</template>
