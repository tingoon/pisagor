<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
</script>

<template>
  <PasswordInput invalid placeholder="••••••••" />
</template>
