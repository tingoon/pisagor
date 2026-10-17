<script lang="ts" setup>
import { PhoneInput } from "@pisagor/vue/phone-input";
</script>

<template>
  <div class="flex flex-col gap-2">
    <PhoneInput placeholder="Small" size="sm" />
    <PhoneInput placeholder="Medium" size="md" />
    <PhoneInput placeholder="Large" size="lg" />
  </div>
</template>
