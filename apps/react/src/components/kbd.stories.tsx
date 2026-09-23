import { Kbd } from "@pisagor/react";
import * as Examples from "@pisagor/react/kbd/examples";
import preview from "#/storybook/preview";

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

export const WithButton = meta.story({
  render: Examples.WithButton,
});

export const KbdGroup = meta.story({
  render: Examples.KbdGroup,
});

export const WithTooltip = meta.story({
  render: Examples.WithTooltip,
});

export const Default = meta.story({
  render: Examples.Default,
});
