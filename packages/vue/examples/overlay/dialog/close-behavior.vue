<script lang="ts" setup>
import { Button, Dialog } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <Dialog
      :close-on-interact-outside="false"
      description="Clicking outside does not close this dialog. Press ESC or use the button to close."
      title="Stays on outside click"
    >
      <template #trigger>
        <Button variant="outline">No close on outside click</Button>
      </template>
    </Dialog>
    <Dialog
      :close-on-escape="false"
      description="Pressing Escape does not close this dialog. Click outside or use the close button."
      title="Escape key unavailable"
    >
      <template #trigger>
        <Button variant="outline">No close on Escape</Button>
      </template>
    </Dialog>
  </div>
</template>
