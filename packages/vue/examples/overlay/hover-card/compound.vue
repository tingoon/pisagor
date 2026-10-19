<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";
</script>

<template>
  <HoverCard.Root>
    <HoverCard.Trigger as-child>
      <Button variant="link">Hover here</Button>
    </HoverCard.Trigger>
    <Teleport to="body">
      <HoverCard.Positioner>
        <HoverCard.Content>
          <p class="text-muted-foreground text-sm">
            Built from parts with an explicit teleport and positioner.
          </p>
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Teleport>
  </HoverCard.Root>
</template>
