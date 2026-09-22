import { Carousel } from "@pisagor/react";
import * as Examples from "@pisagor/react/carousel/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component:
          "Steps through a set of slides or images so users can browse one item at a time without leaving the page.",
      },
    },
  },
  title: "Components/Media/Carousel",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Autoplay = meta.story({
  render: Examples.Autoplay,
});

export const Loop = meta.story({
  render: Examples.Loop,
});

export const MouseDrag = meta.story({
  render: Examples.MouseDrag,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const Spacing = meta.story({
  render: Examples.Spacing,
});

export const SlidesPerPage = meta.story({
  render: Examples.SlidesPerPage,
});

export const ThumbnailIndicatorVertical = meta.story({
  render: Examples.ThumbnailIndicatorVertical,
});

export const ThumbnailIndicator = meta.story({
  render: Examples.ThumbnailIndicator,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Compound = meta.story({
  render: Examples.Compound,
});
