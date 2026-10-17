<script lang="ts">
import source from "./with-value.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CircularProgress } from "@pisagor/vue";
</script>

<template>
  <CircularProgress is-value-visible :size="66" :thickness="5" :value="66" />
</template>
