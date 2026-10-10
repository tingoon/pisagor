import { Surface } from "@pisagor/astro";
import * as Examples from "#/astro/examples/surface";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Surface,
  parameters: {
    docs: {
      description: {
        component:
          "Provides nested background surfaces that step through tonal levels.",
      },
    },
  },
  title: "Components/Layout/Surface",
});

export const Playground = meta.story({
  args: {
    class: "p-4",
    slots: { default: "Surface" },
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const Padding = meta.story({
  render: () => ({ component: Examples.Padding }),
});

export const Nested = meta.story({
  render: () => ({ component: Examples.Nested }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
