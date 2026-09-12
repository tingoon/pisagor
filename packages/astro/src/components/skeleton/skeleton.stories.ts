import StoryFrame from "#/storybook/story-frame.astro";
import Skeleton from "./skeleton.astro";
import SkeletonCircle from "./skeleton-circle.astro";
import SkeletonText from "./skeleton-text.astro";

export default {
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "Placeholders that reserve space while content is loading.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Skeleton",
};

export const Default = {
  args: {
    class: "h-4 w-48",
  },
};

export const Circle = {
  render: () => ({
    component: SkeletonCircle,
    props: { class: "size-12" },
  }),
};

export const Text = {
  render: () => ({
    component: SkeletonText,
    props: { class: "w-64", lines: 3 },
  }),
};

export const Composition = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex items-center gap-3" },
    slots: {
      default: [
        { component: SkeletonCircle, props: { class: "size-10" } },
        {
          component: SkeletonText,
          props: { class: "w-48", lines: 2 },
        },
      ],
    },
  }),
};
