<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Switch } from "@pisagor/vue";
</script>

<template>
  <Switch :invalid="true" />
</template>
