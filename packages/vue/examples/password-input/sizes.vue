<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <PasswordInput placeholder="Small" size="sm" />
    <PasswordInput placeholder="Medium" size="md" />
    <PasswordInput placeholder="Large" size="lg" />
  </div>
</template>
