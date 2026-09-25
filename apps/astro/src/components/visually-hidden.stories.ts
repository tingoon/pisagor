import { VisuallyHidden } from "@pisagor/astro/visually-hidden";

export default {
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides content visually while keeping it available to assistive technology.",
      },
    },
  },
  title: "Components/Utilities/Visually Hidden",
};

export const Playground = {
  args: {
    slots: { default: "Screen reader only label" },
  },
  tags: ["autodocs"],
};
