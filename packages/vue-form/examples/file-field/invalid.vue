<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { FileField } from "@pisagor/vue-form";
</script>

<template>
  <FileField
    error="Please choose a file."
    id="file-field-avatar-invalid"
    invalid
    label="Avatar"
  />
</template>
