<script lang="ts" setup>
import { Timer } from "@pisagor/vue";
</script>

<template>
  <Timer auto-start :units="['days', 'hours', 'minutes', 'seconds']" />
</template>
