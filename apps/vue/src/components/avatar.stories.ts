import { Avatar } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/avatar/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a user or entity image with a shaped fallback when the source is unavailable.",
      },
    },
  },
  title: "Components/Media/Avatar",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Shapes = meta.story({
  render: exampleRender(Examples.Shapes),
});

export const Fallbacks = meta.story({
  render: exampleRender(Examples.Fallbacks),
});

export const FallbackOnly = meta.story({
  render: exampleRender(Examples.FallbackOnly),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
