<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhoneInput } from "@pisagor/vue/phone-input";
</script>

<template>
  <PhoneInput invalid placeholder="Enter phone number" />
</template>
