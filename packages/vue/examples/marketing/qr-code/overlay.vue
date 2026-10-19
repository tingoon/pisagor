<script lang="ts" setup>
import { PhFish } from "@phosphor-icons/vue";
import { QrCode } from "@pisagor/vue";
</script>

<template>
  <QrCode value="https://example.com">
    <template #overlay>
      <PhFish />
    </template>
  </QrCode>
</template>
