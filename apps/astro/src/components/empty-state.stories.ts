import { Button } from "@pisagor/astro/button";
import { EmptyState } from "@pisagor/astro/empty-state";

export default {
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: "Explains an empty view and offers a clear next action.",
      },
    },
  },
  title: "Components/Feedback/Empty State",
};

export const Playground = {
  args: {
    description: "Create your first project to get started.",
    slots: {
      actions: { component: Button, slots: { default: "Create project" } },
    },
    title: "No projects yet",
  },
  tags: ["autodocs"],
};
