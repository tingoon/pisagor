<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { FileField } from "@pisagor/vue-form";
</script>

<template>
  <FileField disabled id="file-field-avatar-disabled" label="Avatar" />
</template>
