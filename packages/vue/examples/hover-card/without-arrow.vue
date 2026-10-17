<script lang="ts">
import source from "./without-arrow.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";
</script>

<template>
  <HoverCard>
    <HoverCard.Trigger as-child>
      <Button variant="link">Hover here</Button>
    </HoverCard.Trigger>
    <HoverCard.Content :show-arrow="false">
      <p class="text-muted-foreground text-sm">
        A card without an arrow for flush layouts.
      </p>
    </HoverCard.Content>
  </HoverCard>
</template>
