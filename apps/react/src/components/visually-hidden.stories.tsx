import { VisuallyHidden } from "@pisagor/react";
import * as Examples from "#/react/examples/visually-hidden";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "Hides text from the screen while keeping it available to screen readers and other assistive technology.",
      },
    },
  },
  title: "Components/Utilities/Visually Hidden",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});
