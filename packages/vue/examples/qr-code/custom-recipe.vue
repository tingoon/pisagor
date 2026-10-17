<script lang="ts" setup>
import { qrCodeRecipe } from "@pisagor/recipes";
import { QrCode } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandQrCodeRecipe = tv({
  extend: qrCodeRecipe,
  slots: {
    frame: "rounded-xl fill-emerald-800",
    overlay: "bg-emerald-700",
  },
  variants: {},
});
</script>

<template>
  <QrCode value="https://example.com" :recipe="brandQrCodeRecipe" />
</template>
