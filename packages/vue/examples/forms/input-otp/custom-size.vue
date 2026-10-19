<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
</script>

<template>
  <InputOTP.Root>
    <InputOTP.Control>
      <InputOTP.Input class="size-12 text-lg" :index="0" />
      <InputOTP.Input class="size-12 text-lg" :index="1" />
      <InputOTP.Input class="size-12 text-lg" :index="2" />
      <InputOTP.Input class="size-12 text-lg" :index="3" />
    </InputOTP.Control>
  </InputOTP.Root>
</template>
