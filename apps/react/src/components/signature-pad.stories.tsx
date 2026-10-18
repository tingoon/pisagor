import { SignaturePad } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/forms/signature-pad";

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
  render: Examples.Controlled,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const ImagePreview = meta.story({
  render: Examples.ImagePreview,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
