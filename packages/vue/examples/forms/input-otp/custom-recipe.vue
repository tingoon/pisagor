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
  <InputOTP :recipe="brandInputOtpRecipe" :group-size="3" />
</template>
