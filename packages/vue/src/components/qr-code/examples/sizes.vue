<script setup lang="ts">
import { QrCode } from "..";
</script>

<template>
        <div class="flex flex-wrap items-end justify-center gap-6">
          <QrCode class="[--qr-code-size:6rem]">
            <QrCode.Frame class="rounded-md border" />
          </QrCode>
          <QrCode class="[--qr-code-size:8rem]">
            <QrCode.Frame class="rounded-md border" />
          </QrCode>
        </div>
  
</template>
