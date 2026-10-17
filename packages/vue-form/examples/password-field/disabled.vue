<script lang="ts" setup>
import { PasswordField } from "@pisagor/vue-form";
</script>

<template>
  <PasswordField
    auto-complete="current-password"
    disabled
    id="password-field-disabled"
    label="Password"
    placeholder="Enter your password"
  />
</template>
