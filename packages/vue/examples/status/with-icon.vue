<script lang="ts">
import source from "./with-icon.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhPlus } from "@phosphor-icons/vue";
import { Status } from "@pisagor/vue";
</script>

<template>
  <Status size="lg">
    <PhPlus />
  </Status>
</template>
