import { Skeleton } from "@pisagor/vue";
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
    metadata: {
      aliases: ["placeholder"],
      api: "compound",
      taxonomy: "primitive",
    },
  },
  subcomponents: {
    Circle: Skeleton.Circle,
    Text: Skeleton.Text,
  },
  title: "Components/Feedback/Skeleton",
});

export const Default = meta.story({
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-center gap-2">
        <Skeleton.Circle class="size-16" />
        <Skeleton.Text :lines="3" />
      </div>
    `,
  }),
});

export const SkeletonTextStory = meta.story({
  name: "SkeletonText",
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex flex-col gap-5">
        <Skeleton class="h-6 w-3/4" />
        <Skeleton.Text :lines="5" />
        <Skeleton.Text :lines="3" />
        <Skeleton.Text :lines="2" />
      </div>
    `,
  }),
});
