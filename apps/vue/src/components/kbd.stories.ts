import { Kbd } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/kbd";

const meta = preview.meta({
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component:
          "Displays keyboard shortcuts in a monospace badge so users know which keys to press.",
      },
    },
  },
  title: "Components/Data Display/Kbd",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const KbdGroup = meta.story({
  render: exampleRender(Examples.KbdGroup),
});

export const WithButton = meta.story({
  render: exampleRender(Examples.WithButton),
});

export const WithTooltip = meta.story({
  render: exampleRender(Examples.WithTooltip),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
