<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { HoverCard } from "..";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <HoverCard
      v-for="placement in placements"
      :key="placement"
      :positioning="{ placement }"
    >
      <HoverCard.Trigger as-child>
        <Button class="capitalize" variant="outline">
          {{ placement }}
        </Button>
      </HoverCard.Trigger>
      <HoverCard.Content class="flex flex-col gap-1">
        <h4 class="font-medium">Hover Card</h4>
        <p class="text-muted-foreground text-sm">
          This hover card appears on the {{ placement }} placement of the
          trigger.
        </p>
      </HoverCard.Content>
    </HoverCard>
  </div>
</template>
