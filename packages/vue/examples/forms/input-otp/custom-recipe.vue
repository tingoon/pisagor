<script lang="ts" setup>
import { inputOtpRecipe } from "@pisagor/recipes";
import { InputOTP } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandInputOtpRecipe = tv({
  extend: inputOtpRecipe,
  slots: {
    input: "caret-emerald-600",
    separator: "bg-emerald-500",
  },
  variants: {},
});
</script>

<template>
  <InputOTP :recipe="brandInputOtpRecipe">
    <InputOTP.Slot :index="0" />
    <InputOTP.Slot :index="1" />
    <InputOTP.Slot :index="2" />
    <InputOTP.Separator />
    <InputOTP.Slot :index="3" />
    <InputOTP.Slot :index="4" />
    <InputOTP.Slot :index="5" />
  </InputOTP>
</template>
