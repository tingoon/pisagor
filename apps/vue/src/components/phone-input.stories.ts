import { PhoneInput } from "@pisagor/vue/phone-input";
import * as Examples from "@pisagor/vue/phone-input/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PhoneInput,
  parameters: {
    docs: {
      description: {
        component: "Phone number input with optional globe flag preview.",
      },
    },
  },
  title: "Components/Forms/Phone Input",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: exampleRender(Examples.OnSurface),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});
