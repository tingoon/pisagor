<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
</script>

<template>
  <Rating invalid :default-value="3" />
</template>
