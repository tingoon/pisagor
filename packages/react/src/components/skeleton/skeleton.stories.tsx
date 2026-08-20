import { Card, Skeleton } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Skeleton,
  parameters: {
    docs: {
      aliases: ["placeholder"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Placeholder shapes that pulse while content loads so layouts feel stable instead of empty.",
      },
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
