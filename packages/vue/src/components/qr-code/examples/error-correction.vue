<script lang="ts" setup >
import { QrCode } from "..";

const eccLevels = ["L", "M", "Q", "H"] as const;
</script>

<template>
        <div class="flex flex-wrap items-center gap-6">
          <div class="flex flex-col items-center gap-2" v-for="ecc in eccLevels" :key="ecc">
            <QrCode
              class="[--qr-code-size:6rem]"
              value="https://example.com/docs"
              :encoding="{ ecc }"
            >
              <QrCode.Frame />
            </QrCode>
            <p class="text-muted-foreground text-sm">{{ ecc }}</p>
          </div>
        </div>
  
</template>
