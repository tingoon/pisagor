import { Avatar } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/avatar";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Shapes = meta.story({
  render: exampleRender(Examples.Shapes),
});

export const Count = meta.story({
  render: exampleRender(Examples.Count),
});

export const Fallbacks = meta.story({
  render: exampleRender(Examples.Fallbacks),
});

export const Group = meta.story({
  render: exampleRender(Examples.Group),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
