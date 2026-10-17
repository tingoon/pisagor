<script lang="ts">
import source from "./with-placeholder.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputOTP } from "@pisagor/vue";
</script>

<template>
  <InputOTP placeholder="○">
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Slot :index="2" />
    <InputOTP.Slot :index="3" />
  </InputOTP>
</template>
