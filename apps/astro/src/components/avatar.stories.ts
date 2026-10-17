import { Avatar } from "@pisagor/astro";
import preview from "#/storybook/preview";
import * as Examples from "#/astro/examples/avatar";

const meta = preview.meta({
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "Shows a user or entity with an image or fallback initials.",
      },
    },
  },
  title: "Components/Data Display/Avatar",
});

export const Playground = meta.story({
  args: {
    fallback: "AB",
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});

export const Shapes = meta.story({
  render: () => ({ component: Examples.Shapes }),
});

export const Fallbacks = meta.story({
  render: () => ({ component: Examples.Fallbacks }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
