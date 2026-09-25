import { Marquee } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/marquee/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const PauseOnHover = meta.story({
  render: exampleRender(Examples.PauseOnHover),
});

export const Reverse = meta.story({
  render: exampleRender(Examples.Reverse),
});

export const Spacing = meta.story({
  render: exampleRender(Examples.Spacing),
});

export const Autofill = meta.story({
  render: exampleRender(Examples.Autofill),
});

export const CustomSpeed = meta.story({
  render: exampleRender(Examples.CustomSpeed),
});

export const Fade = meta.story({
  render: exampleRender(Examples.Fade),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Manual composition with `Marquee.Root` when shorthand props are not enough.",
      },
    },
  },
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
