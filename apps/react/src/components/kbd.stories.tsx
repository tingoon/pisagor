import { Kbd } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/kbd";

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
  args: {
    children: "K",
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const KbdGroup = meta.story({
  render: Examples.KbdGroup,
});

export const WithButton = meta.story({
  render: Examples.WithButton,
});

export const WithTooltip = meta.story({
  render: Examples.WithTooltip,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
