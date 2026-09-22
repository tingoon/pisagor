import { InputOTP } from "@pisagor/react";
import * as Examples from "@pisagor/react/input-otp/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          "Collects one-time passcodes as separate digits so users can enter and review verification codes.",
      },
    },
  },
  title: "Components/Forms/Input OTP",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const BlurOnComplete = meta.story({
  render: Examples.BlurOnComplete,
});

export const CustomSize = meta.story({
  render: Examples.CustomSize,
});

export const FourDigits = meta.story({
  render: Examples.FourDigits,
});

export const Mask = meta.story({
  render: Examples.Mask,
});

export const Separator = meta.story({
  render: Examples.Separator,
});

export const WithPlaceholder = meta.story({
  render: Examples.WithPlaceholder,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});
