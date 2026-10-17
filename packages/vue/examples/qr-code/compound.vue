<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { QrCode } from "@pisagor/vue";
</script>

<template>
  <QrCode value="https://example.com">
    <QrCode.Frame />
  </QrCode>
</template>
