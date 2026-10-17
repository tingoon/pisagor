<script lang="ts">
import source from "./custom-size.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
</script>

<template>
  <Rating class="**:data-[slot=rating-item-indicator]:size-8" />
</template>
