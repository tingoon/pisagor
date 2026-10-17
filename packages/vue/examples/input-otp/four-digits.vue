<script lang="ts">
import source from "./four-digits.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
</script>

<template>
  <InputOTP>
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Slot :index="2" />
    <InputOTP.Slot :index="3" />
  </InputOTP>
</template>
