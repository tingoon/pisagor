<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { TextField } from "@pisagor/vue-form";
</script>

<template>
  <TextField
    auto-complete="name"
    description="As it should appear on your invoices."
    id="text-field-full-name"
    label="Full name"
    placeholder="Jane Doe"
  />
</template>
