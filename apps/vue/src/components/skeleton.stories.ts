import { Skeleton } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/skeleton/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const SkeletonTextStory = meta.story({
  render: exampleRender(Examples.SkeletonTextStory),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const InCard = meta.story({
  render: exampleRender(Examples.InCard),
});
