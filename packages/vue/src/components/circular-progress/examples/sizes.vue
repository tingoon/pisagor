<script lang="ts" setup>
import { CircularProgress } from "..";
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <CircularProgress :size="24" :value="35" />
    <CircularProgress :size="32" :value="62" />
    <CircularProgress :size="40" :value="84" />
  </div>
</template>
