<script setup lang="ts">
import { PhFish } from "@phosphor-icons/vue";
import { QrCode } from "..";
</script>

<template>
        <QrCode value="https://example.com/docs">
          <QrCode.Frame />
          <QrCode.Overlay>
            <PhFish />
          </QrCode.Overlay>
        </QrCode>
  
</template>
