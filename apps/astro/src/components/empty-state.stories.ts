import { Button, EmptyState } from "@pisagor/astro";
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
