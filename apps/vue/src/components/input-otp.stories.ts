import { InputOTP } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/input-otp/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const BlurOnComplete = meta.story({
  render: exampleRender(Examples.BlurOnComplete),
});

export const CustomSize = meta.story({
  render: exampleRender(Examples.CustomSize),
});

export const FourDigits = meta.story({
  render: exampleRender(Examples.FourDigits),
});

export const Mask = meta.story({
  render: exampleRender(Examples.Mask),
});

export const Separator = meta.story({
  render: exampleRender(Examples.Separator),
});

export const WithPlaceholder = meta.story({
  render: exampleRender(Examples.WithPlaceholder),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
