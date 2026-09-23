import { QrCode } from "@pisagor/react";
import * as Examples from "@pisagor/react/qr-code/examples";
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
  },
  title: "Components/Marketing/QR Code",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const ErrorCorrection = meta.story({
  render: Examples.ErrorCorrection,
});

export const Overlay = meta.story({
  render: Examples.Overlay,
});

export const Download = meta.story({
  render: Examples.Download,
});

export const Default = meta.story({
  render: Examples.Default,
});
