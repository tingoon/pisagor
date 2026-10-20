<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
</script>

<template>
  <InputOTP
    :default-value="['1', '2', '3', '4']"
    :disabled="true"
    :length="4"
  />
</template>
