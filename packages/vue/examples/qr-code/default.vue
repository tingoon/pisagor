<script lang="ts" setup>
import { QrCode } from "../../src/components/qr-code";
</script>

<template>
  <QrCode value="https://example.com/docs">
    <QrCode.Frame />
  </QrCode>
</template>
