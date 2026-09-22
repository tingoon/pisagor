import { Carousel } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/carousel/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Autoplay = meta.story({
  render: exampleRender(Examples.Autoplay),
});

export const Loop = meta.story({
  render: exampleRender(Examples.Loop),
});

export const MouseDrag = meta.story({
  render: exampleRender(Examples.MouseDrag),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const Spacing = meta.story({
  render: exampleRender(Examples.Spacing),
});

export const SlidesPerPage = meta.story({
  render: exampleRender(Examples.SlidesPerPage),
});

export const ThumbnailIndicatorVertical = meta.story({
  render: exampleRender(Examples.ThumbnailIndicatorVertical),
});

export const ThumbnailIndicator = meta.story({
  render: exampleRender(Examples.ThumbnailIndicator),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
