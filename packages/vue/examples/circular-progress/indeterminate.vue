<script lang="ts" setup>
import { CircularProgress } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <span class="text-sm font-medium">Establishing connection...</span>
    <CircularProgress indeterminate />
  </div>
</template>
