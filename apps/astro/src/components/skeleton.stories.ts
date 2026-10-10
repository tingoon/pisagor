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

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const SkeletonText = meta.story({
  render: () => ({ component: Examples.SkeletonText }),
});

export const InCard = meta.story({
  render: () => ({ component: Examples.InCard }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
