import Button from "../button/button.astro";
import EmptyState from "./empty-state.astro";

export default {
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: "Explains an empty view and offers a clear next action.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Feedback/Empty State",
};

export const Default = {
  args: {
    description: "Create your first project to get started.",
    slots: {
      actions: { component: Button, slots: { default: "Create project" } },
    },
    title: "No projects yet",
  },
};
