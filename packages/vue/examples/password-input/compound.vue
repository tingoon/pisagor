<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
</script>

<template>
  <PasswordInput.Root class="w-64">
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Password" />
      <PasswordInput.VisibilityTrigger />
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
