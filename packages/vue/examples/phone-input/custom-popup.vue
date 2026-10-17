<script lang="ts" setup>
import { PhoneInput } from "@pisagor/vue/phone-input";

const popupProps = {
  side: "bottom",
  sideOffset: 8,
};
</script>

<template>
  <PhoneInput placeholder="Enter phone number" :popup-props="popupProps" />
</template>
