import { PhoneInput } from "@pisagor/vue/phone-input";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/phone-input";

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

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const CustomPopup = meta.story({
  render: exampleRender(Examples.CustomPopup),
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

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
