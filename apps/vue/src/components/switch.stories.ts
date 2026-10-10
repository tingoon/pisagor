import { Switch } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/switch";

const meta = preview.meta({
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          "Toggles a setting on or off with immediate visual feedback.",
      },
    },
  },
  title: "Components/Forms/Switch",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
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
