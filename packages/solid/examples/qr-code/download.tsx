/** @jsxImportSource solid-js */

import { Button, Card, Input, QrCode } from "@pisagor/solid";
import { DownloadIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Download() {
  const QUALITY_BY_LEVEL = {
    0: "L",
    20: "M",
    40: "Q",
    60: "H",
  } as const;

  const getQualityLevel = (length: number) => {
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
  };
  const [value, setValue] = createSignal("");

  const qualityLabel = QUALITY_BY_LEVEL[getQualityLevel(value().length)];

  return (
    <QrCode encoding={{ ecc: qualityLabel }} value={value()}>
      <Card class="[--space:--spacing(6)]">
        <Card.Content class="flex flex-col justify-center gap-2">
          <Input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Generate a QR code"
            value={value()}
          />
          <div class="flex flex-col items-center gap-2">
            <p class="font-medium text-muted-foreground text-sm">
              Live preview
            </p>
            <QrCode.Frame />
          </div>
          <div class="flex items-center gap-2">
            <QrCode.Download
              asChild={(props) => (
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
              )}
              fileName="qr-code"
              mimeType="image/png"
            />
            <QrCode.Download
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Download SVG"
                  class="w-1/2"
                  size="icon-md"
                >
                  <DownloadIcon />
                  SVG
                </Button>
              )}
              fileName="qr-code"
              mimeType="image/svg+xml"
            />
          </div>
        </Card.Content>
      </Card>
    </QrCode>
  );
}
