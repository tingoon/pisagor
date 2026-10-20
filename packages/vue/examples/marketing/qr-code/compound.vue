<script lang="ts" setup>
import { QrCode } from "@pisagor/vue";
</script>

<template>
  <QrCode.Root value="https://example.com">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>
  </QrCode.Root>
</template>
