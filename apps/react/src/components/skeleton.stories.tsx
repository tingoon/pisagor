import { Skeleton } from "@pisagor/react";
import * as Examples from "@pisagor/react/skeleton/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          "Placeholder shapes that pulse while content loads so layouts feel stable instead of empty.",
      },
    },
  },
  title: "Components/Feedback/Skeleton",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const SkeletonText = meta.story({
  render: Examples.SkeletonText,
});

export const InCard = meta.story({
  render: Examples.InCard,
});
