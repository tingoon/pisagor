import { DownloadIcon } from "@phosphor-icons/react";
import { Button, Card, Input } from "@pisagor/react";
import { useState } from "react";
import { QrCode } from "..";
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
  const [value, setValue] = useState("");

  const qualityLabel = QUALITY_BY_LEVEL[getQualityLevel(value.length)];

  return (
    <QrCode encoding={{ ecc: qualityLabel }} value={value}>
      <Card className="[--space:--spacing(6)]">
        <Card.Content className="flex flex-col justify-center gap-2">
          <Input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Generate a QR code"
            value={value}
          />
          <div className="flex flex-col items-center gap-2">
            <p className="font-medium text-muted-foreground text-sm">
              Live preview
            </p>
            <QrCode.Frame />
          </div>
          <div className="flex items-center gap-2">
            <QrCode.Download asChild fileName="qr-code" mimeType="image/png">
              <Button
                aria-label="Download PNG"
                className="w-1/2"
                size="icon-md"
                variant="outline"
              >
                <DownloadIcon />
                PNG
              </Button>
            </QrCode.Download>
            <QrCode.Download
              asChild
              fileName="qr-code"
              mimeType="image/svg+xml"
            >
              <Button
                aria-label="Download SVG"
                className="w-1/2"
                size="icon-md"
              >
                <DownloadIcon />
                SVG
              </Button>
            </QrCode.Download>
          </div>
        </Card.Content>
      </Card>
    </QrCode>
  );
}
