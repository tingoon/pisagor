import { DownloadIcon, FishIcon } from "@phosphor-icons/react";
import { Button, Card, Input, QrCode } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: QrCode,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a scannable QR code so users can open links or share data with a phone camera.",
      },
    },
    metadata: {
      aliases: ["qrcode"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Download: QrCode.Download,
    Frame: QrCode.Frame,
    Overlay: QrCode.Overlay,
  },
  title: "Components/Marketing/QR Code",
});

export const Default = meta.story({
  args: {
    value: "https://example.com/docs",
  },
  render: (args) => (
    <QrCode {...args}>
      <QrCode.Frame />
    </QrCode>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <QrCode className="[--qr-code-size:6rem]">
        <QrCode.Frame className="rounded-md border" />
      </QrCode>
      <QrCode className="[--qr-code-size:8rem]">
        <QrCode.Frame className="rounded-md border" />
      </QrCode>
    </div>
  ),
});

export const ErrorCorrection = meta.story({
  render: () => {
    const eccLevels = ["L", "M", "Q", "H"] as const;
    return (
      <div className="flex flex-wrap items-center gap-6">
        {eccLevels.map((ecc) => (
          <div className="flex flex-col items-center gap-2" key={ecc}>
            <QrCode
              className="[--qr-code-size:6rem]"
              encoding={{ ecc }}
              value="https://example.com/docs"
            >
              <QrCode.Frame />
            </QrCode>
            <p className="text-muted-foreground text-sm">{ecc}</p>
          </div>
        ))}
      </div>
    );
  },
});

export const Overlay = meta.story({
  args: {
    value: "https://example.com/docs",
  },
  render: (args) => (
    <QrCode {...args}>
      <QrCode.Frame />
      <QrCode.Overlay>
        <FishIcon />
      </QrCode.Overlay>
    </QrCode>
  ),
});

export const Download = meta.story({
  render: () => {
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
          <Card.Content className="flex flex-col justify-center gap-6">
            <Input
              onChange={(e) => setValue(e.target.value)}
              placeholder="Generate a QR code"
              value={value}
            />
            <div className="flex flex-col items-center gap-2">
              <p className="font-medium text-muted-foreground text-sm">Live preview</p>
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
              <QrCode.Download asChild fileName="qr-code" mimeType="image/svg+xml">
                <Button aria-label="Download SVG" className="w-1/2" size="icon-md">
                  <DownloadIcon />
                  SVG
                </Button>
              </QrCode.Download>
            </div>
          </Card.Content>
        </Card>
      </QrCode>
    );
  },
});
