import { AspectRatio } from "@pisagor/react";
import * as Examples from "@pisagor/react/aspect-ratio/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AspectRatio,
  parameters: {
    docs: {
      description: {
        component:
          "Keeps media and embedded content at a consistent width-to-height ratio as the layout changes.",
      },
    },
  },
  title: "Components/Layout/Aspect Ratio",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Portrait = meta.story({
  render: Examples.Portrait,
});

export const Responsive = meta.story({
  render: Examples.Responsive,
});

export const Square = meta.story({
  render: Examples.Square,
});

export const Video = meta.story({
  render: Examples.Video,
});
