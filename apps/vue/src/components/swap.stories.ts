import { Swap } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/swap/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Swap,
  parameters: {
    docs: {
      description: {
        component:
          "Swaps between two pieces of content with a transition, such as play and pause icons.",
      },
    },
  },
  title: "Components/Actions/Swap",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
