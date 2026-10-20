<script lang="ts" setup>
import { QrCode } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap items-end justify-center gap-2">
    <QrCode size="sm" value="https://example.com" />
    <QrCode size="md" value="https://example.com" />
    <QrCode size="lg" value="https://example.com" />
  </div>
</template>
