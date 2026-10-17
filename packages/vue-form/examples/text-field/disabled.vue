<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { TextField } from "@pisagor/vue-form";
</script>

<template>
  <TextField
    auto-complete="email"
    disabled
    id="text-field-email-disabled"
    label="Email"
    placeholder="you@example.com"
    type="email"
  />
</template>
