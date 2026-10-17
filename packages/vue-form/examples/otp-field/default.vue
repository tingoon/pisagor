<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { OtpField } from "@pisagor/vue-form";
</script>

<template>
  <OtpField
    class="items-center"
    description="Enter the 6-digit code we sent to your phone."
    label="Verification code"
  />
</template>
