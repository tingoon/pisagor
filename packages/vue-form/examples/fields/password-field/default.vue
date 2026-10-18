<script lang="ts" setup>
import { PasswordField } from "@pisagor/vue-form";
</script>

<template>
  <PasswordField
    auto-complete="new-password"
    description="At least 8 characters, including a number."
    id="password-field-new"
    label="New password"
    placeholder="Create a password"
  />
</template>
