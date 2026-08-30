import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button, EmptyState } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a centered placeholder when a view has no data and offers the next relevant actions.",
      },
    },
    metadata: {
      aliases: ["empty"],
      api: "compound-shorthand",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Actions: EmptyState.Actions,
    Description: EmptyState.Description,
    Media: EmptyState.Media,
    Root: EmptyState.Root,
    Title: EmptyState.Title,
  },
  title: "Components/Feedback/Empty State",
});

export const Default = meta.story({
  args: {
    actions: (
      <>
        <Button>Create project</Button>
        <Button variant="outline">Clear filters</Button>
      </>
    ),
    description:
      "No items match your current filters. Try clearing filters or creating a new project.",
    media: <MagnifyingGlassIcon />,
    title: "No projects found",
  },
});

export const Compact = meta.story({
  args: {
    className: "p-6",
    description: "You're all caught up. New notifications will appear here.",
    title: "No notifications",
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `EmptyState.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <EmptyState.Root>
      <EmptyState.Media>
        <MagnifyingGlassIcon />
      </EmptyState.Media>
      <EmptyState.Title>No projects found</EmptyState.Title>
      <EmptyState.Description>
        No items match your current filters. Try clearing filters or creating a new project.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button>Create project</Button>
        <Button variant="outline">Clear filters</Button>
      </EmptyState.Actions>
    </EmptyState.Root>
  ),
});
