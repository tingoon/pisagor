import preview from "#/storybook/preview";
import { Card, Skeleton } from "..";

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
  render: () => (
    <div className="flex items-center gap-2">
      <Skeleton.Circle className="size-16" />
      <Skeleton.Text lines={3} />
    </div>
  ),
});

export const InCard = meta.story({
  render: () => (
    <Card>
      <Card.Header className="flex flex-row items-center gap-2">
        <Skeleton.Circle className="size-12" />
        <Skeleton.Text lines={2} />
      </Card.Header>
      <Card.Content>
        <Skeleton.Text lines={3} />
      </Card.Content>
      <Card.Footer className="flex items-center gap-2">
        <Skeleton.Circle className="size-12" />
        <Skeleton.Text lines={2} />
      </Card.Footer>
    </Card>
  ),
});

export const SkeletonText = meta.story({
  render: () => (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton.Text lines={5} />
      <Skeleton.Text lines={3} />
      <Skeleton.Text lines={2} />
    </div>
  ),
});
