import { Toggle } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/toggle";

const meta = preview.meta({
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "Stays pressed or released to turn a single option on or off, similar to a checkbox styled as a button.",
      },
    },
  },
  title: "Components/Actions/Toggle",
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

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});

export const IconGroup = meta.story({
  render: exampleRender(Examples.IconGroup),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
