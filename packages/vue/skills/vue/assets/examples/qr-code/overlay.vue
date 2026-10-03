<script lang="ts" setup>
import { PhFish } from "@phosphor-icons/vue";
import { QrCode } from "../../../../../src/components/qr-code";
</script>

<template>
  <QrCode value="https://example.com/docs">
    <QrCode.Frame />
    <QrCode.Overlay>
      <PhFish />
    </QrCode.Overlay>
  </QrCode>
</template>
