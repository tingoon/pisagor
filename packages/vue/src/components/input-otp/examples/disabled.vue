<script lang="ts" setup>
import { InputOTP } from "..";
</script>

<template>
  <InputOTP :default-value="['1', '2', '3', '4']" :disabled="true">
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Slot :index="2" />
    <InputOTP.Slot :index="3" />
  </InputOTP>
</template>
