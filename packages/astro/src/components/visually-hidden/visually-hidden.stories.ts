import VisuallyHidden from "./visually-hidden.astro";

export default {
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component: "Hides content visually while keeping it available to assistive technology.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Utilities/Visually Hidden",
};

export const Default = {
  args: {
    slots: { default: "Screen reader only label" },
  },
};
