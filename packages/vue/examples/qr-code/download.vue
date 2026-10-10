<script lang="ts" setup>
import { PhDownload } from "@phosphor-icons/vue";
import { Button, Card, Input, QrCode } from "@pisagor/vue";
import { computed, ref } from "vue";

const QUALITY_BY_LEVEL = {
  0: "L",
  20: "M",
  40: "Q",
  60: "H",
} as const;

function getQualityLevel(length: number) {
  if (length < 20) {
    return 0;
  }
  if (length < 40) {
    return 20;
  }
  if (length < 60) {
    return 40;
  }
  return 60;
}

const value = ref("");
const qualityLabel = computed(
  () => QUALITY_BY_LEVEL[getQualityLevel(value.value.length)],
);

function onValueChange(next: string) {
  value.value = next;
}
</script>

<template>
  <QrCode :encoding="{ ecc: qualityLabel }" :value="value">
    <Card class="[--space:--spacing(6)]">
      <Card.Content class="flex flex-col justify-center gap-6">
        <Input
          placeholder="Generate a QR code"
          :value="value"
          @value-change="onValueChange"
        />
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
          <QrCode.Download
            as-child
            file-name="qr-code"
            mime-type="image/svg+xml"
          >
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
