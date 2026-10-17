<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { SwitchField } from "@pisagor/vue-form";
</script>

<template>
  <SwitchField
    description="Ask for a code from your authenticator app at sign-in."
    id="switch-field-two-factor"
    label="Two-factor authentication"
  />
</template>
