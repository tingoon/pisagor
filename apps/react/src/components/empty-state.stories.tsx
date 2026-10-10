import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button, EmptyState } from "@pisagor/react";
import * as Examples from "#/react/examples/empty-state";
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
  },
  title: "Components/Feedback/Empty State",
});

export const Playground = meta.story({
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
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Compact = meta.story({
  render: Examples.Compact,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
