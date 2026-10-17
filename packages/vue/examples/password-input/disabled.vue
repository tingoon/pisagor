<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
</script>

<template>
  <PasswordInput disabled placeholder="Enter password" value="secret" />
</template>
