<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CircularProgress } from "@pisagor/vue";
import { ref } from "vue";

const progress = ref(24);
</script>

<template>
  <CircularProgress :value="progress" />
</template>
