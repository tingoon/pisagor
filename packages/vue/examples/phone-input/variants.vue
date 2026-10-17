<script lang="ts" setup>
import { PhoneInput } from "@pisagor/vue/phone-input";
</script>

<template>
  <div class="flex flex-col gap-2">
    <PhoneInput placeholder="Primary" variant="primary" />
    <PhoneInput placeholder="Secondary" variant="secondary" />
  </div>
</template>
