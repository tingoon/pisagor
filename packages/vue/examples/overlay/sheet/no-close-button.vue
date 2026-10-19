<script lang="ts" setup>
import { Button, Sheet } from "@pisagor/vue";
</script>

<template>
  <Sheet
    :show-close-button="false"
    description="You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop."
    title="No close button"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <p class="text-muted-foreground text-sm">
      The close button in the top right corner is hidden. Use the footer buttons
      or press Escape to close.
    </p>
    <template #actions>
      <Sheet.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Sheet.CloseTrigger>
      <Sheet.CloseTrigger as-child>
        <Button>Confirm</Button>
      </Sheet.CloseTrigger>
    </template>
  </Sheet>
</template>
