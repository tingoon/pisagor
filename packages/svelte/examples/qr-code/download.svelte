<script lang="ts">
import { Button, Card, Input, QrCode } from "@pisagor/svelte";
import DownloadIcon from "phosphor-svelte/lib/DownloadIcon";

const QUALITY_BY_LEVEL = {
  0: "L",
  20: "M",
  40: "Q",
  60: "H",
} as const;

const getQualityLevel = (length: number) => {
  if (length < 20) return 0;
  if (length < 40) return 20;
  if (length < 60) return 40;
  return 60;
};

let value = $state("");
const qualityLabel = $derived(QUALITY_BY_LEVEL[getQualityLevel(value.length)]);
</script>

<QrCode encoding={{ ecc: qualityLabel }} {value}>
  <Card class="[--space:--spacing(6)]">
    <Card.Content class="flex flex-col justify-center gap-2">
      <Input
        oninput={(e) => (value = e.currentTarget.value)}
        placeholder="Generate a QR code"
        {value}
      />
      <div class="flex flex-col items-center gap-2">
        <p class="font-medium text-muted-foreground text-sm">Live preview</p>
        <QrCode.Frame />
      </div>
      <div class="flex items-center gap-2">
        <QrCode.Download fileName="qr-code" mimeType="image/png">
          {#snippet asChild(
            props,
          )}
            <Button
              {...props()}
              aria-label="Download PNG"
              class="w-1/2"
              size="icon-md"
              variant="outline"
            >
              <DownloadIcon />
              PNG
            </Button>
          {/snippet}
        </QrCode.Download>
        <QrCode.Download fileName="qr-code" mimeType="image/svg+xml">
          {#snippet asChild(
            props,
          )}
            <Button
              {...props()}
              aria-label="Download SVG"
              class="w-1/2"
              size="icon-md"
            >
              <DownloadIcon />
              SVG
            </Button>
          {/snippet}
        </QrCode.Download>
      </div>
    </Card.Content>
  </Card>
</QrCode>
