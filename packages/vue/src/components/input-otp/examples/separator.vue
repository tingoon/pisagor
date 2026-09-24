<script lang="ts" setup>
import { InputOTP } from "..";
</script>

<template>
  <InputOTP>
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Separator />
    <InputOTP.Slot :index="2" />
    <InputOTP.Slot :index="3" />
    <InputOTP.Separator />
    <InputOTP.Slot :index="4" />
    <InputOTP.Slot :index="5" />
  </InputOTP>
</template>
