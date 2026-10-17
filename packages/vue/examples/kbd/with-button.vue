<script lang="ts">
import source from "./with-button.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhFloppyDisk } from "@phosphor-icons/vue";
import { Button, Kbd } from "@pisagor/vue";
</script>

<template>
  <Button variant="outline">
    <PhFloppyDisk />
    Save
    <Kbd.Group class="translate-x-0.5">
      <Kbd variant="outline">Ctrl+S</Kbd>
    </Kbd.Group>
  </Button>
</template>
