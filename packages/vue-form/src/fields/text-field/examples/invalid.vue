<script setup lang="ts">
import { TextField } from "..";
</script>

<template>
  <TextField auto-complete="email" error="Please enter a valid email address." id="text-field-email-invalid" invalid label="Email" placeholder="you@example.com" type="email" value="not-an-email" />
</template>
