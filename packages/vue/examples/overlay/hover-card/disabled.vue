<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";
</script>

<template>
  <HoverCard disabled>
    <HoverCard.Trigger as-child>
      <Button variant="link">Hover here</Button>
    </HoverCard.Trigger>
    <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
  </HoverCard>
</template>
