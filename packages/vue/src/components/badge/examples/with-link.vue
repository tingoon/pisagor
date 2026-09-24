<script lang="ts" setup>
import { PhArrowUpRight, PhPlusCircle } from "@phosphor-icons/vue";
import { Badge } from "..";
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
