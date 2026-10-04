import { Surface } from "@pisagor/astro/surface";
import DefaultExample from "#/astro/examples/surface/default.astro";
import NestedExample from "#/astro/examples/surface/nested.astro";
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

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Nested = meta.story({
  render: () => ({ component: NestedExample }),
});
