<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
</script>

<template>
  <Rating disabled :default-value="3" />
</template>
