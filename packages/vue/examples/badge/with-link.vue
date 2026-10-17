<script lang="ts">
import source from "./with-link.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhArrowUpRight, PhPlusCircle } from "@phosphor-icons/vue";
import { Badge } from "@pisagor/vue";
</script>

<template>
  <Badge as-child variant="info">
    <a href="https://example.com/components">
      <PhPlusCircle />
      New components
      <PhArrowUpRight />
    </a>
  </Badge>
</template>
