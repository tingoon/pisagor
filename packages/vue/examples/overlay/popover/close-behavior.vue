<script lang="ts" setup>
import { Button, Popover } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <Popover
      :close-on-interact-outside="false"
      description="Clicking outside does not close this popover. Press ESC to close."
      show-close-button
      title="Stays on outside click"
    >
      <template #trigger>
        <Button variant="outline">Open outside click</Button>
      </template>
    </Popover>
    <Popover
      :close-on-escape="false"
      description="Pressing escape does not close this popover. Click outside to close."
      show-close-button
      title="Escape key unavailable"
    >
      <template #trigger>
        <Button variant="outline">Open escape</Button>
      </template>
    </Popover>
  </div>
</template>
