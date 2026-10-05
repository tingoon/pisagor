import { Skeleton } from "@pisagor/astro";
import * as Examples from "#/astro/examples/skeleton";
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
  render: () => ({ component: Examples.Circle }),
});

export const Composition = meta.story({
  render: () => ({ component: Examples.Composition }),
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Text = meta.story({
  render: () => ({ component: Examples.Text }),
});
