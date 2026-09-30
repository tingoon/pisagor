<script lang="ts" setup>
import { Progress } from "../../../../../src/components/progress";
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <Progress class="h-64" orientation="vertical" :value="60" />
  </div>
</template>
