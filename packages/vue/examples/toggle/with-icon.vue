<script lang="ts">
import source from "./with-icon.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhTextB } from "@phosphor-icons/vue";
import { Toggle } from "@pisagor/vue";
</script>

<template>
  <Toggle aria-label="Toggle bold" variant="outline"><PhTextB /></Toggle>
</template>
