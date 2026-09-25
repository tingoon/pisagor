import { SignaturePad } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/signature-pad/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SignaturePad,
  parameters: {
    docs: {
      description: {
        component:
          "Captures a handwritten signature on a canvas for approvals and forms.",
      },
    },
  },
  title: "Components/Forms/Signature Pad",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const ImagePreview = meta.story({
  render: exampleRender(Examples.ImagePreview),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
