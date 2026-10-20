<script lang="ts" setup>
import { Button, Dialog } from "@pisagor/vue";
</script>

<template>
  <Dialog
    :modal="false"
    description="This is a non-modal dialog. You can interact with elements outside the dialog."
    title="Non-modal dialog"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <p class="text-muted-foreground text-sm">
      Non-modal dialogs allow interaction with elements outside the dialog.
      Focus trapping and scroll prevention are turned off.
    </p>
    <template #actions>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline">Close</Button>
      </Dialog.CloseTrigger>
    </template>
  </Dialog>
</template>
