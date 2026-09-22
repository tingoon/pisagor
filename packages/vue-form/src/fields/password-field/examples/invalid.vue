<script setup lang="ts">
import { PasswordField } from "..";
</script>

<template>
  <PasswordField auto-complete="new-password" error="Password must be at least 8 characters." id="password-field-invalid" invalid label="Password" placeholder="Enter your password" value="short" />
</template>
