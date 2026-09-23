import { Marquee } from "@pisagor/react";
import * as Examples from "@pisagor/react/marquee/examples";
import { marqueeItems } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Marquee,
  parameters: {
    docs: {
      description: {
        component:
          "Scrolls content horizontally in a continuous loop for logos, quotes, or promotional strips.",
      },
    },
  },
  title: "Components/Marketing/Marquee",
});

export const Playground = meta.story({
  args: {
    items: marqueeItems,
  },
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const PauseOnHover = meta.story({
  render: Examples.PauseOnHover,
});

export const Reverse = meta.story({
  render: Examples.Reverse,
});

export const Spacing = meta.story({
  render: Examples.Spacing,
});

export const Autofill = meta.story({
  render: Examples.Autofill,
});

export const CustomSpeed = meta.story({
  render: Examples.CustomSpeed,
});

export const Fade = meta.story({
  render: Examples.Fade,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
