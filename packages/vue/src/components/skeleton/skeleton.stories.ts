import { Card } from "@pisagor/vue/card";
import { Skeleton } from "@pisagor/vue/skeleton";
import preview from "#/vue/preview";

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

export const InCard = meta.story({
  render: () => ({
    components: { Card, Skeleton },
    template: `
      <Card>
        <Card.Header class="flex flex-row items-center gap-2">
          <Skeleton.Circle class="size-12" />
          <Skeleton.Text :lines="2" />
        </Card.Header>
        <Card.Content>
          <Skeleton.Text :lines="3" />
        </Card.Content>
        <Card.Footer class="flex items-center gap-2">
          <Skeleton.Circle class="size-12" />
          <Skeleton.Text :lines="2" />
        </Card.Footer>
      </Card>
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
