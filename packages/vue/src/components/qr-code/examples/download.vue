<script setup lang="ts">
import { PhDownload } from "@phosphor-icons/vue";
import { Button, Card, Input } from "@pisagor/vue";
import { ref } from "vue";
import { QrCode } from "..";

const value = ref("");
</script>

<template>
        <QrCode :encoding="{ ecc: qualityLabel }" :value="value">
          <Card class="[--space:--spacing(6)]">
            <Card.Content class="flex flex-col justify-center gap-6">
              <Input v-model:value="value" placeholder="Generate a QR code" />
              <div class="flex flex-col items-center gap-2">
                <p class="font-medium text-muted-foreground text-sm">Live preview</p>
                <QrCode.Frame />
              </div>
              <div class="flex items-center gap-2">
                <QrCode.Download as-child file-name="qr-code" mime-type="image/png">
                  <Button class="w-1/2" size="icon-md" variant="outline">
                    <PhDownload />
                    PNG
                  </Button>
                </QrCode.Download>
                <QrCode.Download as-child file-name="qr-code" mime-type="image/svg+xml">
                  <Button class="w-1/2" size="icon-md">
                    <PhDownload />
                    SVG
                  </Button>
                </QrCode.Download>
              </div>
            </Card.Content>
          </Card>
        </QrCode>
  
</template>
