<script lang="ts">
import source from "./count.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
</script>

<template>
  <Rating :count="3" :default-value="3" />
</template>
