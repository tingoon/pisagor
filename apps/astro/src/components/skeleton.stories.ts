import { Skeleton } from "@pisagor/astro/skeleton";
import CircleExample from "@pisagor/astro/skeleton/examples/circle.astro";
import CompositionExample from "@pisagor/astro/skeleton/examples/composition.astro";
import DefaultExample from "@pisagor/astro/skeleton/examples/default.astro";
import TextExample from "@pisagor/astro/skeleton/examples/text.astro";

export default {
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "Placeholders that reserve space while content is loading.",
      },
    },
  },
  title: "Components/Feedback/Skeleton",
};

export const Playground = {
  args: {
    class: "h-4 w-48",
  },
  tags: ["autodocs"],
};

export const Circle = {
  render: () => ({ component: CircleExample }),
};

export const Composition = {
  render: () => ({ component: CompositionExample }),
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Text = {
  render: () => ({ component: TextExample }),
};
