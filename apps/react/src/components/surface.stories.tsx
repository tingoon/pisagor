import { Surface } from "@pisagor/react";
import * as Examples from "@pisagor/react/surface/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Surface,
  parameters: {
    docs: {
      description: {
        component:
          "Provides a semantic background layer for grouped content such as cards and panels, with automatic elevation for nested sections.",
      },
    },
  },
  title: "Components/Layout/Surface",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Padding = meta.story({
  render: Examples.Padding,
});

export const Nested = meta.story({
  render: Examples.Nested,
});

export const WithFormControls = meta.story({
  render: Examples.WithFormControls,
});

export const Default = meta.story({
  render: Examples.Default,
});
