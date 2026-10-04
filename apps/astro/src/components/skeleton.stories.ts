import { Skeleton } from "@pisagor/astro/skeleton";
import CircleExample from "#/astro/examples/skeleton/circle.astro";
import CompositionExample from "#/astro/examples/skeleton/composition.astro";
import DefaultExample from "#/astro/examples/skeleton/default.astro";
import TextExample from "#/astro/examples/skeleton/text.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "Placeholders that reserve space while content is loading.",
      },
    },
  },
  title: "Components/Feedback/Skeleton",
});

export const Playground = meta.story({
  args: {
    class: "h-4 w-48",
  },
  tags: ["autodocs"],
});

export const Circle = meta.story({
  render: () => ({ component: CircleExample }),
});

export const Composition = meta.story({
  render: () => ({ component: CompositionExample }),
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Text = meta.story({
  render: () => ({ component: TextExample }),
});
