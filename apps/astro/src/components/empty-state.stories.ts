import { Button } from "@pisagor/astro/button";
import { EmptyState } from "@pisagor/astro/empty-state";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: "Explains an empty view and offers a clear next action.",
      },
    },
  },
  title: "Components/Feedback/Empty State",
});

export const Playground = meta.story({
  args: {
    description: "Create your first project to get started.",
    slots: {
      actions: { component: Button, slots: { default: "Create project" } },
    },
    title: "No projects yet",
  },
  tags: ["autodocs"],
});
