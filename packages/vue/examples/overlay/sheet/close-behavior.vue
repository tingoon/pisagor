<script lang="ts" setup>
import { Button, Sheet } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <Sheet
      :close-on-interact-outside="false"
      description="Clicking outside does not close this sheet. Press ESC or use the close button."
      title="Stays on outside click"
    >
      <template #trigger>
        <Button variant="outline">No close on outside click</Button>
      </template>
    </Sheet>
    <Sheet
      :close-on-escape="false"
      description="Pressing Escape does not close this sheet. Click outside or use the close button."
      title="Escape key unavailable"
    >
      <template #trigger>
        <Button variant="outline">No close on Escape</Button>
      </template>
    </Sheet>
  </div>
</template>
