<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";
</script>

<template>
  <HoverCard :show-arrow="false">
    <template #trigger>
      <Button variant="link">Hover here</Button>
    </template>
    <p class="text-muted-foreground text-sm">
      A card without an arrow for flush layouts.
    </p>
  </HoverCard>
</template>
