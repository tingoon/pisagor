import { Swap } from "@pisagor/react";
import * as Examples from "#/react/examples/swap";
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
  render: Examples.Variants,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});
