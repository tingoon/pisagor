<script lang="ts" setup>
import { Button, Sheet } from "@pisagor/vue";
</script>

<template>
  <Sheet
    :modal="false"
    description="This is a non-modal sheet. You can interact with elements outside the sheet."
    title="Non-modal sheet"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <p class="text-muted-foreground text-sm">
      Non-modal sheets allow interaction with elements outside. Focus trapping
      and scroll prevention are turned off.
    </p>
    <template #actions>
      <Sheet.CloseTrigger as-child>
        <Button variant="outline">Close</Button>
      </Sheet.CloseTrigger>
    </template>
  </Sheet>
</template>
