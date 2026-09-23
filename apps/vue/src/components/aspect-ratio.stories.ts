import { AspectRatio } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/aspect-ratio/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Video = meta.story({
  render: exampleRender(Examples.Video),
});

export const Portrait = meta.story({
  render: exampleRender(Examples.Portrait),
});

export const Responsive = meta.story({
  render: exampleRender(Examples.Responsive),
});

export const Square = meta.story({
  render: exampleRender(Examples.Square),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
