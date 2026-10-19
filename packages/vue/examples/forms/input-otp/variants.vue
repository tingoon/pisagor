<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <InputOTP variant="primary" :group-size="3" />
    <InputOTP variant="secondary" :group-size="3" />
  </div>
</template>
