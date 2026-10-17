<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Switch } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Switch default-checked />
    <Switch
      class="[--size:--spacing(5)] sm:[--size:--spacing(6)]"
      default-checked
    />
  </div>
</template>
