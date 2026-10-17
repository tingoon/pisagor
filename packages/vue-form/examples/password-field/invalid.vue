<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PasswordField } from "@pisagor/vue-form";
</script>

<template>
  <PasswordField
    auto-complete="new-password"
    error="Password must be at least 8 characters."
    id="password-field-invalid"
    invalid
    label="Password"
    placeholder="Enter your password"
    value="short"
  />
</template>
