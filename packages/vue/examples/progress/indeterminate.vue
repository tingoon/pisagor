<script lang="ts" setup>
import { Progress } from "@pisagor/vue";
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <span class="text-sm font-medium">Establishing connection...</span>
    <Progress indeterminate />
  </div>
</template>
