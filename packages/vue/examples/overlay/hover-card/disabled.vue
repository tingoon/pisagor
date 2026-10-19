<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";
</script>

<template>
  <HoverCard disabled>
    <template #trigger>
      <Button variant="link">Hover here</Button>
    </template>
    IT WILL NOT OPEN
  </HoverCard>
</template>
