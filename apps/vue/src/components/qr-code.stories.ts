import { QrCode } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/qr-code/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const ErrorCorrection = meta.story({
  render: exampleRender(Examples.ErrorCorrection),
});

export const Overlay = meta.story({
  render: exampleRender(Examples.Overlay),
});

export const Download = meta.story({
  render: exampleRender(Examples.Download),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
