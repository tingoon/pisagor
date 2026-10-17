import { Separator } from "@pisagor/astro";
import preview from "#/storybook/preview";
import * as Examples from "#/astro/examples/separator";

const meta = preview.meta({
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Visually divides related content into clear sections.",
      },
    },
  },
  title: "Components/Layout/Separator",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Vertical = meta.story({
  render: () => ({ component: Examples.Vertical }),
});

export const List = meta.story({
  render: () => ({ component: Examples.List }),
});

export const InlineNavigation = meta.story({
  render: () => ({ component: Examples.InlineNavigation }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});

export const Decorative = meta.story({
  render: () => ({ component: Examples.Decorative }),
});
