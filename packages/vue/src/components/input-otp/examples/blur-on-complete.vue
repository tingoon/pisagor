<script lang="ts" setup>
import { InputOTP } from "..";
</script>

<template>
  <InputOTP :blur-on-complete="true">
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Slot :index="2" />
    <InputOTP.Slot :index="3" />
  </InputOTP>
</template>
