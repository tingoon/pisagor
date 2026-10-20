<script lang="ts" setup>
import { Button, Popover } from "@pisagor/vue";
</script>

<template>
  <Popover
    :class-names="{ base: 'w-72' }"
    description="You're all caught up. Check back later for new notifications."
    show-close-button
    title="Notifications"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
  </Popover>
</template>
