<script lang="ts">
import source from "./accept.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { FileInput } from "@pisagor/vue";
</script>

<template>
  <FileInput accept="image/png,image/jpeg" />
</template>
