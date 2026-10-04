import { VisuallyHidden } from "@pisagor/astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
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
});

export const Playground = meta.story({
  args: {
    slots: { default: "Screen reader only label" },
  },
  tags: ["autodocs"],
});
