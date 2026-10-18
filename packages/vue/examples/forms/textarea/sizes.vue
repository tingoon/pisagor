<script lang="ts" setup>
import { Textarea } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <Textarea placeholder="Small" size="sm" />
    <Textarea placeholder="Medium" size="md" />
    <Textarea placeholder="Large" size="lg" />
  </div>
</template>
