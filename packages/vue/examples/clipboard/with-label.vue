<script lang="ts">
import source from "./with-label.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Clipboard } from "@pisagor/vue";
</script>

<template>
  <Clipboard button-variant="outline" label="Install" value="bun add ui" />
</template>
