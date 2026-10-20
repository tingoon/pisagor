<script lang="ts" setup>
import { Button, Dialog } from "@pisagor/vue";
</script>

<template>
  <Dialog
    :show-close-button="false"
    description="You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop."
    title="No close button"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
  </Dialog>
</template>
