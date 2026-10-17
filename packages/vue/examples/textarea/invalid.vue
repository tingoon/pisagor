<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Textarea } from "@pisagor/vue";
</script>

<template>
  <Textarea invalid placeholder="Type your feedback here" />
</template>
