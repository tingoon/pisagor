import { Surface } from "@pisagor/astro/surface";
import DefaultExample from "#/astro/examples/surface/default.astro";
import NestedExample from "#/astro/examples/surface/nested.astro";

export default {
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
};

export const Playground = {
  args: {
    class: "p-4",
    slots: { default: "Surface" },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Nested = {
  render: () => ({ component: NestedExample }),
};
