<script lang="ts">
import source from "./half-star.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
</script>

<template>
  <Rating allow-half :default-value="3.5" />
</template>
