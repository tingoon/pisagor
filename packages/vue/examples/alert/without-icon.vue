<script lang="ts">
import source from "./without-icon.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Alert } from "@pisagor/vue";
</script>

<template>
  <Alert
    description="Bind icon to null to hide the default variant icon."
    title="Saved"
    variant="success"
    :icon="null"
  />
</template>
